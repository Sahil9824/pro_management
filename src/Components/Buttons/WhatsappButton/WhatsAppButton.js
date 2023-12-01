import React from "react";
import style from "../WhatsappButton/style.module.scss";
import WhatsappLogo from "../../../Assets/Whatsapp.png";
import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <div
      className={style.wrap}
      onClick={() => window.open("https://web.whatsapp.com/", "_blank")}
    >
      <div className={style.imgWrap}>
        <Image
          src={WhatsappLogo}
          alt="logo"
          width={70}
          height={70}
          quality={100}
        />
      </div>
      <div className={style.buttonWrap}>
        <div className={style.textWrap}>
          <h3 className={style.textOne}>WhatsApp</h3>
          <h3 className={style.textTwo}>Get Started</h3>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
