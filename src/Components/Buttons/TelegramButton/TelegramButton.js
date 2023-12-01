import React from "react";
import style from "../TelegramButton/style.module.scss";
import TelegramLogo from "../../../Assets/Telegram.png";
import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <div
      className={style.wrap}
      onClick={() => window.open("https://web.telegram.org/", "_blank")}
    >
      <div className={style.imgWrap}>
        <Image
          src={TelegramLogo}
          alt="logo"
          width={70}
          height={70}
          quality={100}
        />
      </div>
      <div className={style.buttonWrap}>
        <div className={style.textWrap}>
          <h3 className={style.textOne}>Telegram Channel</h3>
          <h3 className={style.textTwo}>Join Results Channel</h3>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
