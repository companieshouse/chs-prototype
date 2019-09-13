/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

$("input[name='documentType']").on('change', function () {
    if ($("input[name='documentType']").prop('checked') === false) {
      $('.document-type').hide()
    } else {
      $('.document-type').show()
    }
  })


})
