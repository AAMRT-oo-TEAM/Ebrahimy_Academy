import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between md:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className="absolute z-[0] w-[30%] h-[50%] left-20 top-10 blue__gradient" />
      <div className="flex flex-col justify-center ">
        <h1 className="text-6xl font-semibold text-right md: font-IranianSans md:w-2/3">
           آکادمی دو و میدانی ابراهیمی و فیروزی 
        </h1>

        <div className="flex flex-row w-full mt-5 font-bold md:w-2/4 font-IranianSans">
          <Button title="پیوستن به تیم " />
        </div>
      </div>
    </div>
  );
};

export default Home;
