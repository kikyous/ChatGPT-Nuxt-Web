export default defineEventHandler((event) => {
    return {
      now: new Date().getTime()
    }
  })