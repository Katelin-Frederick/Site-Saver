// Module Imports
const Validator = require('validator')

// Local Imports
const isEmpty = require('./is-empty')

module.exports = function validateSitesInput(data) {
  let errors = {}

  data.displayName = !isEmpty(data.displayName) ? data.displayName : ''
  data.url = !isEmpty(data.url) ? data.url : ''

  if(Validator.isEmpty(data.displayName)) {
    errors.displayName = 'Display name is required'
  }

  if(Validator.isEmpty(data.url)) {
    errors.url = 'URL is required'
  }

  if(!isEmpty(data.url)) {
    if(!Validator.isURL(data.url)) {
      errors.url = 'Not a valid URL'
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}