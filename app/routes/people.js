module.exports = function (router) {
  // Officer Profile
  router.get('/people/profile', function (req, res) {
    res.render('people/profile')
  })
}
