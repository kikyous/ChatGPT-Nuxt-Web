export default defineEventHandler(async (event) => {
  try {
    const { token } = await readBody(event) as { token: string }
    if (!token)
      throw new Error('Secret key is empty')

    if (process.env.AUTH_SECRET_KEY !== token)
      throw new Error('密钥无效 | Secret key is invalid')

    return { status: 'Success', message: 'Verify successfully', data: null }
  }
  catch (error) {
    // @ts-expect-error
    return { status: 'Fail', message: error.message, data: null }
  }
})
