import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./index.css";

const dictionary = {
  en: {
    h2: "My Contacts",
    adress: "USA 256187, Holywood, California, San-Jose, Amanta street 259",
    phone: "My cell-phone: +375-232-232-232",
    workingHours: "Working hours 10-00 a.m. till 04-00 p.m.",
  },
  ru: {
    h2: "Контактные данные",
    adress: "РФ 215351, Москва, ул. академика Королёва 15-123",
    phone: "Телефон: +375-232-232-232",
    workingHours: "Часы работы 08-00 до 18-00",
  },
};

const Contacts = () => {
  const [language] = useContext(LanguageContext);

  return (
    <div className="Contacts">
      <div className="Contacts-card">
        <h2>{dictionary[language].h2}</h2>
        <h5>{dictionary[language].adress}</h5>
        <h5>{dictionary[language].phone}</h5>
        <h5>{dictionary[language].workingHours}</h5>
      </div>
    </div>
  );
};

export default Contacts;
