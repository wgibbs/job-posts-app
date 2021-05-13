import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  
  render() {
    return (
      <footer className="footer">
        <div className="footer__interior">
          <p className="footer__copyright">{this.props.text}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;