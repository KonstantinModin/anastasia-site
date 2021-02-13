import React, { useState } from "react";

import Menu from "./components/Menu";
import Welcome from "./components/Welcome";
import Info from "./components/Info";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import "./App.css";

export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <LanguageContext.Provider value={[language, setLanguage]}>
        <Menu />
        <Welcome />
        <Info />
        <Contacts />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
