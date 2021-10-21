import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDMxf7EnWSkrQu65E9Kq5K1jdJa06zSlOQ",
  authDomain: "complaint-forum-c9e44.firebaseapp.com",
  projectId: "complaint-forum-c9e44",
  storageBucket: "complaint-forum-c9e44.appspot.com",
  messagingSenderId: "428746401182",
  appId: "1:428746401182:web:8643950e5aa1132bafa28f"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

