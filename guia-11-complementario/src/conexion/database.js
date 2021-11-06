//import * as firebase from 'firebase';
import firebase from 'firebase';
import 'firebase/auth';

import 'firebase/storage';
if (firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAMaHQYWZ1lE1zwHl5gohrmv0ptgaa4KUI',
    authDomain: 'colectores-ad859.firebaseapp.com',
    projectId: 'colectores-ad859',
    storageBucket: 'colectores-ad859.appspot.com',
    messagingSenderId: '668292050044',
    appId: '1:668292050044:web:bd1d784453504fe958adf9',
  };
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);
  let firestore = firebase.firestore();
}
export default firebase;
