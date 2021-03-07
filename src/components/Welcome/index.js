import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../App";
import "./index.css";

const dictionary = {
  en: {
    h1: "Anastasia Modina",
    h3: "You personal phsicologist",
  },
  ru: {
    h1: "Анастасия Модина",
    h3: "Ваш личный психолог",
  },
};

const Welcome = () => {
  const pageHeader = useRef();
  const [language] = useContext(LanguageContext);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };

      window.addEventListener("scroll", updateScroll);

      return () => {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

  return (
    <div className="Welcome">
      <div className="Welcome-back" ref={pageHeader} />
      <div className="Welcome-content">
        <h1>{dictionary[language].h1}</h1>
        <h3>{dictionary[language].h3}</h3>
      </div>
    </div>
  );
};

export default Welcome;
