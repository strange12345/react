import React, { useEffect, useState } from 'react';
import axios from 'axios';

function List() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
