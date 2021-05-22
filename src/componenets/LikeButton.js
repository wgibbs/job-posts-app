import React from 'react';
import './LikeButton.scss';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  
  buttonClicked(event) {
    this.setState({value: this.state.value+1});
  }
  
  render() {
    return (
    	<div className="like-button">
        <button onClick={this.buttonClicked}>Click</button>
        <span>{this.state.value}</span>
      </div>
    );
  }
}

export default LikeButton;