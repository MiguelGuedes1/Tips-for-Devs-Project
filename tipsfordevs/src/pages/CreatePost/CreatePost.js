import styles from "./CreatePost.module.css"


import{useState} from "react"
import {useNavigate} from "react-router-dom"
import {useAuthValue} from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocument"







const CreatePost = () => {



  const[title,setTitle]=useState("")
  const [image,setImage]=useState("")
  const [body,setBody]=useState("")
  const[formError,setFormError]=useState("")

  const {user} = useAuthValue()    // importar o utlizador

  const {insertDocument,response} = useInsertDocument("posts")  // importar o metodo de inserçao de documento

  const navigate=useNavigate()    // importar a opçao de navegaçao de paginas pelo hook useNavigate do react-router-dom

  const handleSubmit=(e)=>{
    e.preventDefault()
    setFormError("")

    // Validar o URL da imagem

    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem necessita de ser uma URL");
      return;
    }

    // checkar todos os valores

  if(!title||!body){
    setFormError("O campo Titulo e conteudo do post sao obrigatórios");
    return;
  }

    
    
    
    if(formError) return

    insertDocument({
      title,
      image,
      body,
      uid:user.uid,
      createdBy:user.displayName

    })

    // Direcionar para a HomePage 

    navigate("/")




  }



  return (
    <div className={styles.criar_post}>
      <div className={styles.backgroundImage}></div>;
       <h2>Create Post</h2>

       <div className={styles.animaçao_container}>
        <p className={styles.animaçao_quote}>
          {` while(alive) { eat() sleep() code() }`}
        </p>
      </div>


       <form onSubmit={handleSubmit}>

          <label>
            <span>Title</span>
            <input type="text" name="title" required placeholder="Insert the publication title" onChange={(e)=> setTitle(e.target.value)} value={title} />
          </label>

          <label>
            <span>Image url</span>
            <input type="text" name="image" placeholder="Insert image " onChange={(e)=> setImage(e.target.value)} value={image} />
          </label>

          <label>
            <span>Post content</span>
            <textarea name="body" required placeholder="Enter your post content" onChange={(e) => setBody(e.target.value)} value={body} ></textarea>
          </label>

         {!response.loading && <button className="btn"> Share Post </button>}

         {response.error && <p className="error">{response.error}</p>}
         
         {formError && <p className="error">{formError}</p>}


       </form>

   </div>
  )
}




export default CreatePost






