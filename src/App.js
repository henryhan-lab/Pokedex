import logo from './logo.svg';
import './App.css';
import { ApolloClient,InMemoryCache,HttpLink,onError,ApolloLink,ApolloProvider } from '@apollo/client';
import Pokedex from './pokedex';
import { setContext } from "@apollo/client/link/context";


const client = new ApolloClient({
  uri: "https://graphqlpokemon.favware.tech/",
  cache: new InMemoryCache()
});




function App() {
  return (
    <ApolloProvider client={client}>  
      <Pokedex/>     
  </ApolloProvider>


  );
}

export default App;
