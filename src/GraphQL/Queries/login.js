import { gql } from "@apollo/client";

const LoginQuery = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
      token
      userId
    }
  }
`;

export { LoginQuery };
