// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, getDoc, doc, addDoc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

console.log('env', process.env.REACT_APP_FIREBASE_API_KEY);
console.log(process.env.authDomain);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const productsCollection = collection(db, "products")
const ordersCollection = collection(db, "orders")

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

export const addOrder = async (order) => {
  const docSnap = await addDoc(ordersCollection, order)
  return docSnap.id
}