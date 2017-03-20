module.exports = function (router) {
  // Browse Disqualified Register
  router.get('/disqualified/browse', function (req, res) {
    res.render('disqualified/browse')
  })
  // View Disqualified Director
  router.get('/disqualified/profile', function (req, res) {
    res.render('disqualified/profile')
  })
}
