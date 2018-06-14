require('net')
  .Socket()
  .connect(
    37,
    'localhost'
  )
  .on('data', function(data) {
    console.log('RECEIVED: \t', data.toString())
    this.destroy()
  })
