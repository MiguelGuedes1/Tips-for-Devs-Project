import styles from "./Footer.module.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  
    return <footer className={styles.footer}>
            <h3>Write your best tips!</h3>
            <p>Ctrl+Code &copy; 2023 </p>

            <div className={styles.icons}>
                <a href="https://github.com/MiguelGuedes1"  target="_blank" rel="noopener noreferrer ">
                    <FaGithub className={styles.icon} />
                </a>
                
                <a href="https://www.linkedin.com/in/miguel-guedes1/" target="_blank" rel="noopener noreferrer">
                     <FaLinkedin className={styles.icon} />
                </a>
            </div>
    </footer>
  
}

export default Footer