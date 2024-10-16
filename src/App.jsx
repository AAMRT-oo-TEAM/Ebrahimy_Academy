import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plans from "./components/Plans";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <div className="absolute z-[0] w-[30%] h-[350%] left-20 top-10 blue__gradient" />
      <div className="absolute z-[0] w-[30%] h-[350%] right-20 top-10 blue__gradient" />
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="trainers">
          <Trainers />
        </div>

        <div id="plans">
          <Plans />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
