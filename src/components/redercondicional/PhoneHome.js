import { Route, BrowserRouter, Routes, Link } from "react-router-dom"
import PhoneDetail from "./PhoneDetail"
import PhoneListContainer from "./PhoneListContainer"

const PhoneHome = () => {
  return (
    <BrowserRouter>
    <Link to='/'>Tienda de Teléfonos</Link>
    <Routes>
      <Route index element={<PhoneListContainer/>}></Route>
      <Route path='detalle'>
        <Route path=':id' element={<PhoneDetail/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
export default PhoneHome