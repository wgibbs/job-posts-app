import React from 'react';
import './Search.scss';

class Search extends React.Component {
  
  render() {
    const searchQuery = this.props.searchQuery;
    const onSearch = this.props.onSearch;

    return (
      <form className="search" action="#" role="search">
        <div className="search__input-wrap">
          <label htmlFor="primary-search">Search Job Title or Location</label>
          <input 
            type="search" 
            id="primary-search" 
            className="header__search-text-input"
            placeholder="Job Title or Location"
            value={searchQuery} 
            onChange={onSearch} 
          />
        </div>
      </form>
    );
  }
}

export default Search;