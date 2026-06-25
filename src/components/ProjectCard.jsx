import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="projectCard">
      {project.image?.src ? (
        <img
          src={project.image.src}
          alt={project.image.alt || project.title}
          className="projectImage"
          loading="lazy"
        />
      ) : null}

      <h3 className="projectTitle">{project.title}</h3>
      <p className="projectMeta">{project.yearCategory}</p>
      <p className="projectSummary">{project.summary}</p>

      <div className="projectTech">
        {(project.tech || []).map((t) => (
          <span key={t} className="techTag">
            {t}
          </span>
        ))}
      </div>

      {(project.links?.github || project.links?.demo) ? (
        <div className="projectLinks">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              GitHub
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              Demo
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
