import { useParams } from "react-router-dom"

const CharDetailContainer = () => {

  const {charId} = useParams()

  return (
    <>
      <div>Personaliza tu personaje</div>
      <div>Id de personaje: {charId}</div>
    </>
  )
}
export default CharDetailContainer