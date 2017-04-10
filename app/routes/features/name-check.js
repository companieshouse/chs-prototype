module.exports = function (router) {
  // Search Results
  router.get('/feature/name-check/search', function (req, res) {
    res.render('feature/name-check/search')
  })
}
