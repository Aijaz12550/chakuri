const User = require("../Models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  signup: async ({ name, email, password }) => {
    console.log("==>",email)
    let isEmailExist = await User.findOne({ email: email });

    if (isEmailExist) {
      throw new Error("This Email is already taken.");
    }

    let hashedPassword = await bcrypt.hash(password, 12);

    let createUser = new User({ name, email, password: hashedPassword });
    createUser
      .save()
      .then((res) => {
        console.log("data", res);
      })
      .catch((error) => {
        console.log("error", error);
      });

    return { token: "data mila" };
  },

  loginUser: async ({ email, password }) => {
    let user = await User.findOne({ email });
    console.log("user ==>",user._id)
    if (!user) {
      throw new Error("Email or Password is invalid!");
    }
    let verifyPassword = bcrypt.compare(password, user.password);

    if (!verifyPassword) {
      throw new Error("Email or Password is invalid!");
    }

    let token = jwt.sign({ userId: user._id, email }, "somesupersecretkey", {
      expiresIn: "1h",
    });

    return { email,token, userId: user._id };
  },
};
