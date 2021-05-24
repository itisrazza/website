import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Navbar title="Not Found" />
      <main>
        <div
          className="container"
          style={{
            textAlign: "center",
            padding: "2em 0",
          }}
        >
          <div
            style={{
              fontSize: "5em",
              display: "block",
              padding: "1em 0 0.5em",
            }}
          >
            🤔
          </div>
          <h1>Weird... It's not here</h1>
          <p>Whatever you're looking for isn't here.</p>
          <p>
            Try going <Link to="/">home</Link> and retrace your steps from
            there.
          </p>
        </div>
      </main>
    </>
  );
}
