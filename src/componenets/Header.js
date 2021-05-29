import React from 'react';
import Search from './Search';
import './Header.scss';

class Header extends React.Component {
  
  render() {
    const posts = this.props.posts;
    const selectChange = this.props.selectChange;
    const searchQuery = this.props.searchQuery;
    const onSearch = this.props.onSearch;

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
          <Search posts={posts} selectChange={selectChange} onSearch={onSearch} searchQuery={searchQuery} />
        </div>
      </header>
    );
  }
}

export default Header;