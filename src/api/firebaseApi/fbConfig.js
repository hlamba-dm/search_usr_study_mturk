import Config from "../../config"

import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import { createFirestoreInstance } from "redux-firestore";

// Firebase start
const fbConfig = Config["firebase"]

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore();

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

export const rrfProps = (store) => {
    return {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch,
        createFirestoreInstance,
    }
};

export default firebase;
