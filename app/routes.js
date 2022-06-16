const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router
router.get('/', function(req, res) {
    res.redirect('search/index')

})

// Enter your details page
router.post('/r1-2/dissolved-search', function(req, res) {

    var errors = [];
    var companyNameHasError = false;
    var selectNameHasError = false;
    var previousNameAndAlphaHasError = false;

  if(req.session.data['company-name'] == ""){
    companyNameHasError = true;
    errors.push({text: "Enter a company name", href: "#company-name-error"});
  }
  if(typeof req.session.data['select-name'] == 'undefined'){
    selectNameHasError = true;
    errors.push({text: "Select which company names you want to search", href: "#select-name-error"});
  }
  if(typeof req.session.data['alpha-display'] !== 'undefined'){

    previousNameAndAlphaHasError = true;
    errors.push({text: "Select company name when they were dissolved. Previous company names is not currently available for alphabetical search", href: "#previous-name-and-alpha-error"});
  }
  else
  {
    res.redirect('/r1-2/dissolved-records-no-previous-names')
  }
})




// Enter your details page
router.post('/r1-2/dissolved-search-error-message', function(req, res) {
    res.redirect('/r1-2/dissolved-records-no-previous-names')

})
