import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Client from "./Client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>App</div>
      <Client />
    </ApolloProvider>
  );
};

export default App;
