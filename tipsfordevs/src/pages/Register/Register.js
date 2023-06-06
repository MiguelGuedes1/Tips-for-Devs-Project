import styles from "./Register.module.css"

import {useState,useEffect} from "react"

const Register = () => {
  return (
    
    <div>
       <h1>Cadastre-se para postar</h1>
       <p>Crie o seu utilizador e divulgue os seus conhecimentos</p>
      
       <form>
          <label>
            <span>Nome:</span>
            <input type="text" name="displayName" required placeholder="Nome do Utilizador" />
          </label>

          <label>
            <span>Email:</span>
            <input type="email" name="email" required placeholder="Email do Utilizador" />
          </label>

          <label>
            <span>Password:</span>
            <input type="password" name="password" required placeholder="Defina a sua password" />
          </label>

          <label>
            <span>Confirmação de password:</span>
            <input type="password" name="confirmPassword" required placeholder="Confirme a sua password" />
          </label>

          <button className="btn">Cadastrar</button>

       </form>
    </div>
  )
}

export default Register