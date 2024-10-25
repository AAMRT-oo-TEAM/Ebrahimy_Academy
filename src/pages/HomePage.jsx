import React from "react";
import Navbar from "../components/homePage/Navbar";
import Home from "../components/homePage/Home";
import Plans from "../components/homePage/Plans";
import About from "../components/homePage/About";
import Trainers from "../components/homePage/Trainers";
import Contact from "../components/homePage/Contact";
import Footer from "../components/homePage/Footer";

const HomePage = () => {
  return (
    <div className="">
      <div className="absolute z-[0] w-[30%] h-[350%] left-20 top-10 blue__gradient" />
      <div className="absolute z-[0] w-[30%] h-[350%] right-20 top-10 blue__gradient" />
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="plans">
          <Plans />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="trainers">
          <Trainers />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
