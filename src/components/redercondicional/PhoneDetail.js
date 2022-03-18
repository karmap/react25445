import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./firebase/firebaseClient";

const PhoneDetail = () => {
  const [phone, setPhone] = useState({})
  const {id} = useParams()

  useEffect(() => {
    getProductById(id).then( data => {
        setPhone(data)
    })
  }, [])

  return (
    <>
        <div>PhoneDetail</div>
        <PhoneCard phone={phone}></PhoneCard>
    </>
  )
}

export const PhoneCard = ({phone}) => {
  return (
    <div className="border-2 border-red-600 m-2 p-5">
        <h1>{phone.name}</h1>
        <h1>{phone.price}</h1>
        <h1>{phone.stock}</h1>
    </div>
  )
}

export default PhoneDetail