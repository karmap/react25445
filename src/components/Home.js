import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Home = () => {

    const mensajeBienvenida = 'Bienvenidos a React!!!'

    const stylesLi = {
        color: 'red'
    }

    const alertMsg = () => { alert('Hola') }

    return (
        <>
        <NavBar></NavBar>
        <div className="App">
        <h1 className='text-3xl font-bold underline'>{mensajeBienvenida}</h1>
        <ul>
            <li style={stylesLi}>React</li>
            <li>JSX</li>
            <li>Webpack</li>
        </ul>
        <Footer name='Maria' action={alertMsg}>
            <h3>Mi children</h3>
            <h4>otro children</h4>
        </Footer>
        </div>
        </>
    )
}

export default Home