import React from "react";
import style from "../Header/header.module.scss";
import Logo from "../../Assets/Logo.png";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header = () => {
  return (
    <div className={style.Wrap} id="head">
      <div className={style.logoListWrap}>
        <div className={style.logoWrap}>
          <Image
            className={style.desktopLogo}
            src={Logo}
            alt="logo"
            width={70}
            height={70}
            quality={100}
          />
          <Image
            className={style.mobileLogo}
            src={Logo}
            alt="logo"
            width={48}
            height={48}
            quality={100}
          />
        </div>
        <ul className={style.listWrap}>
          <AnchorLink href="#howFund">
            <li>How It Works</li>
          </AnchorLink>
          <AnchorLink href="#copyAccount">
            <li>Fund Accounts</li>
          </AnchorLink>
          <AnchorLink href="#whyChoose">
            <li>Why Us</li>
          </AnchorLink>
          <AnchorLink href="#getStarted">
            <li>Get Started</li>
          </AnchorLink>
          <AnchorLink href="#downloadBook">
            <li>Download e-Book</li>
          </AnchorLink>
        </ul>
      </div>

      <div className={style.linksWrap}>
        <div className={style.buttonWrapOne}>
          <h3>Login</h3>
        </div>
        <div className={style.buttonWrapTwo}>
          <h3>
            Create
            <br /> Account
          </h3>
        </div>
      </div>
    </div>
  );
};
