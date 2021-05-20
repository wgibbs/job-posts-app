import React from 'react';
import './JobPost.scss';

class JobPost extends React.Component {

  render() {
    const posts = this.props.posts;
    const activeCategory = this.props.activeCategory;

    return (
      <section className="job-post-container">
        {(posts).map((post, i) =>
          <div 
            key={i}
            className={'job-post' + (activeCategory === 'all' || activeCategory === post.category ? '' : ' hidden')}
          >
            <h2 className="job-post__title">{post.title}</h2>
            <h3 className="job-post__company">{post.company}</h3>
            <hr className="job-post__title-divider" />
            <p className="job-post__description">{post.desc}</p>
            <div className="job-post__highlights">
              <h4>Highlights:</h4>
              <ul>
                <li>{post.highlight1}</li>
                <li>{post.highlight2}</li>
                <li>{post.highlight3}</li>
                <li>{post.highlight4}</li>
              </ul>
            </div>
            <a className="job-post__link" href="/">Learn More</a>
          </div>
        )}
      </section>
    );
  }
}

export default JobPost;