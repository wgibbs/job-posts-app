import React from 'react';
import './ScrollTopButton.scss';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

class ScrollTopButton extends React.Component {

  constructor() {
    super();
    this.state = {
      intervalId: 0,
      scrollActive: false,
    };
    this.handlePageScroll = this.handlePageScroll.bind(this);
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

  handlePageScroll(event) {
    if (window.pageYOffset > 280) {
      this.setState({
        scrollActive: true,
      });
    } else {
      this.setState({
        scrollActive: false,
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlePageScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePageScroll);
  }
  
  render () {
    const active = this.state.scrollActive;
    
    return  <button 
              aria-label="Scroll Back to the top of the Page"
              className={'button__scroll-top' + (active ? ' scroll-active' : '')} 
              onClick={() => {this.scrollToTop();}}>
              <DoubleArrowIcon fontSize="large" />
            </button>;
   }
}

export default ScrollTopButton;