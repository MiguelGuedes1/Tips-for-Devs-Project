import{useContext,createContext} from "react"

const AuthContext=createContext()    // Criaçao de  um objeto de contexto chamado AuthContext
  

// Componente provedor de contexto para fornecer o valor do contexto aos componentes filhos
export function AuthProvider({children,value}){
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider> // Usando AuthContext.Provider para envolver os componentes filhos com o contexto
}

export function useAuthValue(){    // Hook personalizado para acessar o valor do contexto de autenticação
    return useContext(AuthContext)
}
