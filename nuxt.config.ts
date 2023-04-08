// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "url";

export default defineNuxtConfig({
    css: ['@src/styles/index.less'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    ssr: false,
    alias: {
        "@src": fileURLToPath(new URL('./src', import.meta.url)),
    }
})
