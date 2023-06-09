import styles from "./PostDetail.module.css"

import { Link } from "react-router-dom"

const PostDetail = ({post}) => {
  return (
     <div>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.createdBy}</p>
        <Link to={`/posts/${post.id}`} className="btn">Ler Post</Link>
     </div>
  )
}

export default PostDetail





