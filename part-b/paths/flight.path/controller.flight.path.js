const FlightDao = require('../../daos/flight.dao/flight.dao')
const PathController = require('../path.controller')
const Flight = require('../../models/flight.model/flight.model')

class FlightController {
  constructor() {
    this.flightDao = new FlightDao()
    this.apiController = new PathController()
  }

  findById(req, res) {
    let id = req.params.id
    this.flightDao
      .findById(id)
      .then(this.apiController.findSuccess(res))
      .catch(this.apiController.findError(res))
  }

  findAll(res) {
    this.flightDao
      .findAll()
      .then(this.apiController.findSuccess(res))
      .catch(this.apiController.findError(res))
  }

  update(req, res) {
    let flight = new Flight()
    flight.id = req.body.id
    flight.name = req.body.name
    flight.airline = req.body.airline

    return this.flightDao
      .update(flight)
      .then(this.apiController.editSuccess(res))
      .catch(this.apiController.serverError(res))
  }

  create(req, res) {
    let flight = new Flight()
    flight.id = Math.floor(Math.random() * 10000000000)
    flight.name = req.body.name
    flight.airline = req.body.airline

    console.log(flight)

    return this.flightDao
      .create(flight)
      .then(this.apiController.editSuccess(res))
      .catch(this.apiController.serverError(res))
  }

  deleteById(req, res) {
    let id = req.params.id
    this.flightDao
      .deleteById(id)
      .then(this.apiController.editSuccess(res))
      .catch(this.apiController.serverError(res))
  }
}

module.exports = FlightController
