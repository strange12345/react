import React from 'react'
import axios from 'axios'
import {useState,useEffect } from 'react'

const baseURL = 'http://localhost:8000/posts';

export default function Post() {
    const [post, setPost] = useState(null);

    function createPost() {
      axios
        .post(baseURL, {
          id: "Hello World!",
          title: "This is a new post."
        })
        .then((r) => {
          setPost(r.data);
        });
    }
  
  return (
    <div>
   
    <button onClick={createPost}>Create Post</button>
  </div>
  )
}