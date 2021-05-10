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
import HomeButton from "../../Components/HomeButton";

export default function MainWeb() {
  const [loading, setLoading] = useState(true); //true

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
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <NavbarButton />
          <Switch>
            <Route exact path="/">
              <ScrollToTop>
                <Main />
                <Info />
                <Work />
                <Footer />
              </ScrollToTop>
            </Route>
            <Route path="/Contacts">
              <ScrollToTop>
                <HomeButton />
                <Contacts />
              </ScrollToTop>
            </Route>
            <Route path="/About">
              <ScrollToTop>
                <HomeButton />
                <About />
              </ScrollToTop>
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}
