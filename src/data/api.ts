import { env } from "@/env";

const API_BASE_URL = env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api"

export function api(path: string, init?: RequestInit) {
    const url = `${API_BASE_URL}/${path}`
    console.log("Fetching URL:", url.toString())
    return fetch(url, init)
}