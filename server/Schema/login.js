exports.loginType = `
type loginType {
  email: String
  token: String
  userId: String
}
`;

exports.loginInput = `
input loginInput {
  email: String!
  password: String!
}
`;

exports.loginMutation = `
  loginUser(email: String! password: String!): loginType
`;

exports.helloQuery = `
 test(test: String): loginType
`

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
