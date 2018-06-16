const BookingDao = require('../../daos/booking.dao/booking.dao')
const PathController = require('../path.controller')
const Booking = require('../../models/booking.model/booking.model')

class BookingController {
  constructor() {
    this.bookingDao = new BookingDao()
    this.apiController = new PathController()
  }

  findById(req, res) {
    let id = req.params.id

    this.bookingDao
      .findById(id)
      .then(this.apiController.findSuccess(res))
      .catch(this.apiController.findError(res))
  }

  findAll(res) {
    this.bookingDao
      .findAll()
      .then(this.apiController.findSuccess(res))
      .catch(this.apiController.findError(res))
  }

  update(req, res) {
    let booking = new Booking()
    booking.id = req.body.id
    booking.firstName = req.body.firstName
    booking.lastName = req.body.lastName
    booking.flight = req.body.flight

    return this.bookingDao
      .update(booking)
      .then(this.apiController.editSuccess(res))
      .catch(this.apiController.serverError(res))
  }

  create(req, res) {
    let booking = new Booking()
    if (req.body.id) {
      booking.id = req.body.id
    }
    booking.firstName = req.body.firstName
    booking.lastName = req.body.lastName
    booking.flight = req.body.flight

    return this.bookingDao
      .create(booking)
      .then(this.apiController.editSuccess(res))
      .catch(this.apiController.serverError(res))
  }

  deleteById(req, res) {
    let id = req.params.id

    this.bookingDao
      .deleteById(id)
      .then(this.apiController.editSuccess(res))
      .catch(this.apiController.serverError(res))
  }
}

module.exports = BookingController
