import React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "../apollo";
import "./App.css";
import Header from "../components/header/Header";
import { Cards } from "../components/card/Cards";

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <Cards />
  </ApolloProvider>
);

export default App;
