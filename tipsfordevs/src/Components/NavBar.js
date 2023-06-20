import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";
import styles from "./NavBar.module.css";
import { FaGithub, FaLinkedin, FaDesktop, FaAlignJustify } from 'react-icons/fa';

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = UserAuthentication();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const clicarLogo = () => {
    navigate('/');
  }

  const abrirFecharMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={styles.navbar}>
      <span onClick={clicarLogo} className={styles.logo}>
        <span className={styles.ctrl_logo}>CTRL</span> + Code <FaDesktop />
      </span>

      <ul className={styles.links_list}>
        {!user ? (
          // Acesso para utilizadores NÃO autenticados
          <>
            <li>
              <NavLink to="./Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="./Register">Register</NavLink>
            </li>
          </>
        ) : (
          // Acesso para utilizadores AUTENTICADOS
          <>
            <li>
              <NavLink to="./">Home</NavLink> {/* Acesso Global */}
            </li>
            <li>
              <NavLink to="./CreatePost">Create Post</NavLink>
            </li>
            <li>
              <NavLink to="./Dashboard">Your posts</NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to="./About">About the Project</NavLink>
        </li>

        {user && (
          <li>
            <button onClick={logout} className="a">LogOut</button>
          </li>
        )}
      </ul>

      
      
      
      
      
      {/* Nav bar para telemovel e tablet */}
      <div className={styles.navbar_telemovel_tablet}>
  <span onClick={abrirFecharMenu}><FaAlignJustify /></span>

  {menuOpen && (
    <div>
      {!user ? (
        <>
          <p><NavLink to="./Login">Login</NavLink></p>
          <p><NavLink to="./Register">Register</NavLink></p>
          <p><NavLink to="./About">About the Project</NavLink></p>
        </>
      ) : (
        <>
          <p><NavLink to="./">Home</NavLink></p>
          <p><NavLink to="./CreatePost">Create Post</NavLink></p>
          <p><NavLink to="./Dashboard">Your posts</NavLink></p>
          <p><NavLink to="./About">About the Project</NavLink></p>
          <p onClick={logout}>LogOut</p>
        </>
      )}
    </div>
  )}
</div>

    </nav>
  );
}

export default NavBar;
