const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  sites: [
    {
      displayName: {
        type: String
      },
      url: {
        type: String
      }
    }
  ]
})

module.exports = User = mongoose.model('users', UserSchema)