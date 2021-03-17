const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


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
  if(typeof req.session.data['alpha-display'] !== 'undefined' & req.session.data['select-name'] == "previous" ){
    previousNameAndAlphaHasError = true;
    errors.push({text: "Select company name when they were dissolved. Previous company names is not currently available for alphabetical search", href: "#previous-name-and-alpha-error"});
  }
  if(companyNameHasError | selectNameHasError | previousNameAndAlphaHasError){
    res.render('dissolved/r1-2/dissolved-search', {
          errorCompanyName: companyNameHasError,
          errorSelectName: selectNameHasError,
          errorPreviousNameAndAlpha: previousNameAndAlphaHasError,
          errorList: errors
        })
  }
  else
  {
    res.redirect('/r1-2/dissolved-records-no-previous-names')
  }
})