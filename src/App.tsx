import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={() => <div />} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
