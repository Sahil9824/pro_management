import React from "react";
import { Header } from "../src/section/Header/Header";
import style from "../styles/Home.module.css";
import { Section1 } from "../src/section/Section1/Section1";
import { Section2 } from "../src/section/Section2/Section2";
import { Section3 } from "../src/section/Section3/Section3";
import { Section4 } from "../src/section/Section4/Section4";
import { Section5 } from "../src/section/Section5/Section5";
import { Section6 } from "../src/section/Section6/Section6";
import { Footer } from "../src/section/Footer/Footer";

const App = () => {
  return (
    <div className={style.main}>
      {/* <Header /> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default App;
