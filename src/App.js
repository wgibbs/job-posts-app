
import React from 'react';
import Header from './componenets/Header';
import JobPost from './componenets/JobPost';
import ScrollTopButton from './componenets/ScrollTopButton';
import Footer from './componenets/Footer';
import posts from './api/posts.json';
import Fuse from 'fuse.js';

const fuse = new Fuse(posts, {
  isCaseSensitive: false,
  // includeScore: true,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  minMatchCharLength: 2,
  // location: 0,
  threshold: 0.5,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: [
    'company',
    'location',
  ]
});

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      categoryText: '',
      searchQuery: '',
      scrollActive: false,
    };
    this.selectChange = this.selectChange.bind(this);
    this.handlePageScroll = this.handlePageScroll.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  selectChange(event) {
    this.setState({
      value: event.target.value,
      categoryText: event.target.options[event.target.selectedIndex].text,
    });
  }

  onSearch({ currentTarget }) {
    this.setState({
      searchQuery: currentTarget.value,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlePageScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePageScroll);
  }

  handlePageScroll(event) {
    if (window.pageYOffset > 280) {
      this.setState({
        scrollActive: true
      });
    } else {
      this.setState({
        scrollActive: false
      });
    }
  }

  render() {
    return (
      <div className="job-posts-app">
        <Header 
          posts={posts} 
          selectChange={this.selectChange} 
          onSearch={this.onSearch} 
          searchQuery={this.state.searchQuery} 
          category={this.state.categoryText} 
        />
        <JobPost 
          posts={posts} 
          fuseConfig={fuse} 
          onSearch={this.onSearch} 
          searchQuery={this.state.searchQuery} 
          activeCategory={this.state.value ? this.state.value : 'all'} 
        />
        <ScrollTopButton 
          active={this.state.scrollActive} 
          scrollStepInPx="50" 
          delayInMs="16.66"
        />
        <Footer text="&copy; 2021 Job Posts Inc." />
      </div>
    );
  }
}

export default App;
