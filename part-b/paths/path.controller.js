class ApiController {
  findSuccess(res) {
    return result => {
      console.log('results', result)
      res.status(200)
      res.json(result)
    }
  }

  existsSuccess(res) {
    return result => {
      res.status(200)
      res.json(result)
    }
  }

  editSuccess(res) {
    return () => {
      console.log('e')
      res.status(201)
      res.json({})
    }
  }

  serverError(res) {
    return error => {
      res.status(500)
      res.json(error)
    }
  }

  findError(res) {
    return error => {
      res.status(404)
      res.json(error)
    }
  }
}

module.exports = ApiController
