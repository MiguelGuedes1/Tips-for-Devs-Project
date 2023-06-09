//CSS
import styles from "./Home.module.css"

// Hooks

import {useNavigate,Link} from "react-router-dom"
import { useState } from "react"
import { useFetchDocuments } from "../../hooks/useFetchDocument"
import PostDetail from "../../Components/PostDetail"



const Home = () => {
const [query,setQuery]=useState("")
const {documents:posts,loading}=useFetchDocuments("posts")

const handleSubmit=(e)=>{
  e.preventDefault()
}


  return (
         <div>
         
              {posts&&posts.map((post)=> <PostDetail key={post.id} post={post}/>)}
         </div>
  )
}

export default Home







