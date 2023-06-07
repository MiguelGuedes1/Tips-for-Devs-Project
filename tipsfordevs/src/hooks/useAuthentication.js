import {db} from "../firebase/config"

import {                                              //  Essa seção importa diferentes funções do módulo firebase/auth que serão utilizadas posteriormente no código.
    getAuth,
    createUserWithEmailAndPassword,
    signWithEmailAndPassword,
    updateProfile,
    signout
} from "firebase/auth"

import {useState,useEffect} from "react"

export const UserAuthentication=()=>{                      // Aqui é definida uma função chamada userAuthentication que será exportada para ser utilizada em outros lugares do código.
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


    const createUser=async(data)=>{
        checkIfIsCancelled()

        setLoading(true)

        setError(null)

        try {
            const{user}= await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            updateProfile(user,{
                displayName:data.displayName
            })

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

            setError(systemErrorMessage)
        }

        setLoading(false)
    }

    useEffect(()=>{
        return()=>setCancelled(true)
    },[])

        return{
            auth,
            createUser,
            error,
            loading
        }

}




