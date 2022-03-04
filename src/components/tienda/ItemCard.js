import { Link } from "react-router-dom"

const ItemCard = ({item:p}) => {
  return (
    <div className='border-2 border-red-600 m-2'>
        <strong>{p.titulo}</strong>
        <div>Precio: {p.precio}</div>
        <div>Categoría: <Link to={`/categoria/${p.categoria}`}>{p.categoria}</Link></div>
    </div>
  )
}
export default ItemCard