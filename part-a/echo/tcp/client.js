const NetcatClient = require('netcat/client')
const nc2 = new NetcatClient()

nc2.addr('localhost').port(7).filter(function (chunk, enc, cb) {
    // transform upper case
    var out = chunk.toString().toUpperCase()
    this.push(Buffer.from(out))
    cb(null)
  }).pipe(process.stdout).connect()