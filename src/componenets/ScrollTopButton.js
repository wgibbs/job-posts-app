import React from 'react';
import './ScrollTopButton.scss';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

class ScrollTopButton extends React.Component {

  constructor() {
    super();
    this.state = {
      intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
    const active = this.props.active;
    
    return <button 
            aria-label="Scroll Back to the top of the Page"
            className={'button__scroll-top' + (active ? ' scroll-active' : '')} 
            onClick={() => {this.scrollToTop();}}>
            <DoubleArrowIcon fontSize="large" />
          </button>;
   }
}

export default ScrollTopButton;