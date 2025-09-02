import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    HASURA_GRAPHQL_URL: process.env.HASURA_GRAPHQL_URL,
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  },
  output: "standalone",
  outputFileTracingRoot:
    "/Users/bokamoso/Documents/My Projects/event-registration",
};

export default nextConfig;
