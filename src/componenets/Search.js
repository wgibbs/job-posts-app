import React from 'react';
import './Search.scss';

class Search extends React.Component {

  render() {
    const activeFilter = this.props.activeFilter;
    const filterList = this.props.filterList;
    const searchQuery = this.props.searchQuery;
    const onFilterChange = this.props.onFilterChange;
    const onTextSearch = this.props.onTextSearch;

    return (
      <form className="search" action="#" role="search">
        <div className="search__checkboxes">
          <h2>Filter by Category</h2>
          <div className="search__checkboxes-interior">
            <div 
              className={'search__checkbox-wrap' + (activeFilter.length === filterList.length ? ' active' : '')}
            >
              <input 
                type="checkbox" 
                id="search-checkbox-all"
                value="all"
                onChange={() => onFilterChange('all')}
                checked={activeFilter.length === filterList.length}
              />
              <label htmlFor="search-checkbox-all">All</label>
            </div>
            {filterList.map((filter, i) => {
              return (
              <div 
                key={i} 
                className={'search__checkbox-wrap' + (activeFilter.indexOf(filter) > -1 ? ' active' : '')}
              >
                <input 
                  type="checkbox" 
                  id={'search-checkbox-' + i}
                  value={filter} 
                  onChange={() => onFilterChange(filter)}
                  checked={activeFilter.indexOf(filter) > -1}
                />
                <label htmlFor={'search-checkbox-' + i}>{filter}</label>
              </div>
              )
            })}
          </div>
        </div>
        <div className="search__input-wrap">
          <label htmlFor="primary-search">Search Job Title/Location</label>
          <input 
            type="search" 
            id="primary-search"
            placeholder="Job Title/Location"
            value={searchQuery}
            onChange={onTextSearch}
          />
        </div>
      </form>
    );
  }
}

export default Search;