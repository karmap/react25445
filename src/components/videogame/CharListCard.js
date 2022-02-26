import { Link } from "react-router-dom"

const CharListCard = ({char: c}) => {
  return (
    <div className='border-2 border-indigo-600 m-2'>
        <div>{c.name}</div>
        <div>{c.life}</div>
        <div>{c.power}</div>
        <Link to={`/personaje/${c.id}`}>Ir al detalle</Link>
    </div> 
  )
}
export default CharListCard