import { useEffect } from "react";
import Navbar from "../components/Navbar";
import links from "../data/links.json";

export default function About() {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <Navbar title="About" />
      <main>
        <div className="container">
          <p>
            Hello there! My name is Raresh (or Rareș, or Razz). I'm a software
            enginerring student at Victoria University of Wellington in well...
            Wellington, New Zealand.
          </p>
          <p>
            I'm interested in various curious things, like technology and
            building things, taking photos, designing stuff and reading a whole
            lot of Wikipedia.
          </p>

          <h1>Get in touch</h1>
          <p>
            Online, I've given myself the pseudonym of <code>thegreatrazz</code>
            . I'm on{" "}
            <a href={links.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>{" "}
            and other social media.
          </p>
          <p>
            You can also get in touch with me{" "}
            <a href="mailto:raresh@nistor.email">by email</a>.
          </p>

          <h1>This Website</h1>
          <p>
            This website is made with{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              React
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Pages
            </a>
            . You can grab a copy of the source code from{" "}
            <a
              href="https://github.com/thegreatrazz/website"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>Typography wise, I'm using{" "}
            <a href="https://rsms.me/inter/"
            target="_blank"
            rel="noreferrer">Inter</a>{" "}
            for text <a href="https://rsms.me/inter/lab/?feat-cv05=1&feat-cv11=1&feat-ss01=1&feat-ss03=1&varSlant=4.01&varfont=1" 
            target="_blank"
            rel="noreferrer">with a few tweaks</a> and <a href="https://www.jetbrains.com/lp/mono/"
              target="_blank"
              rel="noreferrer"><code>Jetbrains Mono</code>
              </a> for the code bits.</p>
        </div>
      </main>
    </>
  );
}
