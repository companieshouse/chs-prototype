module.exports = function (router) {
  // Sign In
  router.get('/account/sign-in', function (req, res) {
    res.render('account/sign-in')
  })
  // Register
  router.get('/account/register', function (req, res) {
    res.render('account/register')
  })
  // Forgotten Password
  router.get('/account/forgotten-password', function (req, res) {
    res.render('account/forgotten-password')
  })
  // My Account
  router.get('/account/my-account', function (req, res) {
    res.render('account/my-account')
  })
  // My Filings
  router.get('/account/my-filings', function (req, res) {
    res.render('account/my-filings/list')
  })
  // View a filing
  router.get('/account/my-filings/filing', function (req, res) {
    res.render('account/my-filings/filing')
  })
}
