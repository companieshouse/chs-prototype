module.exports = function (router) {
  // Search Results
  router.get('/feature/disqualifications/browse', function (req, res) {
    res.render('feature/disqualifications/browse')
  })
}
