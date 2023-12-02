import React, { useEffect, useRef } from "react";
import style from "../..//section/Section6/section6.module.scss";
import Background from "../../Assets/Section6Bg.png";
import BackgroundMobile from "../../Assets/Section6BgMobile.png";
import BackgroundImage from "../../Assets/Section6Image.png";
import BackgroundImageMobile from "../../Assets/Section6ImageMobile.png";
import Image from "next/image";
import ContactIcon from "../../Assets/ContactIcon";
import EmailIcon from "../../Assets/EmailIcon";
import PhoneIcon from "../../Assets/PhoneIcon";
import { Header } from "../Header/Header";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Section6 = () => {
  const addRefs = (index, arrRef) => (el) => {
    arrRef.current[index] = el;
  };

  const refsArray = useRef([]);
  const titlesArray = useRef([]);
  const boxRefs = useRef([]);

  let containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titlesArray.current,
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
        duration: 1,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none none",
          start: "top top+=70%",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      boxRefs.current,
      { yPercent: 50, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,

        ease: Power3.easeOut,
        duration: 1,
        delay: 0.2,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none none",
          start: "top top+=12%",
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
          toggleActions: "play none none none",
          start: "top top+=12%",
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <div className={style.main} ref={containerRef}>
      <div className={style.backgroundWrap}>
        <Image
          src={Background}
          className={style.backgroundImageDesktop}
          style={{ width: "100%", height: 851 }}
          quality={100}
          // height={918}
          // width={1740}
          priority={true}
        />
        <Image
          src={BackgroundMobile}
          className={style.backgroundImageMobile}
          style={{ width: "100%", height: 313 }}
          quality={100}
          // height={918}
          // width={1740}
          priority={true}
        />
      </div>

      <div className={style.firstPart} id="downloadBook">
        <h3 className={style.titleOne} ref={addRefs(0, titlesArray)}>
          Download Our{" "}
        </h3>
        <h3 className={style.titleTwo} ref={addRefs(1, titlesArray)}>
          <p>FREE</p> E-Book
        </h3>
      </div>

      <div className={style.secondPart} ref={addRefs(0, refsArray)}>
        <div className={style.textWrap} ref={addRefs(0, boxRefs)}>
          <h3 className={style.textOne}>Download our Trading Course</h3>
          <h3 className={style.textTwo}>FREE, Worth $294.99</h3>
        </div>

        <div className={style.imageContainer} ref={addRefs(1, boxRefs)}>
          <div className={style.imageWrap}>
            <Image
              src={BackgroundImage}
              alt=""
              style={{ width: "100%", height: "auto" }}
              // height={345}
              // width={221}
              quality={100}
            />
          </div>
          <div className={style.imageWrapMobile}>
            <Image
              src={BackgroundImageMobile}
              alt=""
              //   height={150}
              width={96}
              quality={100}
            />
          </div>
        </div>

        <div className={style.detailsWrap} ref={addRefs(2, boxRefs)}>
          <h3 className={style.detailTitle}>Fill Your Details Below:</h3>

          <div className={style.buttonWrapContainer}>
            <div className={style.buttonWrap}>
              <ContactIcon />
              <textarea placeholder="Full Name" />
            </div>
            <div className={style.buttonWrap}>
              <PhoneIcon />
              <textarea placeholder="Mobile Number (+ Area Code)" />
            </div>
            <div className={style.buttonWrap}>
              <EmailIcon />
              <textarea placeholder="Email Address" />
            </div>

            <div className={style.gradientbuttonWrap}>
              <h3>Download</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={style.secondPartMobileWrap}>
        <div className={style.secondPartM}>
          <div className={style.textWrapM}>
            <h3 className={style.textOneM}>Download our Trading Course</h3>
            <h3 className={style.textTwoM}>FREE, Worth $294.99</h3>
          </div>

          <div className={style.imageContainerM}>
            <div className={style.imageWrapMobileM}>
              <Image
                src={BackgroundImageMobile}
                alt=""
                //   height={150}
                width={96}
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className={style.detailsWrapM}>
          <h3 className={style.detailTitleM}>Fill Your Details Below:</h3>

          <div className={style.buttonWrapContainerM}>
            <div className={style.buttonWrapM}>
              <ContactIcon />
              <textarea placeholder="Full Name" />
            </div>
            <div className={style.buttonWrapM}>
              <PhoneIcon />
              <textarea placeholder="Mobile Number (+ Area Code)" />
            </div>
            <div className={style.buttonWrapM}>
              <EmailIcon />
              <textarea placeholder="Email Address" />
            </div>

            <div className={style.gradientbuttonWrapM}>
              <h3>Download</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
