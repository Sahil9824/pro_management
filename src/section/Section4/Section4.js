import React, { useEffect, useRef } from "react";
import style from "../..//section/Section4/section4.module.scss";
import Background from "../../Assets/Section4Bg.png";
// import BackgroundMobile from "../../Assets/Section4BgMobile.png";
import BackgroundMobile from "../../Assets/Section4BgMobileNew.png";
import Image from "next/image";
import ScreenOne from "../../Assets/dashboard.png";
import ScreenTwo from "../../Assets/easyTouch.png";
import ScreenThree from "../../Assets/cryptoNew.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Section4 = () => {
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
          start: "top top+=15%",
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
        <AnchorLink href="#downloadBook">
          <Image
            src={Background}
            alt=""
            style={{ width: "100%" }}
            //   height={228}
            //   width={269}
            quality={100}
          />
        </AnchorLink>
      </div>
      <div className={style.imageWrapMobile}>
        <AnchorLink href="#downloadBook">
          <Image
            src={BackgroundMobile}
            alt=""
            style={{ width: "100%", height: "auto" }}
            //   height={228}
            //   width={269}
            quality={100}
          />
        </AnchorLink>
      </div>

      <div className={style.secondPart} id="whyChoose" ref={boxcontainerRef}>
        <div className={style.titleWrap}>
          <h3 className={style.titleOne} ref={addRefs(0, refsArray)}>
            WhY choose TO Our
          </h3>
          <h3 className={style.titleTwo} ref={addRefs(1, refsArray)}>
            investment portfolios
          </h3>
          <p className={style.titleThree} ref={addRefs(2, refsArray)}>
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
        <div className={style.firstCardWrap} ref={addRefs(0, boxRefs)}>
          <div className={style.headingWrap}>
            <p className={style.heading}>Why Choose to Invest With Us</p>
            <h3 className={style.description}>
              Investors, lacking the time and expertise for hands-on trading,
              can delegate the process to Fund Managers—trusted professionals
              with the necessary skills and experience.
            </h3>
          </div>
          <div className={style.imageWrapOne}>
            <Image
              src={ScreenOne}
              cl
              alt=""
              style={{ width: "100%", height: "auto" }}
              // height={184}
              // width={184}
              quality={100}
            />
          </div>
        </div>
        <div className={style.firstCardWrap} ref={addRefs(1, boxRefs)}>
          <div className={style.headingWrap}>
            <p className={style.heading}>
              Explore Our Fund Management Accounts
            </p>
            <h3 className={style.description}>
              Investors recognize the potential for lucrative returns from our
              outstanding fund management accounts.
              <br></br>
            </h3>
          </div>
          <div className={style.imageWrapTwo}>
            <Image
              src={ScreenTwo}
              cl
              alt=""
              style={{ width: "100%", height: "auto" }}
              // height={184}
              // width={184}
              quality={100}
            />
          </div>
        </div>
        <div className={style.firstCardWrap} ref={addRefs(2, boxRefs)}>
          <div className={style.headingWrap}>
            <p className={style.heading}>
              With a Competitive Performance fee model
            </p>
            <h3 className={style.description}>
              We apply a 10% performance fee on profits, automatically deducted
              from your account by the broker partner connected to the PAMM
              accounts.
            </h3>
          </div>

          <div className={style.imageWrapThree}>
            <Image
              src={ScreenThree}
              cl
              alt=""
              style={{ width: "100%", height: "auto" }}
              // height={231}
              // width={231}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
