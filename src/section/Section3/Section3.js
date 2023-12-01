import React from "react";
import style from "../..//section/Section3/section3.module.scss";
import Background from "../../Assets/Section3Bg.png";
import BackgroundMobile from "../../Assets/Section3BgMobile.png";
import Image from "next/image";
import ScreenOne from "../../Assets/statisticOne.png";
import ScreenTwo from "../../Assets/statisticTwo.png";
import ScreenThree from "../../Assets/statisticThree.png";

export const Section3 = () => {
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

      <div className={style.secondPart} id="copyAccount">
        <div className={style.titleWrap}>
          <h3 className={style.titleOne}>
            Our Fund <p>Management</p>
          </h3>
          <h3 className={style.titleTwo}>copy accounts</h3>
          <p className={style.titleThree}>
            The fund management account operates in collaboration with our
            broker partners, utilizing PAMM Master accounts that facilitate the
            automatic linking of your account to our master account. This
            enables the replication of our investment strategies, and in return,
            incurs a nominal performance fee to us and a management fee to the
            broker technology. Fund managers have the ability to oversee
            numerous trading accounts and pooled funds, aiming to deliver
            impressive investment returns.
          </p>
        </div>
      </div>

      <div className={style.thirdPart}>
        <div className={style.firstCardWrap}>
          <p className={style.heading}>Alexander William Acc</p>
          <div className={style.Line}></div>
          <div className={style.imageWrap}>
            <Image
              src={ScreenOne}
              alt=""
              style={{ width: "100%", height: "auto" }}
              // height={290}
              // width={354}
              quality={100}
            />
          </div>
          <h3 className={style.description}>
            View our Verified ‘MyFXBook’ Results:
          </h3>
          <div className={style.container}>
            <div
              className={style.buttonWrap}
              onClick={() =>
                window.open(
                  "https://www.myfxbook.com/members/alexfoster/alexander-william-acc-1/8367610",
                  "_blank"
                )
              }
            >
              <h3>View Results</h3>
            </div>
          </div>
        </div>
        <div className={style.firstCardWrap}>
          <p className={style.heading}>ALGO TECH</p>
          <div className={style.Line}></div>
          <div className={style.imageWrap}>
            <Image
              src={ScreenTwo}
              alt=""
              style={{ width: "100%", height: "auto" }}
              // height={290}
              // width={354}
              quality={100}
            />
          </div>
          <h3 className={style.description}>
            View our Verified ‘MyFXBook’ Results:
          </h3>
          <div className={style.container}>
            <div
              className={style.buttonWrap}
              onClick={() =>
                window.open(
                  "https://www.myfxbook.com/members/alexfoster/algo-tech/10090527",
                  "_blank"
                )
              }
            >
              <h3>View Results</h3>
            </div>
          </div>
        </div>
        <div className={style.firstCardWrap}>
          <p className={style.heading}>Nova</p>
          <div className={style.Line}></div>
          <div className={style.imageWrap}>
            <Image
              src={ScreenThree}
              alt=""
              style={{ width: "100%", height: "auto" }}
              // height={290}
              // width={354}
              quality={100}
            />
          </div>
          <h3 className={style.description}>
            View our Verified ‘MyFXBook’ Results:
          </h3>
          <div className={style.container}>
            <div
              className={style.buttonWrap}
              onClick={() =>
                window.open(
                  "https://www.myfxbook.com/members/alexfoster/algo-tech/10090527",
                  "_blank"
                )
              }
            >
              <h3>View Results</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
