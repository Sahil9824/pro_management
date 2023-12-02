import React, { useEffect, useRef } from "react";
import style from "../..//section/Section3/section3.module.scss";
import Background from "../../Assets/Section3Bg.png";
import BackgroundMobile from "../../Assets/Section3BgMobile.png";
import Image from "next/image";
import ScreenOne from "../../Assets/statisticOne.png";
import ScreenTwo from "../../Assets/statisticTwo.png";
import ScreenThree from "../../Assets/statisticThree.png";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Section3 = () => {
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
          start: "top top+=50%",
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
          start: "top top+=100%",
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
          style={{ width: "100%", height: "auto" }}
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
          style={{ width: "100%", height: "auto" }}
          //   height={228}
          //   width={269}
          quality={100}
        />
      </div>

      <div className={style.secondPart} id="copyAccount" ref={boxcontainerRef}>
        <div className={style.titleWrap}>
          <h3 className={style.titleOne} ref={addRefs(0, refsArray)}>
            Our Fund <p>Management</p>
          </h3>
          <h3 className={style.titleTwo} ref={addRefs(1, refsArray)}>
            copy accounts
          </h3>
          <p className={style.titleThree} ref={addRefs(2, refsArray)}>
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
        <div className={style.firstCardWrap} ref={addRefs(0, boxRefs)}>
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
        <div className={style.firstCardWrap} ref={addRefs(1, boxRefs)}>
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
        <div className={style.firstCardWrap} ref={addRefs(2, boxRefs)}>
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
