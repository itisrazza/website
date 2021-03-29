import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  title: string;
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className="Navbar">
      <div className="container">
        <Link to="/" className="navbar-home">
          🡐
        </Link>
        <span className="navbar-title">{props.title}</span>
      </div>
    </div>
  );
}
