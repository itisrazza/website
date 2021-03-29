import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./Navbar.css";

interface NavbarProps {
  title: string;
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className="Navbar">
      <div className="container">
        <Link to="/" className="navbar-home">
          <Icon icon="arrowUp" />
        </Link>
        <span className="navbar-title">{props.title}</span>
      </div>
    </div>
  );
}
