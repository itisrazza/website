import { Link } from "react-router-dom";
import "./Home.css";
import projects from "../data/projects.json";
import ProjectButton from "../components/ProjectButton";
import { useEffect, useState } from "react";
import links from "../data/links.json";
import Icon from "../components/Icon";
import { TypewriterHeading } from "../components/TypewriterHeading";
import { MdArrowForward } from "react-icons/md";

const alternateNames = [
  "Raresh Nistor", // english
  "Rareș Nistor", // romanian
  "Razz Nistor", // english (alt)
];

export default function Home() {
  let [name, setName] = useState(alternateNames[0]);
  useEffect(() => {
    setName(alternateNames[(alternateNames.length * Math.random()) | 0]);
    window.scrollTo(0, 0);
  }, []);

  const projectPreview = () =>
    projects.sort(() => (Math.random() < 0.5 ? -1 : 1)).slice(0, 3);

  return (
    <div className="Home">
      <header>
        <div className="container">
          <TypewriterHeading>{name}</TypewriterHeading>
          <p>
            I'm a Wellingtonian software engineering student at{" "}
            <a
              href="//wgtn.ac.nz"
              target="_black"
              rel="noreferrer"
              title="Victoria University of Wellington"
            >
              VUW
            </a>
            . I work on <Link to="/projects">various projects</Link> and{" "}
            <a href={links.notion} target="_blank" rel="noreferrer">
              write notes
            </a>{" "}
            every now and then.
          </p>
        </div>
      </header>
      <main>
        <div className="container">
          <div style={{ gridColumn: 3, gridRow: 1 }}>
            <h2>
              <span className="hide-small">Links</span>
            </h2>
            <div className="link-stack">
              <Link to="/about">About</Link>
              <a
                href="//notion.so/thegreatrazz/d5024bf1e6344c49a561f7a4ff7fe769?v=57a969aad0924012961ca3b9e214ae16"
                target="_black"
                rel="noreferrer"
              >
                Notes
              </a>
              <a
                href="//twitter.com/thegreatrazz"
                target="_black"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                href="//github.com/thegreatrazz"
                target="_black"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="mailto:raresh@nistor.email"
                target="_black"
                rel="noreferrer"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            <h2 style={{ gridColumn: 1, gridRow: 1 }}>Projects</h2>
            {projectPreview().map((project) => (
              <ProjectButton
                key={project.name}
                name={project.name}
                link={project.link}
                description={project.description}
              />
            ))}
            <br />
            <Link to="/projects">
              All Projects <Icon icon="arrowRight" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
