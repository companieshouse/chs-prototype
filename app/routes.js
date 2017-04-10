var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route index page
router.post('/', function (req, res) {
  res.render('index')
})

// Search Routes
require('./routes/search.js')(router)
// Company Routes
require('./routes/companies.js')(router)
// People Routes
require('./routes/people.js')(router)
// Account Routes
require('./routes/account.js')(router)
// Disqualified Routes
require('./routes/disqualified.js')(router)
// Feature Routes
require('./routes/features.js')(router)
// Help Routes
require('./routes/help.js')(router)

module.exports = router
