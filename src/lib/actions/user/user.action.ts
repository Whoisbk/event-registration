"use server";

import { client } from "@/lib/graphql/apollo-client-server";
import { GET_USER_BY_NAME } from "@/lib/graphql/queries/users.graphql";

export const getUserbyName = async (
  user: string,
  last_name: string,
  email: string,
  phone_number: string
) => {
  try {
    const { data } = await client().query({
      query: GET_USER_BY_NAME,
      variables: { user, email },
    });
    return data.user[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};
