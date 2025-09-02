"use client";
import React from "react";

import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "./apollo-client";

interface ApolloWrapperProps {
  readonly children: React.ReactNode;
}


export default function ApolloWrapper({ children }: ApolloWrapperProps) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}