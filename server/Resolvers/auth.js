const User = require("../Models/auth.js");
const jwt = require('jsonwebtoken')
module.exports = {
  signup: async ({name,email,password}) => {
    let isEmailExist = await User.findOne({email: email})
    console.log("isuser",isEmailExist)
    if(isEmailExist){
      throw new Error("This Email is already taken.")
    }
    let createUser = new User({name,email,password})
     createUser.save().then(res=>{
      console.log('data',res)
    }).catch(error=>{
      console.log("error",error)
    })

    return { token: "data mila" };
  },
  loginUser: async ({ email, password }) => {
    console.log("email =>", email, "password =>", password);
    return { email };
  },
};
