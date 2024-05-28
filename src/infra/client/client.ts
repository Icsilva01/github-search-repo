import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Token } from "../token/token";

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});