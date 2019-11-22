import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { NextPageContext } from "next";

export interface MyContext extends NextPageContext {
  apolloClient: ApolloClient<InMemoryCache>;
}
