import "./Footer.css";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <div className="container">&copy; 2016 - {currentYear} Raresh Nistor</div>
    </footer>
  );
}
