// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "./toastNotify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJiWZMWt64kWzBXpP8_uteO0Lo7IQtGuw",
  authDomain: "blog-app-7b9a8.firebaseapp.com",
  projectId: "blog-app-7b9a8",
  storageBucket: "blog-app-7b9a8.appspot.com",
  messagingSenderId: "155497526889",
  appId: "1:155497526889:web:dc429d379b25862a3cd4f8",
  datebaseURL: "https://blog-app-7b9a8-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredintal = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    toastSuccessNotify("Registered successfully!");
    console.log(userCredintal);
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = (navigate) => {
  signOut(auth);
  navigate("/");
  toastSuccessNotify("Logged out successfully!");
};

export const signUpWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default app;
