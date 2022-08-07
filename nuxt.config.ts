import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/css/tailwind.css"],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    typescript: {
        strict: true,
        shim: false
    },
    // build modules
    modules: ['@vueuse/nuxt', '@pinia/nuxt'],

    // auto import components
    components: true,

    // vueuse
    vueuse: {
        ssrHandlers: true,
    },
    ssr: false,
})
