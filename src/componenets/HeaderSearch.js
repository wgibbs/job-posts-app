import React from 'react';
import './Header.scss';

class HeaderSearch extends React.Component {

  constructor() {
    super();
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
  
  render() {
    return (
      <div className="header__search">
        <label className="visually-hidden">Job Categories</label>
        <select className="header__search-select" value={this.state.value} onChange={this.handleChange}>
          <option value="">Select a Job category</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    );
  }
}

export default HeaderSearch;