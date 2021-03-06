import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './style/index.css'
import { ApolloProvider } from '@apollo/client';
import gqlClient from './GraphQL/Config'

ReactDOM.render(

    <ApolloProvider client={gqlClient}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
