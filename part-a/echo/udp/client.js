const dgram = require('dgram')

const random = Math.floor(Math.random() * 1000)
const text = `Random Number ${random}`

const message = Buffer.from(text)
const client = dgram.createSocket('udp4')

client.on('message', (msg, rinfo) => {
  let buffer = Buffer.from(msg)
  let got = buffer.toString()
  console.log('RECEIVED: \t', got)
  if (got == text) {
    client.close()
  }
})

client.send(message, 7, 'localhost', err => {
  console.log('SEND: \t', text)
})
