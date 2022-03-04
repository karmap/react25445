// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CharList from './CharList';
import CharDetailContainer from './CharDetailContainer';
import Home from './Home';
import NavBar from './NavBar';

const VidegameApp = () => {
  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='lista' element={<CharList/>}></Route>
          <Route path='personaje'>
            <Route path=':charId' element={<CharDetailContainer/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
}
export default VidegameApp