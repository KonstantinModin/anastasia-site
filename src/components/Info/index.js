import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import dictionary from "./dictionary";
import "./index.css";

const Info = () => {
  const [language] = useContext(LanguageContext);

  return (
    <div className="Info">
      {dictionary[language].map(({ header, p }) => (
        <div className="Info-Card" key={header}>
          <div className="Info-Card-Header">
            <h3>{header}</h3>
          </div>
          <p>{p}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
