// src/components/AboutMe.jsx
import React from "react";
import "../styles/aboutme.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-frame-1">
        <div className="about-group">
          <span className="about-projects">Projects</span>
          <span className="about-number">12</span>
        </div>
        <div className="about-line"></div>
        <div className="about-group-2">
          <span className="about-people">People</span>
          <span className="about-number-3">09</span>
        </div>
        <div className="about-line-4"></div>
        <div className="about-group-5">
          <span className="about-years">Years</span>
          <span className="about-zero-one">02</span>
        </div>
        <div className="about-line-6"></div>
        <div className="about-group-7">
          <span className="about-offices">Domains</span>
          <span className="about-one-five">07</span>
        </div>
      </div>

      <div className="about-frame-8">
        <div className="about-frame-9">
          <div className="about-frame-a">
            <div className="about-frame-b">
                <span className="about-symbol">&lt;</span>
                <span className="about-word">About</span>
                <span className="about-me-bold">Me</span>
                <span className="about-greater-than">&gt;</span>
            </div>

            <div className="about-frame-c">
              <span className="about-description">
                I am a third-year B.Tech Computer Science student at Mar Baselios College of Engineering and Technology
                with strong skills in Python, Java, and web technologies. Passionate about building practical,
                user-focused solutions, I have developed multiple projects including event registration systems, financial apps, and websites.
                As Operations Lead at CSI SB MBCET and former Co-Lead at Catalyst IEDC, I’ve led technical events and design initiatives.
                With a keen interest in UI/UX and problem-solving, I thrive in collaborative environments.
                I’m driven by curiosity, continuous learning, and a goal to create meaningful impact through technology and community engagement.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bg"></div>
    </div>
  );
};

export default AboutMe;
