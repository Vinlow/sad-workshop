const NetcatServer = require('netcat/server')
const nc = new NetcatServer()


nc.port(7).listen()