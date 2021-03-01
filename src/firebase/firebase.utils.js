import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMtx3iTFsMXMJyGWZLal9NMl5mpWOo8HM",
    authDomain: "crwn-db-912ec.firebaseapp.com",
    projectId: "crwn-db-912ec",
    storageBucket: "crwn-db-912ec.appspot.com",
    messagingSenderId: "203861562754",
    appId: "1:203861562754:web:41128c0b6fd136d27aeb9b",
    measurementId: "G-ZS30MH9QY6"
  };


  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
   
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;