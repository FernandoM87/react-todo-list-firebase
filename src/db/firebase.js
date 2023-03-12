import { initializeApp } from 'firebase/app';

import {
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZEn9nSZDMUjbMKajd4TQaoBk3e4uv79g",
  authDomain: "todo-list-react-5aad7.firebaseapp.com",
  projectId: "todo-list-react-5aad7",
  storageBucket: "todo-list-react-5aad7.appspot.com",
  messagingSenderId: "436963603471",
  appId: "1:436963603471:web:7673655abbc0c1955e5f7a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db