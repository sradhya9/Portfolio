// src/components/Skill.jsx
import React, { useState } from "react";
import "../styles/skill.css";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="skill-main-container">
      <div class="sk1-container"></div>
      <div className={`skill-content-wrapper ${selectedSkill ? "expanded" : ""}`}>
        {/* Left column for detail */}
        {selectedSkill === "Programming" && (
          <div className="skill-bg-image">
            <div className="skill-group-1">
              <div className="skill-group-2">
                <div className="skill-programming-3">
                  <span className="skill-pro">Pro</span>
                  <span className="skill-gramming">gramming</span>
                </div>
                <div className="skill-languages"></div>
              </div>
              <div className="skill-frame-4">
                <span className="skill-c">• C</span>
                <span className="skill-python">• Python</span>
                <span className="skill-java">• Java</span>
                <span className="skill-sql">• SQL</span>
              </div>
            </div>
          </div>
        )}
        {selectedSkill === "Web Development" && (
          <div className="skill-bg-image">
            <div class="dev-group-1">
              <div class="dev-group-2">
                <span class="skill-web">Web</span>
                <div class="skill-development">
                  <span class="skill-dev">Dev</span
                  ><span class="skill-development-3">elopment</span>
                </div>
              </div>
              <div class="skill-frontend-react-html">
                <span class="skill-backend">• Frontend: </span
                ><span class="skill-react">React, </span
                ><span class="skill-backend-skills"
                >HTML5, CSS3, JavaScript (Basic), Figma<br /></span
                ><span class="skill-backend-4">• Backend:</span><span class="empty"> </span
                ><span class="skill-backend-skills-5"
                >PHP (via XAMPP), FastAPI (Beginner), REST APIs<br /></span
                ><span class="skill-frameworks-libraries">• Frameworks & Libraries:</span
                ><span class="skill-backend-skills-6"> Java Swing, FastAPI, Tkinter</span>
              </div>
            </div>
          </div>
        )}
        {selectedSkill === "Database Technologies" && (
          <div className="skill-bg-image">
            <div class="db-group">
              <div class="db-group-2">
                <div class="db-database">
                  <span class="db-data">Data</span><span class="db-base">base</span>
                </div>
                <div class="db-technologies"></div>
              </div>
              <div class="db-frame-3">
                <div class="db-mysql-xampp-mongodb">
                  <span class="db-mysql">• MySQL </span
                  ><span class="db-xampp">(via XAMPP)</span
                  ><span class="db-mongodb"> • MongoDB </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedSkill === "UI/UX Designing" && (
          <div className="skill-bg-image">
            <div class="ui-group">
              <div class="ui-group-2">
                <div class="ui-ux">
                  <span class="ui">UI</span><span class="ui-slash">/</span
                  ><span class="ui-3">UX</span>
                </div>
                <div class="ui-designing">
                  <span class="ui-design">Design</span><span class="ui-ing">ing</span>
                </div>
              </div>
              <div class="ui-frame-4">
                <span class="ui-figma">• Figma</span><span class="ui-framer">• Framer</span>
              </div>
            </div>
          </div>
        )}
        {selectedSkill === "Graphic Designing" && (
          <div className="skill-bg-image">
            <div class="ui-group">
              <div class="ui-group-2">
                <div class="ui-ux">
                  <span class="ui">Graphic</span>
                </div>
                <div class="ui-designing">
                  <span class="ui-design">Design</span><span class="ui-ing">ing</span>
                </div>
              </div>
              <div class="ui-frame-4">
                <span class="ui-figma">• Figma</span><span class="ui-framer">• Canva</span>
              </div>
            </div>
          </div>
        )}
        {selectedSkill === "Soft Skills" && (
          <div className="skill-bg-image">
            <div class="soft-group">
              <div class="soft-group-2">
                <div class="soft-skills">
                  <span class="ui">Soft</span>
                </div>
                <div class="soft-skills-2">
                  <span class="ui-ing">Skills</span>
                </div>
              </div>
              <div class="soft-frame-4">
                <span class="ui-figma">• Teamwork</span><span class="ui-framer">• Leadership</span><span class="ui-framer">• Communication</span>
              </div>
            </div>
          </div>
        )}
        {selectedSkill === "Management" && (
          <div className="skill-bg-image">
            <div class="ui-group">
              <div class="ui-group-2">
                <div class="ui-ux">
                  <span class="ui">Management</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedSkill === "Creative Writing" && (
          <div className="skill-bg-image">
            <div class="ui-group">
              <div class="ui-group-2">
                <div class="ui-ux">
                  <span class="ui">Creative</span>
                </div>
                <div class="cr-writing">
                  <span class="ui-ing">Writing</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right side matrix */}
        <div className="skill-flex-row-bf">
          <div className={`skill-frame-6 ${selectedSkill ? "shifted-frame" : "centered-frame"}`}>
            <div className="skill-matrix">
              <div className="skill-matrix-flywheel">
                <div className="skill-skills-7">
                  <span className="skill-programming" onClick={() => handleSkillClick("Programming")}>
                    Programming
                  </span>
                  <div className="skill-flex-row">
                    <span className="skill-creative-writing" onClick={() => handleSkillClick("Creative Writing")}>
                      Creative Writing
                    </span>
                    <span className="skill-web-development" onClick={() => handleSkillClick("Web Development")}>
                      Web Development
                    </span>
                  </div>
                  <div className="skill-flex-row-8">
                    <span className="skill-database-technologies" onClick={() => handleSkillClick("Database Technologies")}>
                      Database Technologies
                    </span>
                    <span className="skill-management" onClick={() => handleSkillClick("Management")}>
                      Management
                    </span>
                  </div>
                  <div className="skill-flex-row-9">
                    <span className="skill-soft-skills" onClick={() => handleSkillClick("Soft Skills")}>
                      Soft Skills
                    </span>
                    <span className="skill-ui-ux-designing" onClick={() => handleSkillClick("UI/UX Designing")}>
                      UI/UX Designing
                    </span>
                  </div>
                  <span className="skill-graphic-designing" onClick={() => handleSkillClick("Graphic Designing")}>
                    Graphic Designing
                  </span>
                </div>
              </div>
            </div>
            <div className="skill-matrix-a"></div>
          </div>
        </div>
        <div className="skills-tooltip-container">
              <span className="info-icon">ℹ</span>
              <span className="tooltip-text">Click on the skills to know more</span>
            </div>
      </div>
      <div className="skill-group"></div>
      <div className="skill-sbg"></div>
    </div>
  );
};

export default Skill;
