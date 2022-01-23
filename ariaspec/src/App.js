import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
const App = () =>{
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </>
  );
}
export default App;
