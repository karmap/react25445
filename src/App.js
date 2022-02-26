// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import CharList from './components/videogame/CharList';
import CharDetailContainer from './components/videogame/CharDetailContainer';
import Home from './components/videogame/Home';
import NavBar from './components/videogame/NavBar';

function App() {

  return (
    <>
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
    </>
  );
}

export default App;
