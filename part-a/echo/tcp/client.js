var net = require('net')

const random = Math.floor(Math.random() * 1000)
const text = `Random Number ${random}`

var client = new net.Socket()
client.connect(
  7,
  'localhost',
  function() {
    client.write(text)
    console.log('SEND: \t', text)
  }
)

client.on('data', function(data) {
  console.log('RECEIVED: \t', data.toString())
  client.destroy()
})
