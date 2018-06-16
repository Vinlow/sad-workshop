const Flight = require('../../daos/flight.dao/flight.dao')
const Controller = require('../dao.controller')

class FlightDao {
  constructor() {
    this.common = new Controller.Common()
  }

  findById(id) {
    let sqlRequest = 'SELECT id, name, airline FROM flight WHERE id=$id'
    let sqlParams = { $id: id }
    return this.common.findOne(sqlRequest, sqlParams).then(row => new Flight(row.id, row.name, row.airline))
  }

  findAll() {
    let sqlRequest = 'SELECT * FROM flight'
    return this.common.findAll(sqlRequest).then(rows => {
      let flights = []
      for (const row of rows) {
        flights.push(new Flight(row.id, row.name, row.airline))
      }
      return flights
    })
  }

  update(Flight) {
    let sqlRequest = 'UPDATE flight SET ' + 'name=$name, ' + 'airline=$airline, ' + 'WHERE id=$id'

    let sqlParams = {
      $name: Flight.name,
      $airline: Flight.airline,
      $id: Flight.id
    }
    return this.common.run(sqlRequest, sqlParams)
  }

  create(Flight) {
    let sqlRequest = 'INSERT into flight (name, airline) ' + 'VALUES ($name, $airline)'
    let sqlParams = {
      $name: Flight.name,
      $airline: Flight.airline
    }
    return this.common.run(sqlRequest, sqlParams)
  }

  deleteById(id) {
    let sqlRequest = 'DELETE FROM flight WHERE id=$id'
    let sqlParams = { $id: id }
    return this.common.run(sqlRequest, sqlParams)
  }
}

module.exports = FlightDao
