import { boot } from "quasar/wrappers";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiuG00-RkHeALlVSg-qC4-135b5_34ChM",
  authDomain: "magura-ba088.firebaseapp.com",
  projectId: "magura-ba088",
  storageBucket: "magura-ba088.firebasestorage.app",
  messagingSenderId: "857104021444",
  appId: "1:857104021444:web:25de7a9e87fe389c7bd691",
};

// Initialize Firebase

export default boot(({ app }) => {
  app.use(initializeApp(firebaseConfig));
});
