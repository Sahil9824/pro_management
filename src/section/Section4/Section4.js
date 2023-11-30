import React from "react";
import style from "../..//section/Section4/section4.module.scss";
import Background from "../../Assets/Section4Bg.png";
import BackgroundMobile from "../../Assets/Section4BgMobile.png";
import Image from "next/image";
import ScreenOne from "../../Assets/dashboard.png";
import ScreenTwo from "../../Assets/easyTouch.png";
import ScreenThree from "../../Assets/crypto.png";

export const Section4 = () => {
  return (
    <div className={style.main}>
      <div className={style.imageWrap}>
        <Image
          src={Background}
          alt=""
          //   height={228}
          //   width={269}
          quality={100}
        />
      </div>
      <div className={style.imageWrapMobile}>
        <Image
          src={BackgroundMobile}
          alt=""
          //   height={228}
          //   width={269}
          quality={100}
        />
      </div>

      <div className={style.secondPart}>
        <div className={style.titleWrap}>
          <h3 className={style.titleOne}>
            {/* Our Fund <p>Management</p> */}
            WhY choose TO Our
          </h3>
          <h3 className={style.titleTwo}>investment portfolios</h3>
          <p className={style.titleThree}>
            Unlock the full potential of automated and diversified investing
            tailored to align with your financial goals and seize market
            opportunities. Our approach combines the extensive expertise of
            financial professionals with the precision of cutting-edge
            automation tools. This synergy guarantees that each investment
            decision is executed with optimal accuracy, efficiency, and
            scalability.
            <br />
            <br /> Choose from our selection of Stable risk profile fund
            accounts designed for conservative investors seeking stable returns.
            These accounts maintain a low level of risk, ensuring suitability
            for those prioritizing stability in their investment strategy.
          </p>
        </div>
      </div>

      <div className={style.thirdPart}>
        <div className={style.firstCardWrap}>
          <p className={style.heading}>Why Choose to Invest With Us</p>
          <h3 className={style.description}>
            Investors, lacking the time and expertise for hands-on trading, can
            delegate the process to Fund Managers—trusted professionals with the
            necessary skills and experience.
          </h3>
          <div className={style.imageWrap}>
            <Image
              src={ScreenOne}
              cl
              alt=""
              height={184}
              width={184}
              quality={100}
            />
          </div>
        </div>
        <div className={style.firstCardWrap}>
          <p className={style.heading}>Explore Our Fund Management Accounts</p>
          <h3 className={style.description}>
            Investors recognize the potential for lucrative returns from our
            outstanding fund management accounts.
          </h3>
          <div className={style.imageWrapTwo}>
            <Image
              src={ScreenTwo}
              cl
              alt=""
              height={184}
              width={184}
              quality={100}
            />
          </div>
        </div>
        <div className={style.firstCardWrap}>
          <p className={style.heading}>
            With a Competitive Performance fee model
          </p>
          <h3 className={style.description}>
            We apply a 10% performance fee on profits, automatically deducted
            from your account by the broker partner connected to the PAMM
            accounts.
          </h3>
          <div className={style.imageWrapThree}>
            <Image
              src={ScreenThree}
              cl
              alt=""
              height={231}
              width={231}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
