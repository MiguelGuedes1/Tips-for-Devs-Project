import { NavLink } from "react-router-dom"

import { UserAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

import styles from "./NavBar.module.css"

const NavBar=()=>{
     
    
    return <nav className={styles.navbar} >
        <NavLink to= "./" className={styles.marca}>
        Tips for <span>Devs</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="./">Home</NavLink>
            </li>
                {!user &&(
                    <>
             <li>
                <NavLink to="./Login">Entrar</NavLink>
            </li>
            <li>
                <NavLink to="./Register">Cadastrar</NavLink>
            </li>
                    </>
                )}
            <li>
                <NavLink to="./About">Sobre</NavLink>
            </li>
        </ul>
    </nav>
}

export default NavBar

