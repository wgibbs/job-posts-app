import './JobPost.scss';

function JobPost() {
  
  const posts = [
    {
      category: '1',
      title: 'Job Post 1',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
    { 
      category: '1',
      title: 'Job Post 2',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
    {
      category: '1',
      title: 'Job Post 3',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
    {
      category: '2',
      title: 'Job Post 4',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
    {
      category: '2',
      title: 'Job Post 5',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
    {
      category: '2',
      title: 'Job Post 6',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
    {
      category: '3',
      title: 'Job Post 7',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
    {
      category: '3',
      title: 'Job Post 8',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
    {
      category: '3',
      title: 'Job Post 9',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
    {
      category: '3',
      title: 'Job Post 10',
      company: 'Company Name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.',
    },
  ];
  
  return (
    posts.map((post) =>
    <div className="job-post" key={post.title} data-category={post.category}>
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