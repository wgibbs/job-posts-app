
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
      scrollActive: false,
    };
    this.selectChange = this.selectChange.bind(this);
    this.handlePageScroll = this.handlePageScroll.bind(this);
  }

  selectChange(event) {
    this.setState({
      value: event.target.value,
      categoryText: event.target.options[event.target.selectedIndex].text,
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
        <Header posts={posts} selectChange={this.selectChange} category={this.state.categoryText} />
        <JobPost posts={posts} activeCategory={this.state.value ? this.state.value : 'all'} />
        <ScrollTopButton active={this.state.scrollActive} scrollStepInPx="50" delayInMs="16.66"/>
        <Footer text="&copy; 2021 Job Posts Inc." />
      </div>
    );
  }
}

export default App;
