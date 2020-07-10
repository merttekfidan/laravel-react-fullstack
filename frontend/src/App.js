import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Todo from "./components/pages/Todo";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/todo" component={Todo} />
      </Router>
    </React.Fragment>
  );
}

export default App;
