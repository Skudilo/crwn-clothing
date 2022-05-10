import {initializeApp} from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider
} from 'firebase/auth'
import {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBlXRqBUf7LWU4axGts5QVf_3STXYVjXn8",
	authDomain: "crwn-clothing-6fccf.firebaseapp.com",
	projectId: "crwn-clothing-6fccf",
	storageBucket: "crwn-clothing-6fccf.appspot.com",
	messagingSenderId: "384773027274",
	appId: "1:384773027274:web:101ef96ec97f7aa7148b33"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
	prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid)

	console.log(userDocRef)

	const userSnapshot = await getDoc(userDocRef)
	console.log(userSnapshot)
	console.log(userSnapshot.exists())

	if(!userSnapshot.exists()) {
		const {displayName, email} = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}

	return userDocRef
}