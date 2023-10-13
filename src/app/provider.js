// app/provider.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
    posthog.init('phc_8wErP4vRCJYEVKADK1Lauqp3GEZBZ5UOUJA3EWECKPd', {
        api_host: 'https://eu.posthog.com'
    })
}

export default function PHProvider({ children }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}