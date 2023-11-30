import React from "react";
import style from "../Header/header.module.scss";
import Logo from "../../Assets/Logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={style.Wrap}>
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
          <li>How It Works</li>
          <li>Fund Accounts</li>
          <li>Why Us</li>
          <li>Get Started</li>
          <li>Download e-Book</li>
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
