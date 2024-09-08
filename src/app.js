import Koa from 'koa'
import fetch from 'node-fetch'
import transformCode from './core/transform.js'

const app = new Koa()

app.use(async (ctx) => {
  const queryParams = ctx.query
  const { url, callback, failback } = queryParams
  let draftScriptContent = ''
  try {
    const response = await fetch(url)
    if (response.ok) {
      let inputCode = await response.text()
      inputCode = transformCode(inputCode)
      if (callback) {
        inputCode += `;${callback}()`
      }
      draftScriptContent = inputCode
    } else {
      draftScriptContent = 'var log = "fail fetch js";'
      if (failback) {
        draftScriptContent += `;${failback}()`
      }
    }
  } catch (error) {
    draftScriptContent = `var log = "${error}";`
    if (failback) {
      draftScriptContent += `;${failback}()`
    }
  }
  ctx.body = draftScriptContent
  ctx.type = 'application/javascript'
  ctx.status = 200
})

app.listen(3000)
