const amq = require('amqplib/callback_api')
const queue = 'tasks'
let timer = 0
const timing = 200

amq.connect(
  'amqp://localhost',
  (_e, _conn) => {
    // An error occurred
    if (_e !== null) {
      return console.error(_e)
    }

    // Channel is created
    _conn.createChannel(connected)

    function connected(err, ch) {
      if (err != null) bail(err)
      ch.assertQueue(queue)

      setInterval(() => {
        ch.sendToQueue(queue, new Buffer(`Done ${timer++}`))
        console.log(`Send ${timer}`)
      }, timing)
    }
  }
)
