
import './App.css';


import {BrowserRouter,Routes,Route,Navigate,Link} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';

// React Hooks

import { useState,useEffect } from 'react';
import { UserAuthentication } from './hooks/useAuthentication';

//Contexto

import { AuthProvider } from './context/AuthContext';

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

const [user,setUser]=useState(undefined)
const {auth}=UserAuthentication()

useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    setUser(user)
  })
})


  return (
    <div className="App">
      <AuthProvider value={{user}}>
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
      </AuthProvider>

    </div>

  );
}

export default App;
