import React from "react";
import style from "../Footer/footer.module.scss";
import Logo from "../../Assets/Logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={style.main}>
      <ul className={style.listWrap}>
        <li>
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
        </li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Risk Disclaimer</li>
        <li>Rules & Regulations</li>
        <li>Auto Trading Services Agreement</li>
      </ul>
      <p className={style.italicPara}>
        <h4 className={style.normalHeading}>
          {" "}
          Pro Management Capital brand is a software development company and
          does not provide investment or brokerage services.{" "}
        </h4>
        <br />
        <br />
        <h3 className={style.boldHeading}>MARGIN TRADING DISCLAIMER:</h3>
        Trading foreign exchange and CFD&apos;s on margin carries a high level
        of risk and may not be suitable for all investors. The high degree of
        leverage can work against you as well as for you. Before deciding to
        invest in foreign exchange, you should carefully consider your
        investment objectives, level of experience, and risk appetite. The
        possibility exists that you could sustain a loss of some or all of your
        initial investment, and therefore, you should not invest money that you
        cannot afford to lose. You should be aware of all the risks associated
        with foreign exchange and CFD&apos;s trading and seek advice from an
        independent financial advisor if you have any doubts. <br />
        <br />
        <h3 className={style.boldHeading}>SITE DISCLAIMER:</h3>
        Trades signals sent through this website are solely those of the
        customers quoted. They do not represent the opinions of Traders Mirror
        on whether to buy, sell, or hold particular investments. While Traders
        Mirror tries to ensure that all of the information provided on this
        website is kept up-to-date and accurate, we accept no responsibility for
        any use made of the information provided. You agree not to hold Traders
        Mirror liable for decisions and trades that are based on information
        from this website. Traders Mirror cannot be held responsible for the
        software, broker, or other issues that result in the failure to execute
        a trade command. It is inherent upon you, the client, to make sure you
        are aware of when trades have been taken, adjusted, or closed. The
        purchase, sale, or advice regarding a particular investment can only be
        performed by a licensed Broker/Dealer. Neither our website nor our
        associates involved in the production and maintenance of these products
        or this website is a registered Broker/Dealer or Investment Advisor in
        any State or Federally-sanctioned jurisdiction. All purchasers of
        products referenced on this site are encouraged to consult with a
        licensed representative of their choice regarding any particular trade
        or trading strategy. No representation is being made that any account
        will or is likely to achieve profits or losses similar to those
        discussed on this website. Please note that the servers&apos; names
        listed on this website are not a recommendation nor an advertising made
        by Traders Mirror. Traders Mirror is totally independent and has no
        partnership with any brokers. You have to make your own due diligence
        when selecting a broker.
        <br />
        <br /> <h3 className={style.boldHeading}>SOFTWARE DISCLAIMER:</h3>{" "}
        Although rare, internet-based trading can involve technical risks
        related to, but not limited to, Internet connection, software, or
        hardware failures or delays. Traders Mirror implements a backup system
        to minimize such occurrences but is not responsible for any losses or
        missed trading opportunities as a result of communication failures,
        disruptions, or unexpected system failures.
        <br />
        <br />
        <h3 className={style.boldHeading}>TRADEMARKS DISCLAIMER:</h3> All
        product and company names are trademarks™ or registered® trademarks of
        their respective holders. Use of them does not imply any affiliation
        with or endorsement by them. Any product names, logos, brands, and other
        trademarks or images featured or referred to within the Traders Mirror
        website are the property of their respective trademark holders. These
        trademark holders are not affiliated with Traders Mirror, our products,
        or our websites. They do not sponsor or endorse Traders Mirror or any of
        our products.
      </p>

      <div className={style.gradientbuttonWrapM}>
        <h3>Copyright © 2023 – All rights reserved.</h3>
      </div>
    </div>
  );
};
