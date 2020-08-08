exports.loginType = `
type loginType {
  token: String
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
  loginUser(input: loginInput): loginType
`;

// signup ***
exports.signupType = `
  type signupType {
    message : String
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
  signup(input: signupInput): signupType
`;
