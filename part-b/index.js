const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const database = require('./providers/database.provider/database.provider')

database.init()

app.use(bodyParser.json())

let flightRouter = require('./paths/flight.path/route.flight.path')
app.use('/api/v1/flight', flightRouter)

let bookingRouter = require('./paths/booking.path/route.booking.path')
app.use('/api/v1/booking', bookingRouter)

const port = 3000
app.listen(port, function() {
  console.log('Server started on port:' + port)
})
