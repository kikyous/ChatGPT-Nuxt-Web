import type { ChatMessage } from 'chatgpt'
import { chatReplyProcess } from '../chatgpt'
import { RequestProps } from '../types'

export default defineEventHandler(async (event) => {
  try {
    const { prompt, options = {}, systemMessage, temperature, top_p } = await readBody(event) as RequestProps
    let firstChunk = true
    await chatReplyProcess({
      message: prompt,
      lastContext: options,
      process: (chat: ChatMessage) => {
        event.node.res.write(firstChunk ? JSON.stringify(chat) : `\n${JSON.stringify(chat)}`)
        firstChunk = false
      },
      systemMessage,
      temperature,
      top_p,
    })
  }
  catch (error) {
    event.node.res.write(JSON.stringify(error))
  }
  finally {
    event.node.res.end()
  }
})