// MainLayout.jsx
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Home from "./HomePage";
import About from "./AboutMe";
import Projects from "./Project";
import Skills from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

  const refs = {
    "/": useRef(null),
    "/about": useRef(null),
    "/projects": useRef(null),
    "/skills": useRef(null),
    "/contact": useRef(null),
  };

  useEffect(() => {
    const ref = refs[location.pathname];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div>
      <section ref={refs["/"]}><Home /></section>
      <section ref={refs["/about"]}><About /></section>
      <section ref={refs["/skills"]}><Skills /></section>
      <section ref={refs["/projects"]}><Projects /></section>
      <section ref={refs["/contact"]}><Contact /></section>
      <Footer />
    </div>
  );
};

export default MainLayout;
