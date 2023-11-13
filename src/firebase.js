import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDG7-KhQD9hxFuoWqb77vU0TsGlpzJZv0M",
    authDomain: "castaway-6fe2a.firebaseapp.com",
    projectId: "castaway-6fe2a",
    storageBucket: "castaway-6fe2a.appspot.com",
    messagingSenderId: "545504383686",
    appId: "1:545504383686:web:c8df2db5c9c0e76f5b3dc7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }