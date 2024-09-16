import Koa from 'koa'
import transformCode from './core/transform.js'
import fetchCode from './core/http.js'
import minifyCode from './core/minify.js'

const app = new Koa()

app.use(async (ctx) => {
  const queryParams = ctx.query
  const { url, callback, failback, minify } = queryParams
  let draftScriptContent = ''
  try {
    const response = await fetchCode(url, 2000)
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
  if (minify) {
    draftScriptContent = await minifyCode(draftScriptContent)
  }
  ctx.body = draftScriptContent
  ctx.type = 'application/javascript'
  ctx.status = 200
})

app.listen(3000)
