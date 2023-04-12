// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOtEMDKPCCaRP29Tu_Km5kRnNgtY7Dmnw",
  authDomain: "hi-fagner-lima.firebaseapp.com",
  databaseURL: "https://hi-fagner-lima-default-rtdb.firebaseio.com",
  projectId: "hi-fagner-lima",
  storageBucket: "hi-fagner-lima.appspot.com",
  messagingSenderId: "95900420741",
  appId: "1:95900420741:web:82a282e2ea1ed7d307f7ec",
  measurementId: "G-4VJE8T1BDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Static Files
app.use(express.static('public'));
// Specific folder example