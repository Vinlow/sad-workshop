const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('error', err => {
  console.log(`server error:\n${err.stack}`)
  server.close()
})

server.on('message', (msg, rinfo) => {
  console.log('RECEIVED: \t', msg.toString())
  server.send(msg, rinfo.port, rinfo.address, () => {
    console.log('SEND: \t', msg.toString())
    server.close()
  })
})

server.on('listening', () => {
  const address = server.address()
  console.log(`server listening ${address.address}:${address.port}`)
})

server.bind(7)
