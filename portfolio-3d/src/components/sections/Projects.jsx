import { projects } from "../../constants/projects";

export default function Projects() {
  return (
    <section className="projects">
      {projects.map((p, i) => (
        <div key={i} className="project-card glass">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}
