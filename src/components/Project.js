import React, { useState } from "react";
import "../styles/project.css";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const allProjects = [
    {
      id: 1,
      title: "ShareNSplit Website",
      category: "Design",
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
      title: "Kerala Blasters Website Redeign",
      category: "Design",
      jsx: (
        <div className="project-frame-c">
          <div className="project-name"></div>
          <div className="project-frame-d">
            <span className="project-delivery-application">
              Kerala Blasters Website Redeign
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Profit Management Application",
      category: "Dev",
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
            <React.Fragment key={project.id}>{project.jsx}</React.Fragment>
          ))
        ) : (
          <div className="no-results">No matching projects found.</div>
        )}
      </div>
    </div>
  );
};

export default Project;
