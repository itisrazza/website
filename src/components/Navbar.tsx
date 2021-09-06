import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./Navbar.css";
import { MdArrowBack } from "react-icons/md";

interface NavbarProps {
  title: string;
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className="Navbar">
      <div className="container">
        <Link to="/" className="navbar-home">
          <MdArrowBack size={24} />
        </Link>
        <span className="navbar-title">{props.title}</span>
      </div>
    </div>
  );
}
