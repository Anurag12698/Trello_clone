// import React from 'react';

// function Footer() {
//   return (
//     <footer>
//       <div className="container">
//         <p>&copy; 2024 Trello App. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Trello</h3>
        <p>What's behind the boards.</p>
      </div>
      <div className="footer-section">
        <h3>Jobs</h3>
        <p>Learn about open roles on the Trello team.</p>
      </div>
      <div className="footer-section">
        <h3>Apps</h3>
        <p>Download the Trello App for your Desktop or Mobile devices.</p>
      </div>
      <div className="footer-section">
        <h3>Contact us</h3>
        <p>Need anything? Get in touch and we can help.</p>
      </div>
      <div className="footer-bottom">
        <div>
          <a href="/english">English</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <p>&copy; 2024 Atlassian</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
