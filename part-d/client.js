const amq = require('amqplib/callback_api')
const queue = 'tasks'
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

    // Connection is open
    function connected(err, ch) {
      if (err != null) bail(err)
      ch.assertQueue(queue)

      setInterval(() => {
        ch.consume(queue, function(msg) {
          console.log(msg.content.toString())
          ch.ack(msg)
        })
      }, timing)
    }
  }
)
