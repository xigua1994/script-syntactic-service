import babel from '@babel/core'

function transform(inputCode) {
  const outCode = babel.transform(inputCode, {})
  return outCode.code
}

export default transform
