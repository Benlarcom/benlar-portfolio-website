import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown.jsx";
import "../components/He.css"

export default function He({ dropdownValue, onDropdownChange }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const activePage = useMemo(
    () => (pathname === "/projects" ? "projects" : "landing"),
    [pathname]
  );

  const isLanding = activePage === "landing";
  const showProjectsDropdown = activePage === "projects";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="headerInner">
        <div className="brand">
          <span className="brandIcon" aria-hidden="true">
            <img src="/favicon.svg" alt="" />
          </span>
          <span className="brandText">LeonardMDev.</span>
        </div>

        {/* Mobile right side: menu icon + Get Started */}
        <div className="headerRightMobile">
          <button
            type="button"
            className="menuIconBtn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menuIcon" aria-hidden="true">☰</span>
          </button>

          <Link
            to="/projects"
            className="getStartedBtn"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>

        {/* Desktop nav */}
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
            About us
          </Link>

          {showProjectsDropdown ? (
            <div className="navDropdownWrap">
              <button className="navLink navDropdownLabel" type="button">
                Projects
              </button>

              <CategoryDropdown
                value={dropdownValue}
                onChange={(v) => onDropdownChange?.(v)}
                options={["2021", "2022", "2023", "2024", "currentYearProjects"]}
              />
            </div>
          ) : (
            <Link
              to="/projects"
              className="navLink"
              onClick={closeMenu}
            >
              Projects
            </Link>
          )}

          <Link
            to="/portfolio-website-landing-page#contact"
            className="navLink"
          >
            Contact us
          </Link>
        </nav>

        {/* Desktop Get Started */}
        <div className="headerRight">
          <Link to="/projects" className="getStartedBtn" onClick={closeMenu}>
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
        <nav className="mobileNav" aria-label="Mobile primary">
          <Link
            to="/portfolio-website-landing-page"
            className={`navLink ${isLanding ? "current" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/portfolio-website-landing-page#about"
            className="navLink"
            onClick={closeMenu}
          >
            About us
          </Link>

          <Link
            to="/projects"
            className="navLink"
            onClick={closeMenu}
          >
            Projects
          </Link>

          <Link
            to="/portfolio-website-landing-page#contact"
            className="navLink"
            onClick={closeMenu}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
