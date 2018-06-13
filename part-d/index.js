var q = 'tasks'

// Publisher
function publisher(conn) {
  conn.createChannel(on_open)
  function on_open(err, ch) {
    if (err != null) bail(err)
    ch.assertQueue(q)

    for (let i = 0; i <= 100; i++) {
      ch.sendToQueue(q, new Buffer(`Done ${i}`))
      console.log(`Send ${i}`)
    }
  }
}

require('amqplib/callback_api').connect(
  'amqp://localhost',
  function(err, conn) {
    if (err != null) bail(err)
    publisher(conn)
  }
)
