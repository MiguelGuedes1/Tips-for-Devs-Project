//CSS
import styles from "./About.module.css"


import {Link} from "react-router-dom"

const About = () => {
    return (
      <div className={styles.about}>
      <h2>Sobre o Tips for Devs</h2>
      <p>
        Este é um projecto criado com a intençao de receber conhecimento de Devs mais experientes feito com React na parte de Front-End e Firebase no Back-End
      </p>
      <p>
        <Link to = "/CreatePost" className="btn"> 
          Criar Post
        </Link>
      </p>
      </div>
    )
  }
  
  export default About