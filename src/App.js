import "./App.css";

import Navbar from "./component/Navbar";
import Y1986 from "./page/Y1986";
import Homme from "./page/Home";
import Contact from "./page/Contact";

import { Switch, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homme} />
        <Route path="/1986" component={Y1986} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
