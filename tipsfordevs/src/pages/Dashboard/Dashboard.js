import styles from "./Dashboard.module.css"
import { Link, useNavigate } from "react-router-dom";

//hooks
import {useAuthValue} from "../../context/AuthContext"
import {useFetchDocuments} from "../../hooks/useFetchDocuments"
import { useDeleteDocument } from "../../hooks/useDeleteDocument"





const Dashboard = () => {

  const {user}=useAuthValue()
  const uid=user.uid

// posts do utilizador

const {documents:posts,loading}=useFetchDocuments("posts",null,uid)

const {deleteDocument} =useDeleteDocument("posts")

const navigate = useNavigate();

const handleDelete = (postId) => {
  const confirmDelete = window.confirm(
    "Tem certeza de que deseja apagar o seu post? Clique em 'OK' para confirmar e volte para a Home."
  );
  if (confirmDelete) {
    deleteDocument(postId);
    navigate("/");
  }
}





return (
<div className={styles.dashboard}>
<div className={styles.backgroundImage}></div>;
       
       <h2>Posts criados por si</h2>
       <p>Gerencie os seus posts</p>

       {posts && posts.length===0 ? (
        <div className={styles.noposts}>
            <p>Voce ainda nao fez nenhum post</p>
            <Link to = "/CreatePost" className="btn"> Crie o seu primeiro Post </Link>
        </div>
       ) : (

        <div>
        {posts&&posts.map((post)=>
        <div key={post.id} className={styles.post_row}>
         <p>{post.title}</p>
            <div className={styles.botoes}>
                <Link to={`/posts/${post.id}`} className="btn">
                  Ver
                </Link>


                
                <span
                onClick={() => handleDelete(post.id)}
                className="btn"
              >
                Apagar
              </span>
            </div>
        </div>
        )}
     </div>

       )}

   
</div>
  )
}

export default Dashboard