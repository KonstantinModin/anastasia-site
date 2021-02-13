import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./index.css";

const dictionary = {
  en: {
    footer: "This is footer",
  },
  ru: {
    footer: "Это футер",
  },
};

const Footer = () => {
  const [language] = useContext(LanguageContext);

  return (
    <div className="Footer">
      <h2>{dictionary[language].footer}</h2>
      <h2>{dictionary[language].footer}</h2>
      <h2>{dictionary[language].footer}</h2>
      <h2>{dictionary[language].footer}</h2>
      <h2>{dictionary[language].footer}</h2>
    </div>
  );
};

export default Footer;
