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
}
