import './JobPost.scss';

function JobPost() {
  
  const posts = [
    {
      title: 'Job Post 1',
      company: 'Company Name 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Job Post 2',
      company: 'Company Name 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Job Post 3',
      company: 'Company Name 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Job Post 4',
      company: 'Company Name 4',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Job Post 5',
      company: 'Company Name 5',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Job Post 6',
      company: 'Company Name 6',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Job Post 7',
      company: 'Company Name 7',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Job Post 8',
      company: 'Company Name 8',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Job Post 9',
      company: 'Company Name 9',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Job Post 10',
      company: 'Company Name 10',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  
  return (
    posts.map((post) =>
    <div className="job-post" key={post.title}>
      <h2 className="job-post__title">{post.title}</h2>
      <h3 className="job-post__company">{post.company}</h3>
      <hr className="job-post__title-divider" />
      <p className="job-post__description">{post.desc}</p>
      <a className="job-post__link" href="/">Learn More</a>
    </div>
    )
  );
}

export default JobPost;