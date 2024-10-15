import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between md:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className="absolute z-[0] w-[30%] h-[50%] left-20 top-10 blue__gradient" />
      <div className=" flex flex-col justify-center">
        <h1 className=" text-6xl font-semibold md: font-IranianSans text-right md:w-2/3 ">
          با هر قطره عرق، به هدف نزدیک‌تر شو
        </h1>

        <div className=" w-full md:w-2/4 mt-5 flex flex-row font-IranianSans font-bold ">
          <Button title="!بزن بریم به سوی موفقیت  " />
        </div>
      </div>
    </div>
  );
};

export default Home;
