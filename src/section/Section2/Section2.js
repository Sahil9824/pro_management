import React, { useEffect, useRef } from "react";
import style from "../..//section/Section2/section2.module.scss";
import Image from "next/image";
import ScreenOne from "../../Assets/ScreenOnex.png";
import ScreenTwo from "../../Assets/ScreenTwo.png";
import ScreenThree from "../../Assets/ScreenThree.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Section2 = () => {
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
          start: "top top+=30%",
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
          trigger: containerRef.current,
          toggleActions: "restart pause resume pause",
          start: "top top+=40%",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className={style.main}>
      <div className={style.cardWrap} ref={containerRef}>
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

      <div className={style.secondPart} id="howFund" ref={boxcontainerRef}>
        <div className={style.titleWrap}>
          <h3 className={style.titleOne} ref={addRefs(0, refsArray)}>
            How Our Fund <p>Management</p>
          </h3>
          <h3 className={style.titleTwo} ref={addRefs(1, refsArray)}>
            accounts operate
          </h3>
          <p className={style.titleThree} ref={addRefs(2, refsArray)}>
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
        <div className={style.firstCardWrap} ref={addRefs(0, boxRefs)}>
          <div className={style.imageWrap}>
            <Image
              src={ScreenOne}
              alt=""
              // height={228}
              style={{ width: "100%", height: "auto" }}
              // width={269}
              quality={100}
            />
          </div>
          <h3 className={style.heading}>1. Pick a fund account</h3>
          <h3 className={style.description}>
            Pick and choose from our 3 fund management accounts to invest and
            copy
          </h3>
        </div>
        <div className={style.firstCardWrap} ref={addRefs(1, boxRefs)}>
          <div className={style.imageWrap}>
            <Image
              src={ScreenTwo}
              alt=""
              style={{ width: "100%", height: "auto" }}
              // height={228}
              // width={269}
              quality={100}
            />
          </div>
          <h3 className={style.heading}>2. Set the amount</h3>
          <h3 className={style.description}>
            Choose investment size, that will determine how your trades are
            executed from master account
          </h3>
        </div>
        <div className={style.firstCardWrap} ref={addRefs(2, boxRefs)}>
          <div className={style.imageWrap}>
            <Image
              src={ScreenThree}
              alt=""
              // height={228}
              style={{ width: "100%", height: "auto" }}
              // width={269}
              quality={100}
            />
          </div>
          <h3 className={style.heading}>3. View Progress</h3>
          <h3 className={style.description}>
            Have 100% control of your portfolio and control of your account
          </h3>
        </div>
      </div>
      <AnchorLink href="#copyAccount">
        <div className={style.container}>
          <div className={style.buttonWrap}>
            <h3>View Accounts</h3>
          </div>
        </div>
      </AnchorLink>
    </div>
  );
};
