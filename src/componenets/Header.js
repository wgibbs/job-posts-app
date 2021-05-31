import React from 'react';
import Search from './Search';
import './Header.scss';

class Header extends React.Component {
  
  render() {
    const posts = this.props.posts;
    const onSearch = this.props.onSearch;
    const fuse = this.props.fuseConfig;
    const searchQuery = this.props.searchQuery;
    const results = fuse.search(searchQuery);
    const postResults = searchQuery ? results.map(post => post.item) : posts;
    const jobString = `Job${results.length === 1 ? '' : 's'}`;

    return (
      <header className="header">
        <div className="header__interior">
          <div className="header__title">
            <h1>
              Job Posts
            </h1>
            <hr className="header__title-divider" />
            <h2>
              {postResults.length + ' ' + jobString + ' Available'}
            </h2>
          </div>
          <Search 
            onSearch={onSearch}
            searchQuery={searchQuery}
          />
        </div>
      </header>
    );
  }
}

export default Header;