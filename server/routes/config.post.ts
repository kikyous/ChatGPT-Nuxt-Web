import { chatConfig } from "../chatgpt"

export default defineEventHandler(async (event) => {
  try {
    const response = await chatConfig()
    return response
  }
  catch (error) {
    return error
  }
})
