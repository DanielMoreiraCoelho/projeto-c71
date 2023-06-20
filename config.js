import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyDOm0xj5_sI0Bg19eJ2q8DsBxL8RUvRn4E",
    authDomain: "projeto-c71-1323d.firebaseapp.com",
    projectId: "projeto-c71-1323d",
    storageBucket: "projeto-c71-1323d.appspot.com",
    messagingSenderId: "821969701573",
    appId: "1:821969701573:web:804d3cef923686b7efbeac"
  };
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
