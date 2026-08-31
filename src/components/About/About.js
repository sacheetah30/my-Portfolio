import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about">
      <h2>Hi, I'm Sachita</h2>
      <p className={`about-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
      I like DevOps so I'm diving deep into AWS, Linux, Docker, and real-world automation.<br></br>

I'm also exploring cloud security and best practices to keep deployments safe, stable, and scalable. Alongside my learning journey in tech, <br></br>
I love networking,volunteering, socializing, and hiking.<br></br>

      </p>
      <button onClick={toggleExpansion} className="read-more-btn">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      <h3>What I'm Doing?</h3>
      <div className="box-container">
        <div className="box">
          <h3> DevOps</h3>
          <p>Passionate about streamlining delivery through automation, CI/CD, and infrastructure as code.</p>
        </div>

        <div className="box">
          <h3>Cloud</h3>
          <p>Exploring cloud platforms like AWS, Azure to build scalable, reliable, and secure infrastructure.</p>
        </div>
        <div className="box">
          <h3> Web Development</h3>
          <p>Enjoy building with web technologies and understanding the software development lifecycle (SDLC).</p>
        </div>


         <div className="box">
          <h3>Content Creation and Marketing</h3>
          <p>Creating engaging content and managing marketing efforts to promote tech initiatives.</p>
       </div> 

      </div>
    </section>
  );
};

export default About;
