// src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-main-container">
            <div className="footer-frame-1">
                <div className="footer-group-logo"></div>
                <div className="footer-sradhya-renish-logo"></div>
            </div>

            <div className="footer-frame-2">
                <div className="footer-frame-3"><Link to="/" className="footer-home">Home</Link></div>
                <div className="footer-frame-4"><Link to="/about" className="footer-about-me">About Me</Link></div>
                <div className="footer-frame-5"><Link to="/projects" className="footer-projects">Projects</Link></div>
                <div className="footer-frame-6"><Link to="/skills" className="footer-skills">Skills</Link></div>
                <div className="footer-frame-7"><Link to="/contact" className="footer-contact-me">Contact Me</Link></div>
            </div>

            <div className="footer-frame-8">
                <div className="footer-frame-9">
                    <div className="footer-frame-a"></div>
                    <div className="footer-frame-b">
                        <span className="footer-contact-info">+91 92077 55908 |</span>
                    </div>
                </div>
                <div className="footer-frame-c">
                    <div className="footer-google-gmail"></div>
                    <div className="footer-frame-d">
                        <span className="footer-email">sradhyarenish9@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="footer-vector"></div>

            <div className="footer-credit">
                <span className="footer-developed-by-1">Designed by: </span>
                <span className="footer-name-bold-1">Niranj R</span>
                <br />
                <span className="footer-developed-by-2">Developed by: </span>
                <span className="footer-name-bold-2">Sradhya Renish</span>
            </div>


            <div className="footer-bg"></div>
        </div>
    );
};

export default Footer;
