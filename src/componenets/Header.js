import React from 'react';
import Search from './Search';
import './Header.scss';

class Header extends React.Component {

  render() {
    const activeFilter = this.props.activeFilter;
    const filterList = this.props.filterList;
    const onFilterChange = this.props.onFilterChange;
    const onTextSearch = this.props.onTextSearch;
    const searchQuery = this.props.searchQuery;

    return (
      <header className="header">
        <div className="header__interior">
          <div className="header__title">
            <h1>
              Job Posts
            </h1>
            <hr className="header__title-divider" />
          </div>
          <Search
            activeFilter={activeFilter}
            filterList={filterList}
            onFilterChange={onFilterChange}
            onTextSearch={onTextSearch}
            searchQuery={searchQuery}
          />
        </div>
      </header>
    );
  }
}

export default Header;