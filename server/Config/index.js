const mongoose = require('mongoose')

const uri = "mongodb+srv://aijaz:aijaz@cluster0-ywqrk.mongodb.net/graphql_?retryWrites=true&w=majority"

mongoose.connect(uri)

module.exports = mongoose
