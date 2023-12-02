import React, { useEffect, useRef } from "react";
import style from "../..//section/Section5/section5.module.scss";
import Background from "../../Assets/Section5Bg.png";
import BackgroundMobile from "../../Assets/Section5BgMobile.png";
import Image from "next/image";
import WhatsAppButton from "../../Components/Buttons/WhatsappButton/WhatsAppButton";
import TelegramButton from "../../Components/Buttons/TelegramButton/TelegramButton";
// import ScreenOne from "../../Assets/dashboard.png";
// import ScreenTwo from "../../Assets/easyTouch.png";
// import ScreenThree from "../../Assets/crypto.png";
import SignupIcon from "../../Assets/SignupIcon";
import FundIcon from "../../Assets/FundIcon";
import ConnectIcon from "../../Assets/ConnectIcon";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Section5 = () => {
  const addRefs = (index, arrRef) => (el) => {
    arrRef.current[index] = el;
  };

  const refsArray = useRef([]);
  const boxRefs = useRef([]);

  let containerRef = useRef(null);
  let boxcontainerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRefs.current,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,

        ease: Power3.easeOut,
        duration: 1,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: boxcontainerRef.current,
          toggleActions: "play none none none",
          start: "top top+=35%",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      refsArray.current,
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
        duration: 1.6,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: boxcontainerRef.current,
          toggleActions: "restart pause resume pause",
          start: "top top+=70%",
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <div className={style.main}>
      <div className={style.imageWrap}>
        <Image
          src={Background}
          alt=""
          style={{ width: "100%", height: "auto" }}
          //   height={228}
          width={1440}
          quality={100}
        />
      </div>
      <div className={style.imageWrapMobile}>
        <Image
          src={BackgroundMobile}
          alt=""
          style={{ width: "100%", height: "auto" }}
          //   height={228}
          width={440}
          quality={100}
        />
      </div>

      <div className={style.secondPart} id="getStarted" ref={boxcontainerRef}>
        <div className={style.titleWrap}>
          <h3 className={style.titleOne} ref={addRefs(0, refsArray)}>
            {/* Our Fund <p>Management</p> */}
            Get Started and Begin
          </h3>
          <h3 className={style.titleTwo} ref={addRefs(1, refsArray)}>
            Investing today
          </h3>
          <h3 className={style.titleMobile} ref={addRefs(3, refsArray)}>
            Get Started and Begin <p>Investing today</p>
          </h3>

          <p className={style.titleThree} ref={addRefs(2, refsArray)}>
            Enrol now, fund your account instantly, and access our comprehensive
            trading tools. Join our thriving trading community today.
          </p>
        </div>
      </div>

      <div className={style.thirdPart}>
        <div className={style.firstCardWrap} ref={addRefs(0, boxRefs)}>
          <p className={style.heading}>1. Sign Up</p>
          <h3 className={style.description}>
            Establish an investment account with our partnered broker, enabling
            you to engage with and benefit from the PAMM accounts.
          </h3>
          <div className={style.imageWrap}>
            <SignupIcon />
          </div>
        </div>
        <div className={style.secondCardWrap} ref={addRefs(1, boxRefs)}>
          <p className={style.heading}>2. Fund</p>
          <h3 className={style.description}>
            Establish an investment account with our partnered broker, enabling
            you to engage with and benefit from the PAMM accounts.
          </h3>
          <div className={style.imageWrap}>
            <FundIcon />
          </div>
        </div>
        <div className={style.thirdCardWrap} ref={addRefs(2, boxRefs)}>
          <p className={style.heading}>3. Connect</p>
          <h3 className={style.description}>
            Link your account to our PAMM copy solution, connecting it to the
            chosen fund management account to our PAMM mentioned earlier.
          </h3>
          <div className={style.imageWrap}>
            <ConnectIcon />
          </div>
        </div>
      </div>
      <div className={style.linksWrap} ref={addRefs(3, boxRefs)}>
        <WhatsAppButton />
        <TelegramButton />
      </div>
    </div>
  );
};
