import React from "react";
import "./App.scss";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import Main from "./Components/Main";
import Work from "./Components/Work";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoreInfo from "./Components/MoreInfo";
import NavbarButton from "./Components/NavbarButton";

function App() {
  return (
    <Router>
      <NavbarButton />
      <Switch>
        <Route path="/" exact>
          <Main />
          <Info />
          <Work />
          <Footer />
        </Route>
        <Route path="/MoreInfo">
          <MoreInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
