import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCo3jIwmJ_1gkIPWY5hHpHce1AHFIuSA5A',
  authDomain: 'ecommerce-antdesign.firebaseapp.com',
  databaseURL: 'https://ecommerce-antdesign.firebaseio.com',
  projectId: 'ecommerce-antdesign',
  storageBucket: 'ecommerce-antdesign.appspot.com',
  messagingSenderId: '378166270791',
  appId: '1:378166270791:web:c2ea6fbae568cc76494a62',
  measurementId: 'G-D2GVMRBCCG'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
