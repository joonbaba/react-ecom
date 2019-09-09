import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyAXBwhfaeklx8DEgKcnOY-ghiLj4_2vd4s",
	authDomain: "crwn-db-cbf68.firebaseapp.com",
	databaseURL: "https://crwn-db-cbf68.firebaseio.com",
	projectId: "crwn-db-cbf68",
	storageBucket: "",
	messagingSenderId: "425143090886",
	appId: "1:425143090886:web:c8308b1d0e380984"
}

firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const {
			displayName,
			email
		} = userAuth
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase