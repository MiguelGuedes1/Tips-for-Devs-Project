import styles from "./PostDetail.module.css"


import { Link } from "react-router-dom"

const PostDetail = ({post}) => {
   console.log(post); // Verifique se o objeto post contém a propriedade title


  return (
     <div className={styles.post_detail}>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p className={styles.createdby}>Criador: {post.createdBy}</p>
        <p className={styles.conteudo}>{post.body}</p>
     </div>
  )
}

export default PostDetail





