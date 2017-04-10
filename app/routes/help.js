module.exports = function (router) {
  // Other Filings
  router.get('/help/other-filings', function (req, res) {
    res.render('help/other-filings')
  })
}
