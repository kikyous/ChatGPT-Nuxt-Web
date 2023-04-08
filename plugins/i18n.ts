import i18n from '@src/locales'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n)
})