
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{
      padding: '10px',
      fontSize: '12px',
      maxWidth: '700px'
    }}>
      <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>
        Posts
      </h2>

      <ul style={{ paddingLeft: '20px' }}>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: '8px' }}>
            <strong style={{ fontSize: '13px' }}>
              {post.title}
            </strong>
            <p style={{
              fontSize: '12px',
              margin: '3px 0',
              lineHeight: '1.4'
            }}>
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
