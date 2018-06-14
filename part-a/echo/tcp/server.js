var net = require('net')
var server = net.createServer(socket => socket.pipe(socket))
server.listen(7, 'localhost')
