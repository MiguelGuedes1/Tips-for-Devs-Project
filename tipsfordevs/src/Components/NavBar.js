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
        <li>
          <NavLink to="./">Home</NavLink> {/* Acesso Global */}
        </li>

        {!user && (
          // Acesso para utilizadores NÃO autenticados
          <>
            <li>
              <NavLink to="./Login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="./Register">Registar</NavLink>
            </li>
          </>
        )}

        {user && (
          // Acesso para utilizadores AUTENTICADOS
          <>
            <li>
              <NavLink to="./CreatePost">Novo Post</NavLink>
            </li>
            <li>
              <NavLink to="./Dashboard">Gerir Posts</NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to="./About">Sobre</NavLink>
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
