import styles from "./Dashboard.module.css"
import {Link} from "react-router-dom"

//hooks
import {useAuthValue} from "../../context/AuthContext"
import {useFetchDocuments} from "../../hooks/useFetchDocuments"



const Dashboard = () => {

  const {user}=useAuthValue()
  const uid=user.uid

// posts do utilizador

const {documents:posts,loading}=useFetchDocuments("posts",null,uid)

const deleteDocument=(id)=>{

}


return (
<div className={styles.dashboard}>
       
       <h2>DashBoard</h2>
       <p>Gerencie os seus posts</p>
       {posts && posts.length===0 ? (
        <div className={styles.noposts}>
            <p>Voce ainda nao fez nenhum post</p>
            <Link to = "/CreatePost" className="btn"> Crie o seu primeiro Post </Link>
        </div>
       ) : (
        <div className={styles.post_header}>
          <span>Titulo</span>
          <span>Acçoes</span>
        </div>
       )}

       <div>
          {posts&&posts.map((post)=>
          <div key={post.id} className={styles.post_row}>
           <p>{post.title}</p>
              <div className={styles.botoes}>
                  <Link to={`/posts/{post.id}`} className="btn">
                        Ver
                  </Link>

                  <Link to={`/posts/edit/{post.id}`} className="btn">
                        Editar
                  </Link>

                  <button onClick={()=>deleteDocument(post.id)} className="btn">
                        Apagar
                  </button>
              </div>
          </div>
          )}
       </div>
</div>
  )
}

export default Dashboard