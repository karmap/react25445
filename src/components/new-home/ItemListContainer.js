import React from 'react'
import Item from './Item'

const ItemListContainer = () => {

  const productos = [
      {nombre: 'iPhone', precio: 1000},
      {nombre: 'Samsung', precio: 800},
      {nombre: 'Xiaomi', precio: 500}
  ]

  return (
    <div>
        <Item producto={productos[0]} cupon={10}>
            <strong>el children de este componente</strong>
        </Item>
        <Item producto={productos[1]}></Item>
        <Item producto={productos[2]}></Item>
    </div>

  )
}

export default ItemListContainer