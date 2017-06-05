import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './Routes';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {
  componentWillMount() {
    let config = {
    apiKey: "AIzaSyCLJFw3_d80uMB7oQYCkerujRrW3AoehDs",
    authDomain: "ssgmensagens.firebaseapp.com",
    databaseURL: "https://ssgmensagens.firebaseio.com",
    projectId: "ssgmensagens",
    storageBucket: "ssgmensagens.appspot.com",
    messagingSenderId: "878076123996"
  };
  firebase.initializeApp(config);
  }
 render() {
   return(
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Routes />
    </Provider>
);
}}