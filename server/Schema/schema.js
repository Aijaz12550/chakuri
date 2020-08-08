const { buildSchema } = require("graphql");
const {
  loginInput,
  loginType,
  loginQuery,
  signupMutation,
  signupType,
  signupInput,
} = require("./login");

const schema = buildSchema(
  `
${loginType}
${signupType}

${loginInput}
${signupInput}

type RootQuery {
  ${loginQuery}
}
type RootMutation {
  ${signupMutation}
}

schema {
  query: RootQuery
  mutation: RootMutation
}
  `
);

module.exports = schema;
