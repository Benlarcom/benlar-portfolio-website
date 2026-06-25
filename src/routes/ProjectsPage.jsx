import React, { useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import projects from "../data/projects.json";
import ExtraCurriculumMoreProjects from "../components/ExtraCurriculumMoreProjects.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function ProjectsPage() {
  const [category, setCategory] = useState("2024");

  const extraProjects = useMemo(
    () => projects.filter((p) => p.yearCategory === "Extra-Curriculum"),
    []
  );

  const filteredYearProjects = useMemo(() => {
    if (category === "currentYearProjects" || category === "More Projects")
      return [];
    return projects.filter((p) => p.yearCategory === category);
  }, [category]);

  const heading =
    category === "currentYearProjects" || category === "More Projects"
      ? "More Projects"
      : `Projects completed in the year ${category}`;

  const showExtra = category === "currentYearProjects" || category === "More Projects";

  return (
    <div className="page">
      <Header
        activePage="projects"
        dropdownValue={category}
        onDropdownChange={setCategory}
      />

      <main>
        {showExtra ? (
          <ExtraCurriculumMoreProjects projects={extraProjects} />
        ) : (
          <section className="projects">
            <a href="#developer-portfolio" className="backLink">
              Back to Developer Portfolio
            </a>

            <h2><i className="bi bi-arrow-right headingIcon" aria-hidden="false"></i> {heading}</h2>

            <div className="projectsGrid">
              {filteredYearProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
