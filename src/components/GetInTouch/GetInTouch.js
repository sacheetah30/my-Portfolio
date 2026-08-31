// src/components/GetInTouch.js
import React from 'react';
import './GetInTouch.css'; // Import the CSS file for styling

const GetInTouch = () => {
  return (
    <section id="getintouch">
      <h2>Get In Touch</h2>
      <p>
        Got a question or just want to say hello?Go ahead.
      </p>
      
      <div className="social-media">
        <div className="social-icon">
          <a href="mailto:sachitabhandari9@gmail.com">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/sachitabhandari/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="social-icon">
          <a href="https://github.com/sacheetah30" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>


      </div>
    </section>
  );
};

export default GetInTouch;
