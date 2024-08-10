import React from 'react'
import './BlogCard.css'

const BlogCard = ({ title, timestamp, author, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
      <div
        className="card text-center m-3 p-3 border border-primary border-3"
        style={{ width: '100%' }}
      >
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-subtitle mb-2 text-muted">{timestamp}</p>
          <p className="card-text"><strong>{author}</strong></p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard