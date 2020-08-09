const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LoginSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Login',LoginSchema)
