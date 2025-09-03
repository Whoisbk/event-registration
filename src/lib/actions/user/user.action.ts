"use server";

import { client } from "@/lib/graphql/apollo-client-server";
import { GET_USER_BY_NAME } from "@/lib/graphql/queries/users.graphql";
import { INSERT_USER } from "@/lib/graphql/mutations/user.graphql";

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

export const insertUser = async (
  formData: {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  }
) => {
  try {
    const { data } = await client().mutate({
      mutation: INSERT_USER,
      variables: {
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phoneNumber
        },
      },
    });

    return data.insert_user_one;
  } catch (error) {
    console.error(error);
    return error;
  }
};
