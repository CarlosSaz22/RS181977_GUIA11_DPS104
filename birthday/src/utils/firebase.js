//import * as firebase from 'firebase';
import firebase from 'firebase';
import 'firebase/auth';

import 'firebase/storage';
if (firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: 'AIzaSyCk-DDeMlFWSVl6z5_FixPJ1RrVTLippPo',
    authDomain: 'birthday-9fe54.firebaseapp.com',
    projectId: 'birthday-9fe54',
    storageBucket: 'birthday-9fe54.appspot.com',
    messagingSenderId: '16865786471',
    appId: '1:16865786471:web:f78cf9164f4ebb830a72c2',
  };
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);
  let firestore = firebase.firestore();
}
export default firebase;
