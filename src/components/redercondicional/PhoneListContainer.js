import { getProducts } from "./firebase/firebaseClient";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const PhoneListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect( () => {
    
    getProducts().then( data => {
      console.log(data);
      setProductos( data )
    })

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
      <div>
        <Link to={`/detalle/${phone.id}`}>{phone.name}</Link>
      </div>
      <div>Price: {phone.price}</div>
      <div>Stock: {phone.stock}</div>
    </>
  )
}

export default PhoneListContainer