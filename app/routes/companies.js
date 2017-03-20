module.exports = function (router) {
  // Company Profile
  router.get('/company/profile', function (req, res) {
    res.render('company/profile')
  })
  // Filing History
  router.get('/company/filing-history', function (req, res) {
    res.render('company/filing-history')
  })
  // Officers
  router.get('/company/people/officers', function (req, res) {
    res.render('company/people/officers')
  })
  // Persons of Significnt Control
  router.get('/company/people/persons-of-significant-control', function (req, res) {
    res.render('company/people/persons-of-significant-control')
  })
  // List of Charges
  router.get('/company/charges/', function (req, res) {
    res.render('company/charges/list')
  })
  // Charge Details
  router.get('/company/charges/charge', function (req, res) {
    res.render('company/charges/charge')
  })
}
