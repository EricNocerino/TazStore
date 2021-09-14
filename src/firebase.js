// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBYrVmxgMEtiBo7mdUeCCwrZR5uRYM1p-c",
	authDomain: "taz-tattoo-store.firebaseapp.com",
	projectId: "taz-tattoo-store",
	storageBucket: "taz-tattoo-store.appspot.com",
	messagingSenderId: "302209968740",
	appId: "1:302209968740:web:7a91388140f5708f690d71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
