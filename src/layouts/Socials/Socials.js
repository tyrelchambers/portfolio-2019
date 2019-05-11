import React from 'react'
import './Socials.scss';

const Socials = (props) => {
  return(
    <ul className="d-f ai-c socials-list jc-c">
      <li className="social-item">
        <a href="https://github.com/tyrelchambers">
          <i className="fab fa-github"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://gitlab.com/tychambers3">
          <i className="fab fa-gitlab"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://twitter.com/imtyrelchambers">
          <i className="fab fa-twitter"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://www.linkedin.com/in/tyrelchambers/">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://www.youtube.com/storiesaftermidnight">
          <i className="fab fa-youtube"></i>
        </a>
      </li>
    </ul>
  );
}

export default Socials;
