import AsyncStorage from "@react-native-async-storage/async-storage"
import NetInfo from "@react-native-community/netinfo"
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister"
import { QueryClient, QueryKey, useQueryClient } from "@tanstack/react-query"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { ReactNode, useEffect, useState } from "react"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
        },
    },
})

NetInfo.addEventListener((state) => {
    queryClient.setDefaultOptions({
        queries: {
            enabled: state.isConnected === true,
        },
    })
})

const persistOptions = {
    maxAge: 1000 * 60 * 60 * 12, // 12 hours
    persister: createAsyncStoragePersister({ storage: AsyncStorage }),
}

export function QueryClientProvider({ children }: { children: ReactNode }) {
    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
            {children}
        </PersistQueryClientProvider>
    )
}

export function useQueryRefreshControl(props: { queryKey: QueryKey }) {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const queryKey: QueryKey = [...props.queryKey]
    const queryClient = useQueryClient()
    const { isConnected } = NetInfo.useNetInfo()

    useEffect(() => {
        if (isConnected === false) {
            setIsRefreshing(false)
            return
        }
    }, [isConnected, isRefreshing])

    // Refresh specific queries
    const refreshQuery = async (queryKey: QueryKey) => {
        setIsRefreshing(true)
        await queryClient.refetchQueries({ queryKey: [...queryKey] }).finally(() => setIsRefreshing(false))
    }

    // Refresh all queries
    const refresh = async () => {
        setIsRefreshing(true)

        await queryClient.refetchQueries({ queryKey }).finally(() => {
            setIsRefreshing(false)
        })
    }

    return { queryKey, refreshing: isRefreshing, refreshQuery, refresh }
}
