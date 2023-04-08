import { store } from "@src/store"

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(store)
})