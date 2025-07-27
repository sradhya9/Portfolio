import React, { useState } from "react";
import "../styles/project.css";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const allProjects = [
    {
      id: 1,
      title: "ShareNSplit Website",
      category: "Design",
      description: "A modern web application design that allows users to split and track shared expenses efficiently.",
      tech: "Figma",
      linkType: "Figma",
      linkUrl: "https://www.figma.com/proto/YhInTgg3GKkTBcVt6wBa5L/SN--Copy-?page-id=62%3A552&node-id=255-1722&p=f&viewport=481%2C212%2C0.18&t=tLoSkmKmRGysLloA-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=255%3A1722",
      imageClass: "project-image-pop",
      jsx: (
        <div className="project-frame-7">
          <div className="project-image"></div>
          <div className="project-frame-8">
            <span className="project-top-hundred-designers">
              ShareNSplit Website
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "CSI Website",
      category: "Design",
      description: "A responsive and informative website designed for the Computer Society of India Student Branch at MBCET.",
      tech: "Figma",
      linkType: "Figma",
      linkUrl: "https://www.figma.com/proto/35fClOk3mJn50kB7KzdTKt/Website-Approved?page-id=0%3A1&node-id=20-10&p=f&viewport=2341%2C363%2C0.15&t=IGzCazLcjxN7UVEi-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=20%3A10",
      imageClass: "project-image-a-pop",
      jsx: (
        <div className="project-frame-9">
          <div className="project-image-a"></div>
          <div className="project-frame-b">
            <span className="project-mulearn-campus-chapter">
              CSI Website
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "KBFC Website Redesign",
      category: "Design",
      description: "A modern redesign of the Kerala Blasters FC official website focusing on improved visual aesthetics, responsive layout, and user engagement.",
      tech: "Figma",
      linkType: "Figma",
      linkUrl: "https://www.figma.com/proto/Up3DSib1cwpjbP5pMpYm5k/Untitled?page-id=0%3A1&node-id=8-935&viewport=970%2C714%2C0.07&t=JyVD4UcOpqd4Quq1-1&scaling=scale-down-width&content-scaling=fixed",
      imageClass: "project-name-pop",
      jsx: (
        <div className="project-frame-c">
          <div className="project-name"></div>
          <div className="project-frame-d">
            <span className="project-delivery-application">
              KBFC Website Redesign
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Profit Management Application",
      category: "Dev",
      description: "MaxProfit is a full-fledged profitability and resource management system designed to track project-wise financial performance.",
      tech: "React Python Flask MySQL",
      linkType: "GitHub",
      linkUrl: "https://github.com/sradhya9/_.MaxProfit._.git",
      imageClass: "project-name-f-pop",
      jsx: (
        <div className="project-frame-e">
          <div className="project-name-f"></div>
          <div className="project-frame-10">
            <span className="project-residential-cleaner-app">
              Profit Management Application
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "ShareNSplit",
      category: "Dev",
      description: "A modern  application design that allows users to split and track shared expenses efficiently.",
      tech: "HTML, CSS",
      linkType: "GitHub",
      linkUrl: "https://github.com/sradhya9/sns",
      imageClass: "project-image-12-pop",
      jsx: (
        <div className="project-frame-11">
          <div className="project-image-12"></div>
          <div className="project-frame-13">
            <span className="project-mulearn-home-website-redesign">
              ShareNSplit
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "CSI Website",
      category: "Dev",
      description: "A responsive and informative website designed for the Computer Society of India Student Branch at MBCET.",
      tech: "React, CSS, JavaScript",
      linkType: "Live",
      linkUrl: "https://csi-sb-mbcet.vercel.app/",
      imageClass: "project-name-15-pop",
      jsx: (
        <div className="project-frame-14">
          <div className="project-name-15"></div>
          <div className="project-frame-16">
            <span className="project-banking-application">
              CSI Website
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Vibe Chat Application",
      category: "Design",
      tech: "Figma",
      description: "A UI/UX design project replicating the core interface of Instagram, focusing on modern aesthetics, navigation, and user engagement.",
      linkType: "Figma",
      linkUrl: "https://www.figma.com/proto/usnLKjxnFhXjRMASCDr9fc/UI-UX?page-id=17%3A28&node-id=22-28&p=f&viewport=5211%2C4281%2C0.21&t=h0ewc1RG1vQzuSmS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=22%3A1818",
      imageClass: "project-name-18-pop",
      jsx: (
        <div className="project-frame-17">
          <div className="project-name-18"></div>
          <div className="project-frame-19">
            <span className="vibe-chat-application">
              Vibe Chat Application
            </span>
          </div>
        </div>
      ),
    },

    {
      id: 8,
      title: "Bill Splitting Application",
      category: "Dev",
      description: "A Python-based solution to divide bills among group members, calculating exact contributions.",
      tech: "Python",
      linkType: "GitHub",
      linkUrl: "https://github.com/sradhya9/ShareNSplit.git",
      imageClass: "project-name-19-pop",
      jsx: (
        <div className="project-frame-17">
          <div className="project-name-19"></div>
          <div className="project-frame-19">
            <span className="vibe-chat-application">
              Bill Splitting Application
            </span>
          </div>
        </div>
      ),
    },

    {
      id: 9,
      title: "Scientic Calculator",
      category: "Dev",
      description: "A Python GUI application capable of performing both basic and advanced scientific calculations.",
      tech: "Python Tkinter",
      linkType: "GitHub",
      linkUrl: "https://github.com/sradhya9/Calculator.git",
      imageClass: "project-name-20-pop",
      jsx: (
        <div className="project-frame-17">
          <div className="project-name-20"></div>
          <div className="project-frame-19">
            <span className="vibe-chat-application">
              Scientic Calculator
            </span>
          </div>
        </div>
      ),
    },

    {
      id: 10,
      title: "Dental Management Application",
      category: "Dev",
      description: "A centralized web-based system designed for managing dental clinic operations.",
      tech: "TypeScript, Python, JavaScript, MySQL",
      linkType: "GitHub",
      linkUrl: "https://github.com/sradhya9/dental-carecraft-hub-main.git",
      imageClass: "project-name-21-pop",
      jsx: (
        <div className="project-frame-17">
          <div className="project-name-21"></div>
          <div className="project-frame-19">
            <span className="vibe-chat-application">
              Dental Management Application
            </span>
          </div>
        </div>
      ),
    },

    {
      id: 11,
      title: "Event Registartion Application",
      category: "Dev",
      description: "A desktop-based application that facilitates seamless event sign-ups and participant management.",
      tech: "Java Swing",
      linkType: "GitHub",
      linkUrl: "https://github.com/sradhya9/EventRegSystem.git",
      imageClass: "project-name-22-pop",
      jsx: (
        <div className="project-frame-17">
          <div className="project-name-22"></div>
          <div className="project-frame-19">
            <span className="vibe-chat-application">
              Event Registartion Application
            </span>
          </div>
        </div>
      ),
    },

    {
      id: 12,
      title: "Bank Management Application",
      category: "Dev",
      description: "A command-line application to manage banking transactions like deposits, withdrawals, and balance inquiries.",
      tech: "Python FastAPI",
      linkType: "GitHub",
      linkUrl: "https://github.com/sradhya9/Bank_management.git",
      imageClass: "project-name-23-pop",
      jsx: (
        <div className="project-frame-17">
          <div className="project-name-23"></div>
          <div className="project-frame-19">
            <span className="vibe-chat-application">
              Bank Management Application
            </span>
          </div>
        </div>
      ),
    },

  ];

  {
    selectedProject && (
      <div className="project-modal">
        <div className="project-modal-content">
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <button onClick={() => setSelectedProject(null)}>Close</button>
        </div>
      </div>
    )
  }

  const filteredProjects = allProjects.filter(
    (project) =>
      (selectedCategory === "All" || project.category === selectedCategory) &&
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDynamicHeight = () => {
    const count = filteredProjects.length;
    if (count <= 3) return "500px";
    if (count <= 6) return "750px";
    if (count <= 9) return "1050px";
    return "1350px";
  };

  return (
    <div
      className="project-main-container"
      style={{ height: getDynamicHeight() }}
    >
      <div className="project-bg" />

      <div className="project-frame-1">
        <button
          className={`project-frame-2 ${selectedCategory === "All" ? "active" : ""}`}
          onClick={() => handleCategoryClick("All")}
        >
          <span className={`project-all ${selectedCategory === "All" ? "active-text" : ""}`}>
            All
          </span>
        </button>

        <button
          className={`project-frame-3 ${selectedCategory === "Dev" ? "active" : ""}`}
          onClick={() => handleCategoryClick("Dev")}
        >
          <span className={`project-dev ${selectedCategory === "Dev" ? "active-text" : ""}`}>
            Dev
          </span>
        </button>

        <button
          className={`project-frame-4 ${selectedCategory === "Design" ? "active" : ""}`}
          onClick={() => handleCategoryClick("Design")}
        >
          <span className={`project-design ${selectedCategory === "Design" ? "active-text" : ""}`}>
            Design
          </span>
        </button>

        <div className="project-frame-5">
          <input
            type="text"
            className="project-search-bar"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="project-frame-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)}>
              {project.jsx}
            </div>
          ))
        ) : (
          <div className="no-results">No matching projects found.</div>
        )}
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✖</button>

            <div className="modal-image-frame">
              <div className={selectedProject.imageClass}></div>
            </div>

            <div className="modal-text-content">
              <div className="modal-header-row">
                <h2 className="modal-title">{selectedProject.title}</h2>
                {selectedProject.linkUrl && (
                  <a
                    href={selectedProject.linkUrl}
                    className="modal-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedProject.linkType === "GitHub"
                      ? "View on GitHub"
                      : selectedProject.linkType === "Figma"
                        ? "View on Figma"
                        : "View Live"}
                  </a>
                )}

              </div>
              {selectedProject.tech && (
                <div className="modal-tech-line">
                  <span className="modal-tech-label">Tech Stack:</span>
                  <span className="modal-tech-used">{selectedProject.tech}</span>
                </div>
              )}
              {selectedProject.description && (
                <p className="modal-description">{selectedProject.description}</p>
              )}
            </div>
          </div>
        </div>
      )}





    </div>
  );
};

export default Project;