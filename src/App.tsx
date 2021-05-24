import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/" exact={true} component={Home} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
