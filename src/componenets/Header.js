import React from 'react';
import './Header.scss';

class Header extends React.Component {
  
  render() {
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
              <option value="1">UI/UX Design</option>
              <option value="2">Front End Development</option>
              <option value="3">Software Development</option>
            </select>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;