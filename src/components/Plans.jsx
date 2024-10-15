import React from "react";
import PlansCard from "../layouts/PlansCard";

const Plans = () => {
  return (
    <>

      <div className=" min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-center font-IranianSans">
          عضویت در ورزشگاه
        </h1>
        <div className=" flex flex-col md:flex-row justify-between mt-10 gap-8">
          <PlansCard title="برنامه معمولی" price="1.500.000" />
          <PlansCard title="برنامه ویژه" price="3.000.000" />
          <PlansCard title="برنامه استثنايی" price="5.000.000" />
        </div>{" "}
      </div>
    </>
  );
};

export default Plans;
