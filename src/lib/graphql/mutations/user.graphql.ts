import { gql } from "@apollo/client";

export const INSERT_USER = gql`
mutation InsertUser($data: user_insert_input!) {
  insert_user_one(object: $data) {
    id
    first_name
    last_name
    email
    phone_number
  }
}

`;
