// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, getDoc, doc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGX0wl3ScuXfo03kG4BRdfiwtl__kwBNg",
  authDomain: "react25445.firebaseapp.com",
  projectId: "react25445",
  storageBucket: "react25445.appspot.com",
  messagingSenderId: "293282598240",
  appId: "1:293282598240:web:ee9607d169a3a8c3c02205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const productsCollection = collection(db, "products")

export const getProducts = async () => {

  const querySnapshot = await getDocs(productsCollection);

  let products = []
  querySnapshot.forEach( doc => {
    // console.log(`${doc.id} => ${ JSON.stringify(doc.data())}`);
    // console.log(doc.data());
    products.push({
      id: doc.id,
      ...doc.data()
    })
  });

  return products
}

export const getProductsByProp = async (prop, value) => {
  const q = query(productsCollection, where(prop, "==", value));
  const querySnapshot = await getDocs(q);
  let products = []
  querySnapshot.forEach((doc) => {
    products.push(doc.data())
  });
  return products
}

export const getProductById = async (id) => {

  const docRef = doc(productsCollection, id);
  const docSnap = await getDoc(docRef);

  return docSnap.data()
}