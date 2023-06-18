import { UserAuthentication } from "../../hooks/useAuthentication"
import styles from "./Register.module.css"

import {useState,useEffect} from "react"

const Register = () => {

const[displayName,setDisplayname]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[confirmPassword,setConfirmPassword]=useState("")
const[error,setError]=useState("")

const{createUser, error:authError, loading}=UserAuthentication()   // importaçao do hook useAuthentication

const handleSubmit = async (e) => {        {/* usada para evitar o comportamento padrão do evento, que geralmente é recarregar a página quando um formulário é enviado. */}
  e.preventDefault()

  { /* zerar os erros quando o formulario é enviado */ }
  setError("")    

  const user={
    displayName,
    email,
    password
  }


  
  { /* erro caso as passwords inseridas pelo utilizador sejam diferentes */ }
  if (password!==confirmPassword){
    setError("As passwords necessitam de ser iguais")
    return
  }

    const res=await createUser(user)
    console.log(res)
}  

useEffect(()=>{

if(authError){
  setError(authError)
}

},[authError])


return (
    
    <div className={styles.register}>
         <div className={styles.backgroundImage}></div>;
       <h1>Register</h1>
  
    <div className={styles.animaçao_container}>
        <p className={styles.animaçao_quote}>
          {`if(brain!=empty){
            keepCoding()
          } else{
            orderCoffe()
          }`}
        </p>
    </div>

      
       <form onSubmit={handleSubmit}>
          <label>
            <span>Name:</span>
            <input type="text" name="displayName" required placeholder="Enter your name" value={displayName} onChange={(e)=>setDisplayname(e.target.value)}  />
          </label>

          <label>
            <span>Email:</span>
            <input type="email" name="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </label>

          <label>
            <span>Password:</span>
            <input type="password" name="password" required placeholder="Define your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </label>

          <label>
            <span>Password Confirmation:</span>
            <input type="password" name="confirmPassword" required placeholder="Confirm your password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
          </label>

          <button className="btn">Confirm user</button>
          {error && <p className="error">{error}</p>}


       </form>
    </div>
  )
}

export default Register



