import React from 'react';
import {posts} from './api/posts';
import Header from './componenets/Header';
import JobPost from './componenets/JobPost';
import ScrollTopButton from './componenets/ScrollTopButton';
import Footer from './componenets/Footer';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      categoryText: '',
    };
    this.myRef = React.createRef();
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
        <Header posts={posts} selectChange={this.selectChange} category={this.state.categoryText} />
        <JobPost posts={posts} activeCategory={this.state.value ? this.state.value : 'all'} />
        <ScrollTopButton scrollStepInPx="50" delayInMs="16.66"/>
        <Footer text="&copy; 2021 Super Job Board Inc." />
      </div>
    );
  }
}

export default App;
