import {db} from "../firebase/config"

import {                                              //  Essa seção importa diferentes funções do módulo firebase/auth que serão utilizadas posteriormente no código.
    getAuth,
    createUserWithEmailAndPassword,
    signWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import {useState,useEffect} from "react"













 // Aqui é definida uma função chamada userAuthentication que será exportada para ser utilizada em outros lugares do código.

export const UserAuthentication=()=>{                     
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(null)     // O valor inicial de ambas é null. O hook useState é utilizado para criar essas variáveis de estado e suas respectivas funções para atualização.

    // limpeza de restos de funçoes entre componentes

    const [cancelled,setCancelled]=useState(false)

    const auth=getAuth()            // A função getAuth() é chamada para obter uma instância do objeto auth que será usada para realizar operações de autenticação com o Firebase.

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

    useEffect(()=>{
        return()=>setCancelled(true)
    },[])

        return{
            auth,
            createUser,
            error,
            loading,
            logout
        }

}




