import React from 'react';
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
        <Header title="Job Posts" selectChange={this.selectChange} category={this.state.categoryText} />
        <section className={this.state.value ? 'job-post-container category-' + this.state.value + '-active' : 'job-post-container category-0-active'}>
          <JobPost />
        </section>
        <Footer text="&copy; 2021 Job Posts Inc." />
      </div>
    );
  }
}

export default App;
