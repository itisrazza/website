import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProjectButton from "../components/ProjectButton";
import links from "../data/links.json";
import projects from "../data/projects.json";
import "./Projects.css";

export default function Projects() {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <Navbar title="Projects" />
      <main>
        <div className="container">
          <p>
            Most of my open source projects are available on{" "}
            <a href={links.github}>GitHub</a>.
          </p>
          <div className="projects">
            {projects.map((project) => (
              <ProjectButton
                name={project.name}
                link={project.link}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
