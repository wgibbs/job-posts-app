import React from 'react';
import {posts} from '../api/posts';
import './JobPost.scss';

class JobPost extends React.Component {
  
  render() {
    return (
      posts.map((post) =>
      <div className="job-post" key={post.title} data-category={post.category}>
        <h2 className="job-post__title">{post.title}</h2>
        <h3 className="job-post__company">{post.company}</h3>
        <hr className="job-post__title-divider" />
        <p className="job-post__description">{post.desc}</p>
        <a className="job-post__link" href="/">Learn More</a>
      </div>
      )
    );
  }
}

export default JobPost;