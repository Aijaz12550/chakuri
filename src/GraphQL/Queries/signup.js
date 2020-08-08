import { gql } from "@apollo/client";

const signupMutation = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;
export { signupMutation };
