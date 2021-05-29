import React from 'react';
import './JobPost.scss';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import StarsIcon from '@material-ui/icons/Stars';
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
            aria-hidden={activeCategory === 'all' || activeCategory === post.category ? 'false' : 'true'}
          >
            <div className="job-post__intro">
              <h2>{post.title}</h2>
              <h3><StarsIcon fontSize="small" /> {post.company}</h3>
              <hr className="job-post__title-divider" />
              <p>{post.description}</p>
            </div>
            <div className="job-post__highlights">
              <h4>Highlights:</h4>
              <hr className="job-post__title-divider job-post__title-divider--small" />
              <ul>
                {post.experience ? <li><WorkIcon fontSize="small" /> {post.experience}</li> : null}
                {post.salary ? <li><MonetizationOnIcon fontSize="small" />Salary: {post.salary}</li> : null}
                {post.health ? <li><LocalHospitalIcon fontSize="small" /> {post.health}</li> : null}
                {post.vacation ? <li><BeachAccessIcon fontSize="small" /> {post.vacation}</li> : null}
                {post.retirement ? <li><AccountBalanceIcon fontSize="small" /> {post.retirement}</li> : null}
              </ul>
            </div>
            <a className="job-post__link" href="/">
              <span>Learn More</span> 
              <DoubleArrowIcon fontSize="small" />
            </a>
          </div>
        )}
      </section>
    );
  }
}

export default JobPost;