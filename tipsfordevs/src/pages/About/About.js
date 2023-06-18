//CSS
import styles from "./About.module.css"



import { FaGithub, FaLinkedin, FaDesktop,FaLink } from 'react-icons/fa';
import { useNavigate, Link } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  const criar_post=()=>{
    navigate('/CreatePost' );
  }
    return (
      
      <div className={styles.about}>
        <div className={styles.backgroundImage}></div>;
          <h2>About CTRL + CODE</h2>
            <p>
              This is a project created with the intention of receiving knowledge from more experienced devs made with React on the Front-End and Firebase on the Back-End, having as main goal to improve my skills on back/front or as fullstack.
            </p>
      
            <p className={styles.about_icons}>
              <Link to = "https://github.com/MiguelGuedes1/Tips-for-Devs-Project" target="_blank" rel="noopener noreferrer"> 
                <FaLink/>
              </Link>

              <button onClick={criar_post} className={styles.botao_share_knowledge}>Create Post</button>
            </p>
        </div>
    )
  }
  
  export default About