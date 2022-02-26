import { Link } from "react-router-dom"

const NavBar = () => {

  const twStyles = {
      link: 'mr-5 hover:text-red-600 underline underline-offset-1'
  }

  return (
    <div>
        <Link className={twStyles.link} to='/'>Inicio</Link>
        <Link className={twStyles.link} to='lista'>Lista de personajes</Link>
    </div>
  )
}
export default NavBar