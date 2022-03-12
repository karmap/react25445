import { getFirestore, collection, getDocs } from "firebase/firestore"
import "./firebase/firebaseClient";
import { useEffect, useState } from "react"

const PhoneListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect( () => {

    const asynCall = async () => {
      const db = getFirestore()

      const querySnapshot = await getDocs(collection(db, "products"));

      let listaDeProductos = []

      querySnapshot.forEach( doc => {
        // console.log(`${doc.id} => ${ JSON.stringify(doc.data())}`);
        console.log(doc.data());
        listaDeProductos.push(doc.data())
      });

      setProductos(listaDeProductos)
    }
    asynCall()

  }, [])
  

  return (
    <>
      <div>PhoneListContainer</div>
      {productos.map( p => <PhoneCard key={p.name} phone={p} /> )}
    </>
  )
}

const PhoneCard = ({phone}) => {
  return (
    <>
      <div>{phone.name}</div>
      <div>Price: {phone.price}</div>
      <div>Stock: {phone.stock}</div>
    </>
  )
}

export default PhoneListContainer