const authResolver = require('./auth.js')

const rootResolver = {
  ...authResolver
}

module.exports = rootResolver
