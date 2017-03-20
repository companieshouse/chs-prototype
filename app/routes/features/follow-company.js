module.exports = function (router) {
  // Search Results
  router.get('/feture/follow-company', function (req, res) {
    res.render('feature/follow-company/confirm')
  })
}
