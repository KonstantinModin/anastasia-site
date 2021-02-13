import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./index.css";

const dictionary = {
  en: {
    info: "This is Info",
  },
  ru: {
    info: "Это информационный блок",
  },
};

const Info = () => {
  const [language] = useContext(LanguageContext);

  return (
    <div className="Info">
      <h3>{dictionary[language].info}</h3>
      <h3>{dictionary[language].info}</h3>
      <h3>{dictionary[language].info}</h3>
      <h3>{dictionary[language].info}</h3>
      <h3>{dictionary[language].info}</h3>
      <h3>{dictionary[language].info}</h3>
      <h3>{dictionary[language].info}</h3>
      <h3>{dictionary[language].info}</h3>
    </div>
  );
};

export default Info;
