/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
  new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .block-label uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  $('.result-count').text('Showing 3 of 10 officers on 4 pages')
  $('.result-count').attr('data-current', 3)
  $('.result-count').attr('data-total', 10)
  $('.result-count').attr('data-pages', 4)

  // Signature button click
  $('.filters-heading').click(function () {
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open')
      $(this).attr('aria-expanded', false)
      $(this).next().attr('aria-hidden', true)
    } else {
      $(this).parent().addClass('open')
      $(this).attr('aria-expanded', true)
      $(this).next().attr('aria-hidden', false)
    }
    return false
  })

  // Filter Reset
  $('.filter-reset').click(function () {
    $('.filters :checkbox:enabled').prop('checked', false)
    return false
  })

  $('.filter-expand').click(function () {
    $('.filter').addClass('open')
    return false
  })

  $(".filter input[type='checkbox']").change(function () {
    var current = parseInt($('.result-count').attr('data-current'))
    var total = parseInt($('.result-count').attr('data-total'))
    $('.result-count').attr('data-current', current + 1)
    $('.result-count').attr('data-total', total + 1)
    $('.result-count').text('Showing ' + (current + 1) + ' of ' + (total + 1) + ' officers on 4 pages')
  })

  // SHOW FILING TYPE
  $("input[name='filterType']").change(function () {
    $('.filing-type').toggle()
  })

  // Manage Panel Switcher
  $('.manage-sections a').click(function () {
    var section = $(this).attr('data-target')
    $('.manage-sections a').removeClass('active')
    $(this).addClass('active')
    $('.company-manager > section').hide()
    $('.company-manager > section.' + section).show()
    console.log(section)
    return false
  })
})
