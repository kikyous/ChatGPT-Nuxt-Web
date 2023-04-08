import { chatConfig, currentModel } from "../chatgpt"

export default defineEventHandler(async (event) => {
  try {
    const AUTH_SECRET_KEY = process.env.AUTH_SECRET_KEY
    const hasAuth = isNotEmptyString(AUTH_SECRET_KEY)
    return { status: 'Success', message: '', data: { auth: hasAuth, model: currentModel() } }
  }
  catch (error) {
    // @ts-expect-error
    return { status: 'Fail', message: error.message, data: null }
  }
})
