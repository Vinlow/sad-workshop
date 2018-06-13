const request = require('request-promise')

const host = 'http://localhost:3000'
let token = ''

new Promise(async (resolve, reject) => {
  let response = await getRequest('/public')
  console.log(`Asking for the public world \n Answer: ${response.message}\n\n`)

  response = await getRequest('/secret')
  console.log(`Asking for the secret world \n Answer: ${response.message}\n\n`)

  response = await getRequest('/login')
  console.log(`Asking for the token \n Answer: ${response.message}\n\n`)
  token = response.token

  response = await getRequest('/secret')
  console.log(`Asking for the secret world \n Answer: ${response.message}\n\n`)

  resolve('Secret World Discovered!')
})

function getRequest(_path) {
  return request({
    uri: `${host}${_path}`,
    headers: {
      'csrf-token': token
    },
    json: true
  })
}
