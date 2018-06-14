const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('message', (msg, rinfo) => {
  let bitTime = Number.parseInt(new Date().getTime(), 32).toString()
  let message = Buffer.from(bitTime)
  server.send(message, rinfo.port, rinfo.address, () => {
    server.close()
  })
})
server.bind(37)
