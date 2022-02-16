import React from 'react'

const Item = ( props ) => {
  
  return (
    <div style={{border: 'solid red'}}>
        <h3>{props.producto.nombre}</h3>
        <h4>{props.producto.precio}</h4>
        {props.children}
    </div>
  )
}

export default Item