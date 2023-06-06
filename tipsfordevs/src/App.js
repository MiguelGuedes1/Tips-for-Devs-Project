
import './App.css';

import {BrowserRouter,Routes,Route,Navigate,Link} from "react-router-dom"

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/About' element={<About/>} ></Route>
          <Route path='/Login' element={<Login/>} ></Route>
          <Route path='/Register' element={<Register/>} ></Route>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>

    </div>

  );
}

export default App;
