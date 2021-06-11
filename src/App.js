
import React from 'react';
import Header from './componenets/Header';
import JobPost from './componenets/JobPost';
import ScrollTopButton from './componenets/ScrollTopButton';
import Footer from './componenets/Footer';
import posts from './api/posts.json';
import Fuse from 'fuse.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: [],
      filterList: [...new Set(posts.map(p => p.category))],
      searchQuery: '',
      posts: posts,
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onTextSearch = this.onTextSearch.bind(this);
  }
  
  onFilterChange(filter) {
    if (filter === 'all') {
      if (this.state.activeFilter.length === this.state.filterList.length) {
        this.setState({ activeFilter: [] });
      } else {
        this.setState({ activeFilter: this.state.filterList.map(filter => filter) });
      }
    } else {
      if (this.state.activeFilter.indexOf(filter) > -1) {
        const filterIndex = this.state.activeFilter.indexOf(filter);
        const newFilter = [...this.state.activeFilter];
        newFilter.splice(filterIndex, 1);
        this.setState({ activeFilter: newFilter });
      } else {
        this.setState({ activeFilter: [...this.state.activeFilter, filter] });
      }
    }
  }

  onTextSearch({ currentTarget }) {
    this.setState({
      searchQuery: currentTarget.value,
    });
  }

  render() {

    let filteredResults;
    if (
      this.state.activeFilter.length === 0 ||
      this.state.activeFilter.length === this.state.filterList.length
    ) {
      filteredResults = this.state.posts;
    } else {
      filteredResults = this.state.posts.filter(item =>
        this.state.activeFilter.indexOf(item.category) > -1
      );
    }

    const fuse = new Fuse(filteredResults, {
      isCaseSensitive: false,
      // includeScore: true,
      shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      minMatchCharLength: 1,
      // location: 0,
      threshold: 0.5,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      keys: [
        'title',
        'location',
      ]
    });

    const activeFilter = this.state.activeFilter;
    const filterList = this.state.filterList;
    const onFilterChange = this.onFilterChange;
    const onTextSearch = this.onTextSearch;
    const searchQuery = this.state.searchQuery;
    
    return (
      <div className="job-posts-app">
        <Header
          activeFilter={activeFilter} 
          filterList={filterList}
          onFilterChange={onFilterChange}
          onTextSearch={onTextSearch}
          searchQuery={searchQuery}
        />
        <JobPost
          filteredResults={filteredResults}
          fuseConfig={fuse}
          searchQuery={searchQuery}
        />
        <ScrollTopButton 
          scrollStepInPx="50" 
          delayInMs="16.66"
        />
        <Footer text="&copy; 2021 Job Posts Inc." />
      </div>
    );
  }
}

export default App;
