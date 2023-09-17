import React from "react";
import About from "../../layout/about";
import Services from "../../layout/services";
import FoundUs from "../../layout/foundus";
import Contact from "../../layout/contact";
import BannerTicker from "../../layout/bannerTicker";
import Banner from "../../layout/banner";
import Header from "../../layout/header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />

      <BannerTicker />
      <About />
      <Services />
      <FoundUs />
      <Contact />
    </div>
  );
};

export default Home;
