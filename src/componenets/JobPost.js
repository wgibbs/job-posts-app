import React from 'react';
import './JobPost.scss';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WorkIcon from '@material-ui/icons/Work';

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
              <hr className="job-post__title-divider job-post__title-divider--small" />
              <ul>
                <li><WorkIcon fontSize="small" /> {post.highlight1}</li>
                <li><MonetizationOnIcon fontSize="small" /> {post.highlight2}</li>
                <li><LocalHospitalIcon fontSize="small" /> {post.highlight3}</li>
                <li><BeachAccessIcon fontSize="small" /> {post.highlight4}</li>
                <li><AccountBalanceIcon fontSize="small" /> {post.highlight5}</li>
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