import React from "react";

import musicHobby from "../assets/images/benlar-yfms-icon.jpg";
import chessHobby from "../assets/images/hobby2.jpg";
import aiWebDesignTraining from "../assets/images/AI-web-design-training.png";
import az900Certificate from "../assets/images/az-900_CertificateOfCompletion.png";
import mlCertificate from "../assets/images/ml-certificate.png";
import ndgLinuxEssentialsCertificate from "../assets/images/ndg-linux-essentials-cisco.png";
import ccnav7ITNCisco from "../assets/images/ccnav7-itn-cisco.png";
import sapABAPCertTraining from "../assets/images/SAP-ABAP-Certification-Training.png";
import introToMCP from "../assets/images/ITN-to-MCP.png";

export default function Interests() {
  const linkedInUrl = "https://www.linkedin.com/in/leonard-makgopa";

  const skills = [
    {
      title: "AI Web Design Training",
      imgSrc: aiWebDesignTraining,
      alt: "AI Web Design Training",
      completed: "2026",
      organization: "Mayerfield Consulting Training",
      purpose: "Training",
    },
    {
      title: "Introduction to Model Contect Protocol",
      imgSrc: introToMCP,
      alt: "Introduction to MCP",
      completed: "2026",
      organization: "Anthropic",
      purpose: "Self-learning",
    },
    {
      title: "ISTQB Foundation Level (CTFL) V4",
      imgSrc: "",
      alt: "ISTQB Foundation Level (CTFL) V4",
      completed: "2025",
      institution: "Udemy",
      purpose: "Self-learning",
    },
    {
      title: "AZ-900: Microsoft Azure Fundamentals Certification",
      imgSrc: az900Certificate,
      alt: "AZ-900: Microsoft Azure Fundamentals Certification",
      completed: "2025",
      institution: "Udemy",
      purpose: "Self-learning",
    },
    {
      title: "SAP ABAP Certification Training",
      imgSrc: sapABAPCertTraining,
      alt: "SAP ABAP Certification Training",
      completed: "2025",
      institution: "Udemy",
      purpose: "Self-learning",
    },
    {
      title: "Blazor Deep Dive - From Beginner to Advanced in .NET 8",
      imgSrc: "",
      alt: "Blazor Deep Dive - From Beginner to Advanced in .NET 8",
      completed: "2025",
      institution: "Udemy",
      purpose: "Self-learning",
    },
    {
      title: "CCNAv7: Introduction to Networks",
      imgSrc: ccnav7ITNCisco,
      alt: "CCNAv7: Introduction to Networks",
      completed: "2021",
      institution: "CPUT",
      purpose: "Cisco - short-course",
    },
    {
      title: "NDG Linux Networks",
      imgSrc: ndgLinuxEssentialsCertificate,
      alt: "NDG Linux Networks",
      completed: "2020",
      institution: "CPUT",
      purpose: "Cisco - short-course",
    },
    {
      title: "Machine Learning with Python: Foundations",
      imgSrc: mlCertificate,
      alt: "Machine Learning with Python: Foundations certificate",
      completed: "2022",
      institution: "Udemy",
      purpose: "Self-learning",
    },
  ];

  const [viewMode, setViewMode] = React.useState("grid");

  return (
    <section className="interests-section">
      <h2 className="interests-title">
        Into LeonardMDev <span className="candidate-subtitle">achievements</span>
      </h2>

      <p className="interests-description">
        I bring fresh ideas and a forward-looking mindset, and I’m 
        proactive about experimenting, learning quickly, and 
        continuously developing my skills.
      </p>

      <div className="interests-controls" aria-label="Interests view toggle">
        <h3 className="interests-heading">
          Self-learning <span className="candidate-subtitle">achievements</span>
        </h3>

        <div className="interests-view-controls">
          <button
            type="button"
            className={`interests-view-btn ${viewMode === "grid" ? "is-active" : ""}`}
            onClick={() => setViewMode("grid")}
            aria-label="View as grid"
          >
            <i className="bi bi-grid-3x3" />
          </button>

          <button
            type="button"
            className={`interests-view-btn ${viewMode === "list" ? "is-active" : ""}`}
            onClick={() => setViewMode("list")}
            aria-label="View as list"
          >
            <i className="bi bi-list-nested" />
          </button>
        </div>
      </div>

      <div className={`interests-grid ${viewMode === "list" ? "view-list" : "view-grid"}`}>
        {skills.map((s, idx) => (
          <article className="interest-card" key={idx} data-interest>
            <h4 className="interest-card-title">{s.title}</h4>

            {/* GRID media */}
            <div className="interest-card-mediaGrid" aria-label={`${s.title} media`}>
              {s.imgSrc ? (
                <img className="interest-card-img" src={s.imgSrc} alt={s.alt} />
              ) : (
                <div className="interest-card-placeholder" aria-label={s.alt} />
              )}
            </div>

            {/* LIST details */}
            <div className="interest-card-mediaList" aria-label={`${s.title} details`}>
              {/* One-line statement: left | center | right */}
              <div className="interest-meta-line">
                <span className="interest-meta-left">
                  Date completed <span className="interest-meta-year">{s.completed}</span>
                </span>

                <span className="interest-meta-center">
                  Organization{" "}
                  <span className="orgName">{s.organization ?? s.institution ?? "-"}</span>
                </span>

                <span className="interest-meta-right">
                  Purpose <span>{s.purpose}</span>
                </span>
              </div>

              {/* icon + LinkedIn bottom-left */}
              <a className="interest-card-link interest-card-linkList" href={linkedInUrl} target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin" /> LinkedIn
              </a>
            </div>

            {/* LinkedIn for grid mode only */}
            <a className="interest-card-link interest-card-linkGrid" href={linkedInUrl} target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin" /> LinkedIn
            </a>
          </article>
        ))}
      </div>

      <h3 className="interests-heading hobbies-heading">
        Hobbies <i className="bi bi-link" /> <i className="bi bi-share" />
      </h3>

      <div className="interests-hobbies-grid">
        <article className="interest-card">
          <h4 className="interest-card-title">Chess @benlarpresentation on chess.com</h4>
          <img className="interest-card-img" src={chessHobby} alt="Chess" />
        </article>

        <article className="interest-card">
          <h4 className="interest-card-title">
            Compiling Music Playlists - Your Fav Music Selector<span> YFMS</span>
          </h4>
          <img className="interest-card-img" src={musicHobby} alt="Playlist compilation" />
        </article>
      </div>
    </section>
  );
}
