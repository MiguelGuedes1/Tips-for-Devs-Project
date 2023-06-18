
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
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import PostDetail from './Components/PostDetail';
import PostDetailPage from './Components/PostDetailPage';

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
            <Route
                path='/'
                 element={user ? <Home/> : <Navigate to="/Register" />}
            ></Route>

          <Route path='/About' element={<About/>} ></Route>
          <Route path='/Login' element={!user ? <Login/> : <Navigate to = "/" /> } ></Route>
          <Route path='/Register' element={!user ? <Register/> : <Navigate to = "/" />} ></Route>
          <Route path='/CreatePost' element={user ? <CreatePost/> : <Navigate to = "/Login" />} ></Route>
          <Route path='Dashboard' element={user ? <Dashboard/> : <Navigate to = "/"/>} ></Route>
          <Route path='/posts/:postId' element={<PostDetailPage />} />


        </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
      </AuthProvider>

    </div>

  );
}

export default App;
