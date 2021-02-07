import React from "react";

import Menu from "./components/Menu";
import Welcome from "./components/Welcome";
import Info from "./components/Info";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Welcome />
      <Info />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
