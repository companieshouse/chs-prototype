module.exports = function (router) {
  // Search Results
  router.get('/feature/name-check', function (req, res) {
    res.render('feature/name-check/search')
  })
}
