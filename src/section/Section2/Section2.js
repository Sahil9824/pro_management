import React from "react";
import style from "../..//section/Section2/section2.module.scss";
import Image from "next/image";
import ScreenOne from "../../Assets/ScreenOnex.png";
import ScreenTwo from "../../Assets/ScreenTwo.png";
import ScreenThree from "../../Assets/ScreenThree.png";

export const Section2 = () => {
  return (
    <div className={style.main}>
      <div className={style.cardWrap}>
        <div className={style.textWrap}>
          <h3 className={style.textOne}>+5 Year</h3>
          <h6 className={style.textTwo}>
            Historical
            <br /> Yearly Performance
          </h6>
        </div>
        <div className={style.verticalLine}></div>
        <div className={style.textWrap}>
          <h3 className={style.textOne}>+40%</h3>
          <h6 className={style.textTwo}>
            Anticipated
            <br /> Yearly Performance
          </h6>
        </div>
        <div className={style.verticalLine}></div>
        <div className={style.textWrap}>
          <h3 className={style.textOne}>4-8%</h3>
          <h6 className={style.textTwo}>
            Anticipated
            <br /> Monthly Return
          </h6>
        </div>
        <div className={style.verticalLine}></div>
        <div className={style.textWrap}>
          <h3 className={style.textOne}>10%</h3>
          <h6 className={style.textTwo}>
            Monthly
            <br />
            Performance Fee
          </h6>
        </div>
      </div>

      <div className={style.cardWrapMobile}>
        <div className={style.columnOne}>
          <div className={style.textWrap}>
            <h3 className={style.textOne}>+5 Year</h3>
            <h6 className={style.textTwo}>
              Historical
              <br /> Yearly Performance
            </h6>
          </div>
          <div className={style.textWrap}>
            <h3 className={style.textOne}>4-8%</h3>
            <h6 className={style.textTwo}>
              Anticipated
              <br /> Monthly Return
            </h6>
          </div>
        </div>
        <div className={style.verticalLine}></div>
        <div className={style.columnTwo}>
          <div className={style.textWrap}>
            <h3 className={style.textOne}>+40%</h3>
            <h6 className={style.textTwo}>
              Anticipated
              <br /> Yearly Performance
            </h6>
          </div>

          <div className={style.textWrap}>
            <h3 className={style.textOne}>10%</h3>
            <h6 className={style.textTwo}>
              Monthly
              <br />
              Performance Fee
            </h6>
          </div>
        </div>
      </div>

      <div className={style.secondPart}>
        <div className={style.titleWrap}>
          <h3 className={style.titleOne}>
            How Our Fund <p>Management</p>
          </h3>
          <h3 className={style.titleTwo}>accounts operate</h3>
          <p className={style.titleThree}>
            Our managed accounts are created through strategies that incorporate
            both quantitative data and human analysis. Specifically, 20% of the
            analysis is powered by AI, while the remaining 80% involves human
            insights from our team of strategy providers. Choose the management
            account you want to connect with, and our team will take care of the
            process to deliver monthly gains. Our strategies prioritize low risk
            and consistent returns, enabling you to select the management
            account that best fits your investment portfolio.
          </p>
        </div>
      </div>

      <div className={style.thirdPart}>
        <div className={style.firstCardWrap}>
          <div className={style.imageWrap}>
            <Image
              src={ScreenOne}
              alt=""
              height={228}
              width={269}
              quality={100}
            />
          </div>
          <h3 className={style.heading}>1. Pick a fund account</h3>
          <h3 className={style.description}>
            Pick and choose from our 3 fund management accounts to invest and
            copy
          </h3>
        </div>
        <div className={style.firstCardWrap}>
          <div className={style.imageWrap}>
            <Image
              src={ScreenTwo}
              alt=""
              height={228}
              width={269}
              quality={100}
            />
          </div>
          <h3 className={style.heading}>2. Set the amount</h3>
          <h3 className={style.description}>
            Choose investment size, that will determine how your trades are
            executed from master account
          </h3>
        </div>
        <div className={style.firstCardWrap}>
          <div className={style.imageWrap}>
            <Image
              src={ScreenThree}
              alt=""
              height={228}
              width={269}
              quality={100}
            />
          </div>
          <h3 className={style.heading}>3. View Progress</h3>
          <h3 className={style.description}>
            Have 100% control of your portfolio and control of your account
          </h3>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.buttonWrap}>
          <h3>View Accounts</h3>
        </div>
      </div>
    </div>
  );
};
