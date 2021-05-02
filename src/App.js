import React from "react";
import MainWeb from "./pages/MainWeb";

function App() {
  return (
    <>
      <MainWeb />
    </>
  );
}

export default App;
/* function App() {
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

export default App;
 */
