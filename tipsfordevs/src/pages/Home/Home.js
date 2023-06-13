import styles from "./Home.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../Components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading, error } = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.home}>
      {posts &&
        posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
    </div>
  );
};

export default Home; 







