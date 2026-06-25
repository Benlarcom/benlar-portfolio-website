import React from "react";
import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown.jsx";

export default function Header({
  activePage = "landing",
  dropdownValue,
  onDropdownChange,
}) {
  const isLanding = activePage === "landing";
  const showProjectsDropdown = activePage === "projects";

  return (
    <header className="header">
      <div className="headerInner">
        <div className="brand">
          <span className="brandIcon" aria-hidden="true">
            <img src="/favicon.svg" alt="" />
          </span>
          <span className="brandText">LeonardMDev.</span>
        </div>

        <nav className="nav navCenter" aria-label="Primary">
          <Link
            to="/portfolio-website-landing-page"
            className={`navLink ${isLanding ? "current" : ""}`}
          >
            Home
          </Link>

          <Link
            to="/portfolio-website-landing-page#about"
            className="navLink"
          >
            About
          </Link>

          {showProjectsDropdown ? (
            <div className="navDropdownWrap">
              <button className="navLink navDropdownLabel" type="button">
                Projects
              </button>

              <CategoryDropdown
                value={dropdownValue}
                onChange={(v) => onDropdownChange?.(v)}
                options={["2021", "2022", "2023", "2024", "2025-2026"]}
              />
            </div>
          ) : (
            <Link to="/projects" className="navLink">
              Projects
            </Link>
          )}

          <Link
            to="/portfolio-website-landing-page#contact"
            className="navLink"
          >
            Contact
          </Link>
        </nav>

        <div className="headerRight">
          <Link to="/projects" className="getStartedBtn">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
