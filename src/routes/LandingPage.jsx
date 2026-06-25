import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Hero from "../components/Hero.jsx";
import Interests from "../components/Interests.jsx";

export default function LandingPage() {
  return (
    <div className="page">
      <Header activePage="landing" />

      <main>
        <section className="hero">
          <Hero />

          <div className="ctaRow">
            <Link to="/projects" className="primaryBtn">
              PROJECTS
            </Link>
          </div>
        </section>

        

        <section id="about" className="about">
          <About />
        </section>

        <section id="projects" className="projects">
          <Projects />
        </section>

        <section id="interests" className="interests">
          <Interests />
        </section>

        <section id="contact" className="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}


