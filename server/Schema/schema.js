const { buildSchema } = require("graphql");
const {
  loginInput,
  loginType,
  loginMutation,
  signupMutation,
  signupType,
  signupInput,
  helloQuery
} = require("./login");

const schema = buildSchema(
  `
${loginType}
${signupType}

${loginInput}
${signupInput}

type RootQuery {
  ${helloQuery }
}
type RootMutation {
  ${signupMutation}
  ${loginMutation}
}

schema {
  query: RootQuery
  mutation: RootMutation
}
  `
);

module.exports = schema;
