import React from 'react';
import {posts} from './api/posts';
import Header from './componenets/Header';
import JobPost from './componenets/JobPost';
import Footer from './componenets/Footer';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      categoryText: '',
    };
    this.selectChange = this.selectChange.bind(this);
  }

  selectChange(event) {
    this.setState({
      value: event.target.value,
      categoryText: event.target.options[event.target.selectedIndex].text,
    });
  }
  
  render() {
    return (
      <div className="job-posts-app">
        <Header title="Job Posts" posts={posts} selectChange={this.selectChange} category={this.state.categoryText} />
        <JobPost posts={posts} activeCategory={this.state.value ? this.state.value : 'all'} />
        <Footer text="&copy; 2021 Job Posts Inc." />
      </div>
    );
  }
}

export default App;
