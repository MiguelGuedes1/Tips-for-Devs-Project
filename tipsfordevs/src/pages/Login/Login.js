import styles from "./Login.module.css"

import { UserAuthentication } from "../../hooks/useAuthentication"
import {useState,useEffect} from "react"

const Login=()=>{


const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[error,setError]=useState("")

const{login,error:authError, loading}=UserAuthentication()   // importaçao do hook useAuthentication

const handleSubmit = async (e) => {        {/* usada para evitar o comportamento padrão do evento, que geralmente é recarregar a página quando um formulário é enviado. */}
  e.preventDefault()

  { /* zerar os erros quando o formulario é enviado */ }
  setError("")    

  const user={
    email,
    password
  }

  const res=await login(user)
    console.log(res)
}  

useEffect(()=>{

if(authError){
  setError(authError)
}

},[authError])




    return(    
    
    <div className={styles.login}>
            <div className={styles.backgroundImage}></div>;
         <h1>Entrar</h1>
         
      <div className={styles.animaçao_container}>
            <p className={styles.animaçao_quote}>
              Faça o Login e espalhe o seu conhecimento!
          </p>
      </div>
  
      
       <form onSubmit={handleSubmit}>
     

          <label>
            <span>Email:</span>
            <input type="email" name="email" required placeholder="Insira o seu utilizador" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </label>

          <label>
            <span>Password:</span>
            <input type="password" name="password" required placeholder="Insira a sua password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </label>


          <button className="btn">Entrar</button>
          {error && <p className="error">{error}</p>}


       </form>
    </div>
    )

}

export default Login










