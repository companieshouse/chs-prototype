module.exports = function (router) {
  // Search Index
  router.get('/search', function (req, res) {
    res.render('search/search')
  })
  // Search All
  router.get('/search/all', function (req, res) {
    res.render('search/all')
  })
  // Search Companies
  router.get('/search/companies', function (req, res) {
    res.render('search/companies')
  })
  // Search Officers
  router.get('/search/officers', function (req, res) {
    res.render('search/officers')
  })
  // Search Disqualifications
  router.get('/search/disqualifications', function (req, res) {
    res.render('search/disqualifications')
  })
}
