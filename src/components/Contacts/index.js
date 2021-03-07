import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import whatsappIcon from "./whatsappIcon.png";
import telegramIcon from "./telegramIcon.png";
import viberIcon from "./viberIcon.png";
import "./index.css";

const dictionary = {
  en: {
    h2: "Contacts for appointment and consultations:",
    phone: "+34 640-702-535",
  },
  ru: {
    h2: "Контакты для записи и консультаций:",
    phone: "+34 640-702-535",
  },
};

const Contacts = () => {
  const [language] = useContext(LanguageContext);

  return (
    <div className="Contacts">
      <div className="Contacts-card">
        <h2>{dictionary[language].h2}</h2>
        <div className="Contacts-phone">
          <a href="tel:+34640702535" target="_blank" rel="noopener noreferrer">
            {dictionary[language].phone}
          </a>
        </div>
        <div className="Contacts-phoneIcons">
          <a
            href="whatsapp://send?phone=+34640702535"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappIcon} alt="whatsappIcon" />
          </a>
          <a
            href="https://t.me/modinaspain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegramIcon} alt="telegramIcon" />
          </a>
          <a
            href="viber://chat/?number=%2B34640702535"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={viberIcon} alt="viberIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
