import {getAllPosts} from '../api'
import React, { useState, useEffect } from 'react';


export const Posts = () => {

    const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await getAllPosts()
      setPosts(data.posts)
  }
  
    fetchPosts();
  }, [])

    return (
    <div className="contentContainer">
        {
        posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <h4>{post.price}</h4>              
            </div>))
        }          
    </div>
    )
}
