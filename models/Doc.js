const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create Schema
const DocSchema = new Schema({
  prop1: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Doc = mongoose.model('doc', DocSchema)
