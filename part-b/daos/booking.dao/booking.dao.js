const Booking = require('../../models/booking.model/booking.model')
const Controller = require('../dao.controller')

class BookingDao {
  constructor() {
    this.common = new Controller.Common()
  }

  findById(id) {
    let sqlRequest = 'SELECT id, firstName, lastName, flight FROM booking WHERE id=$id'
    let sqlParams = { $id: id }
    return this.common.findOne(sqlRequest, sqlParams).then(row => new Booking(row.id, row.firstName, row.lastName, row.flight))
  }

  findAll() {
    let sqlRequest = 'SELECT * FROM booking'
    return this.common.findAll(sqlRequest).then(rows => {
      let bookings = []
      for (const row of rows) {
        bookings.push(new Booking(row.id, row.firstName, row.lastName, row.flight))
      }
      return bookings
    })
  }

  update(Booking) {
    let sqlRequest = 'UPDATE booking SET ' + 'firstName=$firstName, ' + 'lastName=$lastName, ' + 'flight=$flight ' + 'WHERE id=$id'
    let sqlParams = {
      $firstName: Booking.firstName,
      $lastName: Booking.lastName,
      $flight: Booking.flight,
      $id: Booking.id
    }
    return this.common.run(sqlRequest, sqlParams)
  }

  create(Booking) {
    let sqlRequest = 'INSERT into booking (firstName, lastName, flight) ' + 'VALUES ($firstName, $lastName, $flight)'
    let sqlParams = {
      $firstName: Booking.firstName,
      $lastName: Booking.lastName,
      $flight: Booking.flight
    }
    return this.common.run(sqlRequest, sqlParams)
  }

  deleteById(id) {
    let sqlRequest = 'DELETE FROM booking WHERE id=$id'
    let sqlParams = { $id: id }
    return this.common.run(sqlRequest, sqlParams)
  }
}

module.exports = BookingDao
