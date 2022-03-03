const profileModel = require('./model')

/* routes */
module.exports = function profiles(app) {

  app.get('/profiles', function (req, res) {
    profileModel.list().then(results => {
      res.send(results)
    })
  })
  app.get('/profiles/:id', function (req, res) {
    const {id} = req.params
    profileModel.get(id).then(results => {
      res.send(results)
    })
  })
}