import firebase from "firebase";

// let config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//   };

var firebaseConfig = {
  apiKey: "AIzaSyCslFFpqqssRSECo-1SGWMhsbnL7Ehuy8E",
  authDomain: "sehatq-e7655.firebaseapp.com",
  projectId: "sehatq-e7655",
  storageBucket: "sehatq-e7655.appspot.com",
  messagingSenderId: "911213707650",
  appId: "1:911213707650:web:8004188bedca30e7768f9b",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
