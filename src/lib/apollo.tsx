import withApollo from "next-with-apollo";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: process.env.GRAPHQL_ENDPOINT,
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
