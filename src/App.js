import './App.css';
import React, { useState, useEffect } from 'react';
import {Posts} from './components/Posts'


const config = {
  'apiLink' : 'https://strangers-things.herokuapp.com/api',
  'cohort' : '2211-ftb-et-web-pt',   
}
console.log(`${config.apiLink}/${config.cohort}/posts`)



function App() {

  const [posts, setPosts] = useState([]);
  

useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch (`${config.apiLink}/${config.cohort}/posts`);
    const {data: {posts}} = await response.json();
    setPosts(posts)
}
  fetchPosts();
}, [])


  return (
    <div className="App">
       <Posts posts={posts}/>
    </div>
  );
}

export default App;
