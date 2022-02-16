import React from 'react'
import logo from '../../img/logo192.png'

const NewNavBar = () => {
  return (
    <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <img width='40px' src={logo}></img>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href='#'>Inicio</a>
            <a className="mr-5 hover:text-gray-900" href='#'>Catálogo</a>
            <a className="mr-5 hover:text-gray-900" href='#'>Categorías</a>
            <a className="mr-5 hover:text-gray-900" href='#'>Mi cuenta</a>
        </nav>
    </div>
  )
}

export default NewNavBar