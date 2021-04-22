const firebase = require("firebase");

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCErQLbog5K7VCmi1Q3JORh_eeZgPcIi1w",
  authDomain: "color-bank-c5a50.firebaseapp.com",
  projectId: "color-bank-c5a50",
  storageBucket: "color-bank-c5a50.appspot.com",
  messagingSenderId: "291760149222",
  appId: "1:291760149222:web:70f2ef5f441f98dd24e127",
  measurementId: "G-VZ0G02M3XR",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.intializeApp(FIREBASE_CONFIG);
  }
}
