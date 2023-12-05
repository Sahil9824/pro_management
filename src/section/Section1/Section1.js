import React from "react";
import style from "../..//section/Section1/section1.module.scss";
import WhatsAppButton from "../../Components/Buttons/WhatsappButton/WhatsAppButton";
import TelegramButton from "../../Components/Buttons/TelegramButton/TelegramButton";
import Image from "next/image";
import BackgroundImageDesktop from "../../Assets/Section1BgNew.png";
import BackgroundImageMobile from "../../Assets/Section1BgMobileNew.png";
import { Header } from "../Header/Header";

export const Section1 = () => {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.backgroundWrap}>
        <Image
          src={BackgroundImageDesktop}
          className={style.backgroundImageDesktop}
          quality={100}
          style={{ width: "100%", height: 918 }}
          priority={true}
        />
        <Image
          src={BackgroundImageMobile}
          className={style.backgroundImageMobile}
          quality={100}
          style={{ width: "100%", height: 420 }}
          priority={true}
        />
      </div>

      <div className={style.wrap}>
        <div className={style.textWrap}>
          <p className={style.textOne}>investing IN </p>
          <p className={style.textTwo}>
            automation <br /> fund management
          </p>
          <p className={style.textThree}>
            Follow and copy from one of our top verified fund managements auto-
            <br />
            copy accounts
          </p>
        </div>

        <div className={style.linksWrap}>
          <WhatsAppButton />
          <TelegramButton />
        </div>
      </div>
    </div>
  );
};
