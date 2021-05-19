import React from 'react';
import './JobPost.scss';

class JobPost extends React.Component {

  render() {
    const posts = this.props.posts;
    const activeCategory = this.props.activeCategory;

    console.log(Object.keys(posts));
    
    return (
      <section className="job-post-container">
        {posts.map((post) =>
          <div 
            key={post.id}
            className={'job-post' + (activeCategory === 'all' || activeCategory === post.category ? '' : ' hidden')}
          >
            <h2 className="job-post__title">{post.title}</h2>
            <h3 className="job-post__company">{post.company}</h3>
            <hr className="job-post__title-divider" />
            <p className="job-post__description">{post.desc}</p>
            <a className="job-post__link" href="/">Learn More</a>
          </div>
          
        )}
      </section>
    );
  }
}

export default JobPost;