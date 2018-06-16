const express = require('express')
const FlightController = require('./controller.flight.path')

const flightController = new FlightController()

const router = express.Router()

router.get('/', function(req, res) {
  flightController.findAll(res)
})

router.get('/:id', function(req, res) {
  flightController.findById(req, res)
})

router.post('/', function(req, res) {
  flightController.create(req, res)
})

router.put('/:id', function(req, res) {
  flightController.update(req, res)
})

router.delete('/:id', function(req, res) {
  flightController.deleteById(req, res)
})

module.exports = router
