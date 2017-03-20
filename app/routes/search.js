module.exports = function (router) {
  // Search Index
  router.get('/search', function (req, res) {
    res.render('search/search')
  })
  // Search Results
  router.get('/search/results', function (req, res) {
    res.render('search/results')
  })
}
