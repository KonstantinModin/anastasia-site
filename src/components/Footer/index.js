import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./index.css";

const dictionary = {
  en: {
    footer: "Copyright©2021 Anastasia Modina.All Rights Reserved.",
  },
  ru: {
    footer: "©2021 Модина Анастасия",
  },
};

const Footer = () => {
  const [language] = useContext(LanguageContext);

  return (
    <div className="Footer">
      <div>{dictionary[language].footer}</div>
    </div>
  );
};

export default Footer;
