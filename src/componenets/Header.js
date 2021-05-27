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
          <div className="header__title">
            <h1>
              Job Posts
            </h1>
            <hr className="header__title-divider" />
            <h2>
              {this.props.category || 'All Jobs'}
            </h2>
          </div>
          <div className="header__search">
            <label className="header__search-label" htmlFor="select-main">Search Job Categories</label>
            <div className="header__search-select">
              <select id="select-main" onChange={this.props.selectChange} defaultValue="all">
                <option value="" disabled="disabled">Select a Category</option>
                <option value="all">All Jobs</option>
                {categories.map((cat) =>
                  <option key={cat} value={cat}>{cat}</option>
                )}
              </select>
              <ArrowDropDownCircleIcon fontSize="large" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;