import React from "react";
//Global Style
import GlobalStyle from "./Components/GlobalStyle";
//Pages

import AboutUs from "./Pages/AboutUs";
import Navbar from "./Components/NavComponent";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import MovieDetail from "./Pages/MovieDetails";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
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
    </div>
  );
}

export default App;
