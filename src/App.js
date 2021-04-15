import React from "react";
//Global Style
import GlobalStyle from "./Components/GlobalStyle";
//Pages
import AboutUS from "./Pages/AboutUs";
import Navbar from "./Components/NavComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalStyle />
      <AboutUS />
    </div>
  );
}

export default App;
