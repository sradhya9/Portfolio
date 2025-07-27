// src/components/HomePage.jsx
import React from "react";
import '../styles/Homepage.css';
import { Link, useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
          <button className="connect-frame" >
            <div className="connect-text" ><Link to="/contact">
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
        <button
          className="rectangle-ab"
          onClick={() => navigate("/contact")}
        >
          <span className="hire-me">Hire Me</span>
        </button>
        <a
          className="rectangle-b"
          href="/resume.pdf"
          download="Sradhya_Renish_Resume.pdf"
          style={{ textDecoration: "none" }}
        >
          <span className="download-cv">Download CV</span>
          <div className="iconly-light-download"></div>
        </a>

      </div>

      <div className="flex-row-f">
        <a href="https://github.com/sradhya9" target="_blank" rel="noopener noreferrer" className="facebook-negative"><div className="icon-park-outline-dribble"></div></a>
        <a href="mailto:sradhyarenish9@gmail.com" target="_blank" className="group-c" rel="noopener noreferrer"></a>
        <a href="https://www.instagram.com/__.sradhya18.__/" target="_blank" rel="noopener noreferrer" className="instagram-negative"></a>
        <a href="https://www.linkedin.com/in/sradhya-renish-74181621b/" target="_blank" rel="noopener noreferrer" className="linkedin-negative"></a>

      </div>

      <div className="home-bg"></div>
    </div>
  );
};

export default HomePage;
