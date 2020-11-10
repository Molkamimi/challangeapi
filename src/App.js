import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
