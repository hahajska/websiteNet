import React, { useState, useEffect } from "react";
import "../../../App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "../../Footer";
import MoreInfo from "../MoreInfo";

import NavbarButton from "../../NavbarButton";
import Main from "./Main";
import Work from "./Work";
import Info from "./Info";

import Loading from "../Loading";

export default function MainWeb() {
  const [loading, setLoading] = useState(true); //true

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
          </Switch>
        </Router>
      ) : (
        <Loading />
      )}
    </>
  );
}
