import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about">
      <h2>Hello <span>World</span>🌍, Nice to meet you!</h2>
      <p className={`about-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
      I'm Leju, an aspiring DevOps & Cloud enthusiast diving deep into AWS, Linux, Docker, and real-world automation. I enjoy building efficient systems, breaking down complex problems, and making tech work smoother and smarter.<br></br>

I'm also exploring cloud security and best practices to keep deployments safe, stable, and scalable. Alongside my learning journey, I’m taking on freelance projects—helping individuals and small teams with cloud setups, server troubleshooting, and documentation.<br></br>
I love the challenge of turning ideas into reality, whether it’s through coding, automating workflows, or optimizing processes. I’m all about continuous learning and growth, always seeking new challenges to tackle and skills to master.<br></br>

My long-term goal? To master DevOps, security, and cloud engineering, and build a career that blends technical depth with real-world impact. Always learning, always leveling up.
      </p>
      <button onClick={toggleExpansion} className="read-more-btn">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      <h3>What I'm Doing?</h3>
      <div className="box-container">
        <div className="box">
          <h3>⚙️ DevOps</h3>
          <p>Passionate about streamlining delivery through automation, CI/CD, and infrastructure as code.</p>
        </div>
        <div className="box">
          <h3>🔐 Cybersecurity</h3>
          <p>Actively learning and applying security practices, aiming to integrate DevSecOps into modern pipelines.</p>
        </div>
        <div className="box">
          <h3>☁️ Cloud</h3>
          <p>Exploring cloud platforms like AWS to build scalable, reliable, and secure infrastructure.</p>
        </div>
        <div className="box">
          <h3>🌐 Web Development</h3>
          <p>Enjoy building with web technologies and understanding the full software development lifecycle (SDLC).</p>
        </div>
        <div className="box">
          <h3>💼 Freelancing</h3>
          <p>Offering cloud support, deployment, and documentation services to small teams and solo developers.</p>
        </div>
        {/* <div className="box">
          <h3>📢 Content & Outreach</h3>
          <p>Planning to share my journey through social media, aiming to help others and grow my tech circle.</p>
       </div> */}
       <div className="box">
          <h3>🎙️ Future Podcast</h3>
          <p>Interested in starting a podcast to talk about tech, mindset, and the unfiltered struggles of self-learning.</p>
       </div>
      </div>
    </section>
  );
};

export default About;
