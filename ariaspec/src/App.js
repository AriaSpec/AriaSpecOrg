import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import { About } from './Pages/About';
const App = () =>{
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
