const dgram = require('dgram')
const client = dgram.createSocket('udp4')

client.on('message', (msg, rinfo) => {
  let buffer = Buffer.from(msg)
  let got = buffer.toString()
  console.log('RECEIVED: \t', got)
  client.close()
})

client.send('', 37, 'localhost', err => {
  console.log('SEND REQUEST')
})
