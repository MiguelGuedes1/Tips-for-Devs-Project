import styles from "./Home.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../Components/PostDetail";


const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading, error } = useFetchDocuments("posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const criar_post=()=>{
    navigate('/CreatePost' );
  }

  return (
    <div className={styles.home}>
         <div className={styles.backgroundImage}></div>;
            <div className={styles.titulos}>
                <h1>Welcome to CTRL + CODE</h1>
                <h2>knowledge is power, share yours</h2>
                <button onClick={criar_post} className={styles.botao_share_knowledge}>Share knowledge</button>

      </div>
      

      {posts &&
        posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
    </div>
  );
};

export default Home; 







