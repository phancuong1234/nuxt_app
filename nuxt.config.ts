import { defineNuxtConfig } from "nuxt";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["ant-design-vue/dist/antd.css"],
  build: {},
  typescript: {
    strict: true,
    shim: false
  },
  // build modules
  modules: ["@vueuse/nuxt", "@pinia/nuxt", "@unocss/nuxt"],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: []
  },
  // auto import components
  components: false,

  // vueuse
  vueuse: {
    ssrHandlers: true
  },
  ssr: false
});
