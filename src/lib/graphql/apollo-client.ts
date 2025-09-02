import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// Client-side Apollo client (without next/headers)
export const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL ??
      process.env.HASURA_GRAPHQL_URL,
  }),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
    mutate: {
      fetchPolicy: "no-cache",
    },
  },
});
