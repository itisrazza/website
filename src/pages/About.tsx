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
            Hello there! My name is Raresh (or <i>Rareș</i>, or Razz). I'm a
            software enginerring student at Victoria University of Wellington in
            well... Wellington, New Zealand.
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

          <h1>About this website</h1>
          <p>
            This website was created in React and hosted on a $5/mo Linode VM.
          </p>
          <p>The typography I've used is as below:</p>
          <ul>
            <li>
              Body Text &middot; Libre Franklin (<i>Italic</i> &middot;{" "}
              <b>Bold</b> &middot;{" "}
              <b>
                <i>Bold Italic</i>
              </b>
              )
            </li>
            <li style={{ fontFamily: "var(--font-head-family)" }}>
              Heading Text &middot; Domine (<b>Bold</b>)
            </li>
            <li style={{ fontFamily: "var(--font-mono-family)" }}>
              Monospaced Text &middot; Courier Prime (<b>Bold</b>)
            </li>
          </ul>
          <p>
            The website code (and configuration files I'm comfortable sharing)
            are on GitHub for your enjoyment.
          </p>
        </div>
      </main>
    </>
  );
}
