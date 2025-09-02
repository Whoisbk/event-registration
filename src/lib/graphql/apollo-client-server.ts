import { ApolloClient, createHttpLink, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({
  uri: process.env.HASURA_GRAPHQL_URL,
});
const authLink = setContext(async (_, { headers }) => {
  try {
    return {
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? "", // Replace with your actual secret
      },
    };
  } catch (error) {
    console.error("Error getting session for GraphQL request:", error);
    // Return headers without auth if there's an error
    return { headers };
  }
});


export const client = () => {

  const client = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
};
