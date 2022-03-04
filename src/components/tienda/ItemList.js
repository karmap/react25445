import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import productos from './products-data'

const ItemList = ( {category} ) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [category])
  
  const getProducts = () => { 
    const prodPromise = new Promise( (res, rej) => {
        res(productos)
    })
    prodPromise.then( data => {
        if (category) {
            setProducts( data.filter( p => p.categoria == category ) )
        } else {
            setProducts( data )
        }
    })
  }

  return (
    <>
      {products.map( p => <ItemCard key={p.id} item={p} />)}
    </>
  )
}
export default ItemList