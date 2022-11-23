import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCZz4l8JRy7w4KNWETwc10AS47AFapmwZ4",
    authDomain: "market-thrifty.firebaseapp.com",
    projectId: "market-thrifty",
    storageBucket: "market-thrifty.appspot.com",
    messagingSenderId: "382270496802",
    appId: "1:382270496802:web:72e96a4ea5b313ceb12a7b"
};


const app = initializeApp(firebaseConfig);

export default app;