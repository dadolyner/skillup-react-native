import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSyncExternalStore } from "react"
import { Platform } from "react-native"

export function createStore<State>(initialState: State) {
    type Callback = (newState: State, oldState: State) => void
    const subscribers = new Set<Callback>()

    const store = {
        useState() {
            return useSyncExternalStore(store.subscribe, store.getState)
        },
        getState() {
            return initialState
        },
        setState(newState: Partial<State>) {
            const oldState = initialState
            initialState = { ...initialState, ...newState }
            subscribers.forEach((callback) => {
                callback(initialState, oldState)
            })
        },
        subscribe(callback: Callback) {
            subscribers.add(callback)
            return () => {
                subscribers.delete(callback)
            }
        },
    }

    return store
}

export function createPersistedStore<State>(key: string, initialState: State) {
    const store = createStore(initialState)
    if (Platform.OS === "web") return store

    AsyncStorage.getItem(key).then((value) => {
        if (value) {
            store.setState(JSON.parse(value))
        }
    })

    store.subscribe((newState) => {
        AsyncStorage.setItem(key, JSON.stringify(newState))
    })

    return store
}
