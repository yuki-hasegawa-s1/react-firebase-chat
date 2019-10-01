import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyArBnNqE8m5rucciUZ5zIcV2pEOnq3nTOo",
  authDomain: "hasegawa-app.firebaseapp.com",
  databaseURL: "https://hasegawa-app.firebaseio.com",
  projectId: "hasegawa-app",
  storageBucket: "",
  messagingSenderId: "224089872497",
  appId: "1:224089872497:web:a8dd64d091f6a145"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
