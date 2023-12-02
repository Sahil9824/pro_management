import React, { useEffect, useRef } from "react";
import style from "../..//section/Section1/section1.module.scss";
import WhatsAppButton from "../../Components/Buttons/WhatsappButton/WhatsAppButton";
import TelegramButton from "../../Components/Buttons/TelegramButton/TelegramButton";
import Image from "next/image";
import BackgroundImageDesktop from "../../Assets/Group 48097726 (1).png";
import BackgroundImageMobile from "../../Assets/BackgroundImageMobile.png";
import { Header } from "../Header/Header";
import { Power3, gsap } from "gsap";

export const Section1 = () => {
  const addRefs = (index, arrRef) => (el) => {
    arrRef.current[index] = el;
  };

  const refsArray = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      refsArray.current,
      { yPercent: 50, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: Power3.easeOut,
        duration: 2,
        stagger: {
          amount: 0.3,
        },
      }
    );
  }, []);

  return (
    <div className={style.main}>
      <Header />
      <div className={style.backgroundWrap}>
        <Image
          src={BackgroundImageDesktop}
          className={style.backgroundImageDesktop}
          quality={100}
          style={{ width: "100%", height: 918 }}
          // height={918}
          // width={1740}
          priority={true}
        />
        <Image
          src={BackgroundImageMobile}
          className={style.backgroundImageMobile}
          quality={100}
          // height={918}
          style={{ width: "100%", height: 420 }}
          // width={1740}
          priority={true}
        />
      </div>

      <div className={style.wrap}>
        <div className={style.textWrap}>
          <p className={style.textOne} ref={addRefs(0, refsArray)}>
            investing IN{" "}
          </p>
          <p className={style.textTwo} ref={addRefs(1, refsArray)}>
            automation <br /> fund management
          </p>
          <p className={style.textThree} ref={addRefs(2, refsArray)}>
            Follow and copy from one of our top verified fund managements auto-
            <br />
            copy accounts
          </p>
        </div>

        <div className={style.linksWrap} ref={addRefs(3, refsArray)}>
          <WhatsAppButton />
          <TelegramButton />
        </div>
      </div>
    </div>
  );
};
