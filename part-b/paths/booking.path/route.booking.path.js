const express = require('express')
const BookingController = require('./controller.booking.path')

const router = express.Router()

const bookingController = new BookingController()

router.get('/:id', function(req, res) {
  bookingController.findById(req, res)
})

router.get('/', function(req, res) {
  bookingController.findAll(res)
})

router.put('/:id', function(req, res) {
  bookingController.update(req, res)
})

router.post('/create', function(req, res) {
  bookingController.create(req, res)
})

router.delete('/:id', function(req, res) {
  bookingController.deleteById(req, res)
})

module.exports = router
