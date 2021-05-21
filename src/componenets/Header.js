import React from 'react';
import './Header.scss';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

class Header extends React.Component {
  
  render() {
    const posts = this.props.posts;
    const categories = [...new Set(posts.map(p => p.category))];

    return (
      <header className="header">
        <div className="header__interior">
          <h1 className="header__title">
            <span className="header__title-text">{this.props.title}:</span> 
            <span className="header__title-text">{this.props.category || 'All Posts'}</span>
          </h1>
          <div className="header__search">
            <label className="visually-hidden">Job Categories</label>
            <select className="header__search-select" onChange={this.props.selectChange} defaultValue="all">
              <option value="" disabled="disabled">Select a Category</option>
              <option value="all">All Posts</option>
              {categories.map((cat) =>
                <option key={cat} value={cat}>{cat}</option>
              )}
            </select>
            <ArrowDropDownCircleIcon fontSize="large" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;