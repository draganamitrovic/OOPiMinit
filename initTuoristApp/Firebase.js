
import React, { Component } from 'react';
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDNP5Zge-nFAS4L00HlOl6JvcTasqay7nk",
    authDomain: "tuoristapp.firebaseapp.com",
    databaseURL: "https://tuoristapp.firebaseio.com",
    projectId: "tuoristapp",
    storageBucket: "tuoristapp.appspot.com",
    messagingSenderId: "605769456709"
  };

  export default class Firebase extends React.Component{
      static auth;
      static registerInfo = {
          email: "",
          password: "",
          
      }

      static init() {
          firebase.initializeApp(config);
          Firebase.auth = firebase.auth();
      }
  }
 