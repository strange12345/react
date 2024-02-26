import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blogs.css'; // Import CSS file for styling

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _start: 0, 
            _limit: 4
          }
        });
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-container">
      
      {blogs.map(blog => (
        <div key={blog.id} className="blog">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}
