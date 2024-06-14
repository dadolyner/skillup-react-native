import { useQuery } from "@tanstack/react-query"

export function useQuotes() {
    const query = useQuery({
        staleTime: 60000,
        queryKey: ["quotes"],
        queryFn: async () => {
            const response = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
                headers: {
                    "X-Api-Key": process.env.EXPO_PUBLIC_API_KEY || "",
                },
            })

            return response.json()
        },
    })

    return query
}
