import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../App";
import ruFlag from "./ru.svg";
import enFlag from "./en.svg";
import "./index.css";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    const scrollHandler = () => {
      setShowMenu(window.scrollY < 100);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const languageButtonHandler = ({ target: { name } }) => {
    setLanguage(name);
  };

  return (
    <div className={`Menu${showMenu ? " open" : ""}`}>
      <h5>Menu</h5>
      <div className="Menu-languages">
        <img
          src={enFlag}
          name="en"
          alt="En-flag"
          onClick={languageButtonHandler}
        />
        <img
          src={ruFlag}
          name="ru"
          alt="Ru-flag"
          onClick={languageButtonHandler}
        />
      </div>
    </div>
  );
};

export default Menu;
