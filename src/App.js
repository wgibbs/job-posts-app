//import logo from './logo.svg';
import Header from './componenets/Header';
import JobPost from './componenets/JobPost';

function App() {
  return (
    <div className="job-posts-app">
      <Header />
      <section className="job-post-container">
        <JobPost />
      </section>
    </div>
  );
}

export default App;
