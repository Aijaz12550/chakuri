import { gql } from "@apollo/client";

const LoginQuery = gql`
  query loginUser($email: String! $password: String!) {
    loginUser(email: $email password: $password) {
      email
    }
  }
`;

export {
  LoginQuery
}
