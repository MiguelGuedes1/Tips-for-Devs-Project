import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
import { getDocumentById } from "../hooks/useFetchDocuments";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getDocumentById('posts', postId);
        setPost(post);
      } catch (error) {
        console.log(error);
        // Lidar com o erro de documento não encontrado ou outros erros de recuperação do post
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return <PostDetail post={post} />;
};

export default PostDetailPage;


