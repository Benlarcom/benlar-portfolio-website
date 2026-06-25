import React from "react";
import BackLink from "../components/BackLink.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function ExtraCurriculumMoreProjects({ projects = [] }) {
  return (
    <section id="extra-curriculum-more-projects" className="projects">
      <BackLink />
      <h2>More Projects</h2>

      <div className="projectsGrid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
