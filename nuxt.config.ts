// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr: false,
    devtools: {enabled: true},
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://rsms.me/inter/inter.css",
                },
            ]
        }
    },
    runtimeConfig: {
        public: {
            apiBaseUrl: 'http://localhost:8080' // can be overridden by NUXT_PUBLIC_API_BASE_URL environment variable
        }
    }
})
