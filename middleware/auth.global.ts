import { useAuthStoreWithout } from '@src/store/modules/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStoreWithout()
  if (!authStore.session) {
    try {
      const data = await authStore.getSession()
      if (String(data.auth) === 'false' && authStore.token)
        authStore.removeToken()
      if (to.path === '/500')
      navigateTo({ name: 'Root' })
    }
    catch (error) {
      if (to.path !== '/500')
      navigateTo({ name: '500' })
    }
  }
})