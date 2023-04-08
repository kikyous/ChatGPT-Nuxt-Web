import { isNotEmptyString } from '../utils/is'

export default defineEventHandler((event) => {
  if (!['/chat-process'].includes(event.node.req.url!)) {
    return
  }
  const AUTH_SECRET_KEY = process.env.AUTH_SECRET_KEY
  if (isNotEmptyString(AUTH_SECRET_KEY)) {
      const Authorization = getHeader(event, 'Authorization')
      if (!Authorization || Authorization.replace('Bearer ', '').trim() !== AUTH_SECRET_KEY!.trim())
        throw new Error('Error: 无访问权限 | No access rights')
  }
})