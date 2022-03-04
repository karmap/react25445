import { Route, BrowserRouter, Routes, Link } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"

const TiendaApp = () => {
  return (
      <>
        <BrowserRouter>
          <Link to='/'>Tienda App</Link>
          <Routes>
            <Route index element={<ItemListContainer/>}></Route>
            <Route path='categoria'>
              <Route path=':category' element={<ItemListContainer/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  )
}
export default TiendaApp