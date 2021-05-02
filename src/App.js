import React, { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import Main from "./Components/Main";
import Work from "./Components/Work";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoreInfo from "./Components/MoreInfo";
import NavbarButton from "./Components/NavbarButton";
import Loading from "./Components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

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

export default App;
