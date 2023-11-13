import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Contact from "./components/Contact";
import WebCamPage from "./components/WebCam";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/webCam" component={WebCamPage} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
