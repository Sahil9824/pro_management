import React from "react";
import style from "../..//section/Section6/section6.module.scss";
import Background from "../../Assets/Section6BgNew.png";
import BackgroundMobile from "../../Assets/Section6BgMobileNew.png";
import BackgroundImage from "../../Assets/Section6ImageforMobile.png";
import BackgroundImageMobile from "../../Assets/Section6ImageforMobile.png";
// import BackgroundImageMobile from "../../Assets/Section6ImageMobile.png";
import Image from "next/image";
import ContactIcon from "../../Assets/ContactIcon";
import EmailIcon from "../../Assets/EmailIcon";
import PhoneIcon from "../../Assets/PhoneIcon";
import { Header } from "../Header/Header";

export const Section6 = () => {
  return (
    <div className={style.main}>
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
        <h3 className={style.titleOne}>Download Our </h3>
        <h3 className={style.titleTwo}>
          <p>FREE</p> E-Book
        </h3>
      </div>

      <div className={style.secondPart}>
        <div className={style.textWrap}>
          <h3 className={style.textOne}>Download our Trading Course</h3>
          <h3 className={style.textTwo}>FREE, Worth $294.99</h3>
        </div>

        <div className={style.imageContainer}>
          <div className={style.imageWrap}>
            <Image
              src={BackgroundImage}
              alt=""
              style={{ width: "100%", height: "auto", borderRadius: 10 }}
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
              // width={96}
              quality={100}
            />
          </div>
        </div>

        <div className={style.detailsWrap}>
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
                style={{ maxWidth: 96, maxHeight: 150, borderRadius: 10 }}
                // height={150}
                // width={96}
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
