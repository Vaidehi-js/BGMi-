import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Weapons from './components/Weapons';
import Shotgun from './components/Shotgun';
import Ar from './components/Ar';
import Autosniper from './components/Autosniper';
import Pistol from './components/Pistol';
import Sniper from './components/Sniper';
import Register from './components/Register';

function App() {

  return (
    <div>
    <BrowserRouter>
    {/* <Link to= "/Home">Home</Link> */}
    {/* <Link to = "/Login">Login</Link> */}
    <Navbar />
      <Routes>
      <Route element= { <Home />} path= "/" />
      <Route element= { <Home />} path= "/home" />
      <Route element={ <Weapons />} path= "Weapons" />
      <Route element={<Ar/>} path= "Ar"/>
      <Route element={ <Shotgun/> } path= "Shotgun" />
      <Route element={<Autosniper/>} path= "Autosniper" />
      <Route element={<Pistol/>} path= "Pistol" />
      <Route element={<Sniper/>} path= "Sniper" />
      <Route element={<Register/>} path= "Register" />
      <Route element={<Login/>} path= "Login" />
      
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
