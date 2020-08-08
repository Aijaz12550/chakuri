const User = require('../Models/auth.js')

module.exports = {
  loginUser : async ({email, password}) => {
    console.log("email =>",email,"password =>",password)
    return { email}

  }
}
