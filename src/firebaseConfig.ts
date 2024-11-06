import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDwNRlTjj3czM0dVt6JrO1eo5UPGXPEWL8",
    authDomain: "nolan-copy-project.firebaseapp.com",
    projectId: "nolan-copy-project",
    storageBucket: "nolan-copy-project.appspot.com",
    messagingSenderId: "713587286187",
    appId: "1:713587286187:web:e141f207cbe0b281cd97ee"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);