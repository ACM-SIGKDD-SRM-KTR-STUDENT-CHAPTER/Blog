import React from 'react'
import BlogCard from '../BlogCard/BlogCard';
import './BlogList.css'

const BlogList = () => {
  return (
    <div className="container-fluid bg-dark text-white py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-2"> {/* Consistent spacing */}
          <BlogCard
            title="First Blog"
            timestamp="01-08-2024"
            author="Author One"
            description="This is a short description of the first blog..."
            link="https://example.com/full-first-blog"
          />
        </div>
        <div className="col-md-6 col-lg-4 mb-2"> {/* Consistent spacing */}
          <BlogCard
            title="Second Blog"
            timestamp="01-08-2024"
            author="Author Two"
            description="This is a short description of the second blog..."
            link="https://example.com/full-second-blog"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-2"> {/* Consistent spacing */}
          <BlogCard
            title="Third Blog"
            timestamp="01-08-2024"
            author="Author Three"
            description="This is a short description of the third blog..."
            link="https://example.com/full-third-blog"
          />
        </div>
        <div className="col-md-6 col-lg-4 mb-2"> {/* Consistent spacing */}
          <BlogCard
            title="Fourth Blog"
            timestamp="01-08-2024"
            author="Author Four"
            description="This is a short description of the fourth blog..."
            link="https://example.com/full-fourth-blog"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogList