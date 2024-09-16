import fetch from 'node-fetch'

const fetchCode = async (url, timeout) => {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => {
      setTimeout(() => {
        reject('fetch js timeout')
      }, timeout)
    })
  ])
}

export default fetchCode;