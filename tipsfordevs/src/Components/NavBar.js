import { NavLink, useNavigate } from "react-router-dom";
import { UserAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";
import styles from "./NavBar.module.css";
import { FaGithub, FaLinkedin, FaDesktop } from 'react-icons/fa';

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = UserAuthentication();
  const navigate = useNavigate();

  const clicarLogo = () => {
    navigate('/');
  }


  return (
    <nav className={styles.navbar}>
      <span onClick={clicarLogo} className={styles.logo}>
      <span className={styles.ctrl_logo}>CTRL</span> + Code <FaDesktop />
      </span>

     

      <ul className={styles.links_list}>
  

        {!user && (
          // Acesso para utilizadores NÃO autenticados
          <>
            <li>
              <NavLink to="./Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="./Register">Register</NavLink>
            </li>
          </>
        )}

        {user && (
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
    </nav>
  );
}

export default NavBar;
