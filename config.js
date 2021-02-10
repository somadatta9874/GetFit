import  firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDqDmOkcKwxEkorMUXajI59TKlFxCXeF94",
    authDomain: "getfit-8eab0.firebaseapp.com",
    databaseURL: "https://getfit-8eab0-default-rtdb.firebaseio.com",
    projectId: "getfit-8eab0",
    storageBucket: "getfit-8eab0.appspot.com",
    messagingSenderId: "848059406029",
    appId: "1:848059406029:web:7f178e3bd64ba2e33bfb84"
  };
  

  firebase.initializeApp(firebaseConfig);



  export default firebase.firestore();