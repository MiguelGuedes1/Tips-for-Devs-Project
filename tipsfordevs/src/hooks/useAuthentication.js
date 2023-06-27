import {db} from "../firebase/config"

import {                                            
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import {useState,useEffect} from "react"



export const UserAuthentication=()=>{                     
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(null)     


    const [cancelled,setCancelled]=useState(false)

    const auth=getAuth()           

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }



    // Registo

    const createUser=async(data)=>{
        checkIfIsCancelled()  // Verifica se a operação foi cancelada. Se `cancelled` for verdadeiro, a função retorna e interrompe a execução.

        setLoading(true) // Define `loading` como true para indicar que a operação de criação do usuário está em andamento.

        setError(null) // // Limpa o estado de erro, definindo-o como null, antes de executar a operação de criação do usuário.


        try {
            const{user}= await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )     // Cria um novo usuário com o email e a senha fornecidos em `data`. O objeto `user` é extraído da resposta.


            updateProfile(user,{
                displayName:data.displayName
            })   // Atualiza o perfil do usuário recém-criado, definindo o `displayName` com o valor fornecido em `data`.


            return user
       
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("Password")){
                systemErrorMessage="A sua password necessita de ter no minimo 6 caracteres"
            }

            else if(error.message.includes("email-already")){
                systemErrorMessage="Este email já esta ser utilizado por favor escolha outro"
            }
            else{
                systemErrorMessage="Ocorreu um erro, por favor tente mais tarde"
            }

            setError(systemErrorMessage)    // Define a mensagem de erro personalizada com base na mensagem de erro recebida.
        }

        setLoading(false)    // Define `loading` como false, indicando que a operação de criação do usuário foi concluída.
    }


    //LogOut

    const logout= () => {
        checkIfIsCancelled()
        signOut(auth)

    }

        // Login

        const login = async (data) => {

            checkIfIsCancelled()
            setLoading(true)
            setError(false)

        try {
            
            await signInWithEmailAndPassword(auth,data.email,data.password)
            setLoading(false)

        } catch (error) {
            
         let systemErrorMessage

        if(error.message.includes("user-not-found")){
            systemErrorMessage="Utilizador nao registado"
        }

        else if(error.message.includes("wrong-password")){
            systemErrorMessage="Password nao corresponde ao utilizador registado"
        }
        else{
             systemErrorMessage="Ocorreu um erro, por favor tente mais tarde"
        }

        setError(systemErrorMessage)
        setLoading(false)

    }
}





    
    
    useEffect(() => {
        return() => setCancelled(true)
    },[])

        
    
    
    
    
    
    return{         // Este return é o que a função UserAuthentication vai retornar
            auth,
            createUser,
            error,
            loading,
            logout,
            login
  
        }

}






