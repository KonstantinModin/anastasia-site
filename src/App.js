import React, { useState, useEffect } from "react";

import Menu from "./components/Menu";
import Welcome from "./components/Welcome";
import Info from "./components/Info";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export const LanguageContext = React.createContext();

// TODO: language from browser if ru -> ru || ru
const defaultLanguage = "en";

function App() {
  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");

    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
  });

  useEffect(() => {
    window.localStorage.setItem("lang", language);
  }, [language]);

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
