import React, { useState, useEffect } from "react";
import "../../../src/App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//fix
import Footer from "../../Components/Footer";
import NavbarButton from "../../Components/NavbarButton";
import Main from "./Main";
import Work from "./Work";
import Info from "./Info";
import MoreInfo from "../MoreInfo";
import Loading from "../../Components/Loading";
import About from "../About";

export default function MainWeb() {
  const [loading, setLoading] = useState(false); //true

  useEffect(() => {
    setTimeout(() => setLoading(false), 2800); //2800
  }, []);

  return (
    <>
      {loading === false ? (
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
            <Route path="/About">
              <About />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Loading />
      )}
    </>
  );
}
