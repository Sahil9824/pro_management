import React from "react";
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

export const Section5 = () => {
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

      <div className={style.secondPart} id="getStarted">
        <div className={style.titleWrap}>
          <h3 className={style.titleOne}>
            {/* Our Fund <p>Management</p> */}
            Get Started and Begin
          </h3>
          <h3 className={style.titleTwo}>Investing today</h3>
          <h3 className={style.titleMobile}>
            Get Started and Begin <p>Investing</p>
            <br />
            <p>today</p>
          </h3>

          <p className={style.titleThree}>
            Enrol now, fund your account instantly, and access our comprehensive
            trading tools. Join our thriving trading community today.
          </p>
        </div>
      </div>

      <div className={style.thirdPart}>
        <div className={style.firstCardWrap}>
          <p className={style.heading}>1. Sign Up</p>
          <h3 className={style.description}>
            Establish an investment account with our partnered broker, enabling
            you to engage with and benefit from the PAMM accounts.
          </h3>
          <div className={style.imageWrap}>
            <SignupIcon />
          </div>
        </div>
        <div className={style.secondCardWrap}>
          <p className={style.heading}>2. Fund</p>
          <h3 className={style.description}>
            Establish an investment account with our partnered broker, enabling
            you to engage with and benefit from the PAMM accounts.
          </h3>
          <div className={style.imageWrap}>
            <FundIcon />
          </div>
        </div>
        <div className={style.thirdCardWrap}>
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
      <div className={style.linksWrap}>
        <WhatsAppButton />
        <TelegramButton />
      </div>
    </div>
  );
};
