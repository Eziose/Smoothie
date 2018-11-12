import  firebase from 'firebase'
import  firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqZc3IdVozuE0862K0iJ_4XzOll7AT4iw",
  authDomain: "smoothies-dec4f.firebaseapp.com",
  databaseURL: "https://smoothies-dec4f.firebaseio.com",
  projectId: "smoothies-dec4f",
  storageBucket: "smoothies-dec4f.appspot.com",
  messagingSenderId: "104404252551"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});

// export firestore database

export default firebaseApp.firestore();