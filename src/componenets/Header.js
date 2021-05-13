import React from 'react';
import './Header.scss';

class Header extends React.Component {
  
  render() {
    return (
      <header className="header">
        <div className="header__interior">
          <h1 className="header__title">
            <span className="header__title-text">{this.props.title}:</span> 
            <span className="header__title-text">{this.props.defaultValue || 'Featured'}</span>
          </h1>
          <div className="header__search">
            <label className="visually-hidden">Job Categories</label>
            <select className="header__search-select" onChange={this.props.selectChange}>
              <option value="">Select a Category</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Front End Development">Front End Development</option>
              <option value="Software Development">Software Development</option>
            </select>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;