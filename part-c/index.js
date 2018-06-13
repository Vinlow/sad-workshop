let express = require('express')
const csrf = require('csrf-token')

var app = express()
var database = []

const phrase = 'asdfasdfasdfsadf'

function generateToken() {
  return csrf.createSync(phrase)
}

function protect(req, res, next) {
  let token = req.headers['csrf-token']
  let verified = database.find(x => x === token)

  // Token was not found
  if (verified === undefined) {
    return res.json({ message: 'Unauthorized' })
  }

  // Token was found
  next()
}

app.get('/public', (req, res) => {
  res.json({ message: 'Hello World!' })
})
app.get('/login', (req, res) => {
  var token = generateToken()
  database.push(token)
  res.json({ token, message: 'Token Generated!' })
})
app.get('/secret', protect, (req, res) => {
  res.json({ message: 'Hello Secret World!' })
})

app.listen(3000)
console.log('Secret Server Started!')
