import React from 'react';
import Header from './componenets/Header';
import JobPost from './componenets/JobPost';
import Footer from './componenets/Footer';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.selectChange = this.selectChange.bind(this);
  }

  selectChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="job-posts-app">
        <Header title="Job Posts" selectChange={this.selectChange} defaultValue={this.state.value} />
        <section className="job-post-container" data-category={this.state.value}>
          <JobPost />
        </section>
        <Footer text="&copy; 2021 Job Posts Inc." />
      </div>
    );
  }
}

export default App;
