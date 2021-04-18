import React from "react";
//Global Style
import GlobalStyle from "./Components/GlobalStyle";
//Pages
import AboutUs from "./Pages/AboutUs";
import Navbar from "./Components/NavComponent";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import MovieDetail from "./Pages/MovieDetails";

import { Switch, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />

      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* ------------------------------ */}
          <Route path="/" exact>
            <AboutUs />
          </Route>
          {/* ------------------------------ */}
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          {/* ------------------------------ */}
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
