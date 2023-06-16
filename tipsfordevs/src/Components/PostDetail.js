import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  console.log(post); // Verifique se o objeto post está sendo passado corretamente e se contém a propriedade 'image'

  if (!post) {
    return null; // Trate o caso em que o objeto post é undefined
  }

  return (
    <div className={styles.post_detail}>
      <div className={styles.backgroundImage}></div>;
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>Criador: {post.createdBy}</p>
      <p className={styles.conteudo}>{post.body}</p>
    </div>
    
  );
};

export default PostDetail;






