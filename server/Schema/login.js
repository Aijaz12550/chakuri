exports.loginType = `
type loginType {
  email: String
}
`;

exports.loginInput = `
input loginInput {
  email: String!
  password: String!
}
`;

exports.loginQuery = `
  loginUser(email: String! password: String!): loginType
`;

// signup ***
exports.signupType = `
  type signupType {
    token : String
  }
`;
exports.signupInput = `
  input signupInput {
    name: String
    email: String!
    password: String!
  }
`;
exports.signupMutation = `
  signup(name: String! email: String! password: String!): signupType
`;
