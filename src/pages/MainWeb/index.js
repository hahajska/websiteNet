import React, { useState, useEffect } from "react";
import "../../../src/App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";

//fix
import Footer from "../../Components/Footer";
import NavbarButton from "../../Components/NavbarButton";
import Main from "./Main";
import Work from "./Work";
import Info from "./Info";
import Loading from "../../Components/Loading";
import About from "../About";
import Contacts from "../Contacts";

export default function MainWeb() {
  const [loading, setLoading] = useState(false); //true

  useEffect(() => {
    setTimeout(() => setLoading(false), 2800); //2800
  }, []);

  //return top positon when router
  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  }
  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <>
      {loading === false ? (
        <Router>
          <NavbarButton />
          <Switch>
            <Route path="/" exact>
              <ScrollToTop>
                <Main />
                <Info />
                <Work />
                <Footer />
              </ScrollToTop>
            </Route>
            <Route path="/Contacts">
              <ScrollToTop>
                <Contacts />
              </ScrollToTop>
            </Route>
            <Route path="/About">
              <ScrollToTop>
                <About />
              </ScrollToTop>
            </Route>
          </Switch>
        </Router>
      ) : (
        <Loading />
      )}
    </>
  );
}
