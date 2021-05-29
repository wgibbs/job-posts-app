import React from 'react';
import './Search.scss';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

class Search extends React.Component {
  
  render() {
    const posts = this.props.posts;
    const categories = [...new Set(posts.map(p => p.category))];
    const query = this.props.query;
    const onSearch = this.props.onSearch;

    return (
      <form className="search" action="#" role="search">
        <div className="search__input-wrap">
          <label htmlFor="search-category">Search Categories</label>
          <div className="search__select-wrap">
            <select id="search-category" onChange={this.props.selectChange} defaultValue="all">
              <option value="" disabled="disabled">Select a Category</option>
              <option value="all">All Jobs</option>
              {categories.map((cat) =>
                <option key={cat} value={cat}>{cat}</option>
              )}
            </select>
            <ArrowDropDownCircleIcon fontSize="large" />
          </div>
        </div>
        <div className="search__input-wrap">
          <label htmlFor="search-title-loc">Search Company/Location</label>
          <input 
            type="search" 
            id="search-title-loc" 
            className="header__search-text-input"
            placeholder="Company/Location"
            value={query} 
            onChange={onSearch} 
          />
        </div>
      </form>
    );
  }
}

export default Search;