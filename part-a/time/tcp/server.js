require('net')
  .createServer(socket => socket.write(Number.parseInt(new Date().getTime(), 32).toString()))
  .listen(37, 'localhost')
