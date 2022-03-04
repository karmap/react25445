import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {

  const {category} = useParams()  
  
  return (
      <>
        <div>Catálogo de Productos</div>
        <ItemList category={category}></ItemList>
      </>
  )
}
export default ItemListContainer