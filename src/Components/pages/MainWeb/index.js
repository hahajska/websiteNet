import React, { useState, useEffect } from "react";
import "../../../App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../../Main";
import Info from "../../Info";
import Work from "../../Work";
import Footer from "../../Footer";
import MoreInfo from "../MoreInfo";

import Loading from "../../Loading";
import NavbarButton from "../../NavbarButton";

export default function MainWeb() {
  const [loading, setLoading] = useState(false); //true

  useEffect(() => {
    setTimeout(() => setLoading(false), 800); //2800
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
