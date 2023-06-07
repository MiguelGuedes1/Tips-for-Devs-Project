import { NavLink } from "react-router-dom"

import { UserAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

import styles from "./NavBar.module.css"

const NavBar=()=>{
     const {user}=useAuthValue()
     const{logout}=UserAuthentication()
    
    return <nav className={styles.navbar} >
        <NavLink to= "./" className={styles.marca}>
        Tips for <span>Devs</span>
        </NavLink>
        <ul className={styles.links_list}>
           
            <li>
                <NavLink to="./">Home</NavLink>      {/* Acesso Global */}
            </li>


                {!user &&(          // Acesso para utilizadores NÃO autenticados
                    <>
             <li>
                <NavLink to="./Login">Entrar</NavLink>
            </li>
            <li>
                <NavLink to="./Register">Registar</NavLink>
            </li>
                    </>
             )}




                {user&&(            // Acesso para utilizadores AUTENTICADOS
                    <>
                <li>
                <NavLink to="./CreatePost">Novo Post</NavLink>
            </li>
            <li>
                <NavLink to="./Dashboard">Dashboard</NavLink>
            </li>
                    </>
                )}
            <li>
                <NavLink to="./About">Sobre</NavLink>
            </li>
            {user&&(
                <li>
                    <button onClick={logout}>LogOut</button>
                </li>
            )}
        </ul>
    </nav>
}

export default NavBar

