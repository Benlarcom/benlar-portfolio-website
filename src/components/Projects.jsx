import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section className="project-section">
      <h2 className="projects-heading">Leonard Makgopa</h2>
      <p className="projects-desc">View projects on GitHub.</p>

      <div className="slider-container">
        {projects.map((p) => (
          <div key={p.title} data-title={p.title} className="project-slide">
            <img src={p.img} alt={p.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
