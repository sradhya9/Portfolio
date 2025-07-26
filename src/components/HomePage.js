// src/components/HomePage.jsx
import React from "react";
import '../styles/Homepage.css';
import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  return (
    <div className="main-container">
      <div className="frame-1">
        <div className="frame-2">
          <div className="frame-3"></div>
          <div className="frame-4">
            <div className="group">
              <div className="frame-6">
                <div className="frame-7">
                  <Link to="/" className={`home ${location.pathname === "/" ? "home-active" : "home-inactive"}`}>Home</Link>
                </div>
                <div className="frame-8">
                  <Link to="/about" className={`about-me ${location.pathname === "/about" ? "home-active" : "home-inactive"}`}>
                      About Me
                  </Link>
                </div>
                <div className="frame-9">
                  <Link to="/skills" className={`portfolio ${location.pathname === "/skills" ? "home-active" : "home-inactive"}`}>
                    Skills
                  </Link>
                </div>
                <div className="frame-10">
                  <Link to="/projects" className={`projects ${location.pathname === "/projects" ? "home-active" : "home-inactive"}`}>
                    Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button className="connect-frame">
            <div className="connect-text"><Link to="/contact">
                    CONNECT
                  </Link></div>
          </button>
        </div>
      </div>

      <div className="flex-row-fa">
        <div className="pic"></div>
        <span className="hi-i-am">Hi I am</span>
        <span className="sradhya-renish">Sradhya Renish</span>
        <span className="software">Software</span>
        <span className="developer">Developer</span>
        <span className="description">
          Creative and efficient software developer with a knack for building
          user-focused, scalable solutions across web and backend
          technologies.
        </span>
        <div className="rectangle-ab"><span className="hire-me">Hire Me</span></div>
        <div className="rectangle-b">
          <span className="download-cv">Download CV</span>
          <div className="iconly-light-download"></div>
        </div>
      </div>

      <div className="flex-row-f">
        <div className="facebook-negative">
          <div className="icon-park-outline-dribble"></div>
        </div>
        <div className="group-c"></div>
        <div className="instagram-negative"></div>
        <div className="linkedin-negative"></div>
      </div>

      <div className="home-bg"></div>
    </div>
  );
};

export default HomePage;
