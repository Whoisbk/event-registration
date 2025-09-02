import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    user {
      first_name
      id
      last_name
      phone_number
      updated_at
      created_at
      code
    }
  }
`;

export const GET_USER_BY_NAME = gql`
query GetUserByName($user: String!, $email: String!) {
  user(where: {first_name: {_eq: $user}, email: {_eq: $email}}) {
    id
    first_name
    last_name
    email
    phone_number
    created_at
    updated_at
    code
  }
}


`;
