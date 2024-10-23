import React from "react";
import TrainerCard from "../../layouts/TrainerCard";

const Trainers = () => {
  return (
    <div className='relative min-h-screen flex flex-col justify-center  items-center md:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center mt-10  font-IranianSans'>
        شاگردان ما
      </h1>

      <div className=' flex flex-col md:flex-row justify-center items-center gap-10 mt-8'>
        <TrainerCard img={"/assets/img/img1.jpg"} name='mmd' />
        <TrainerCard img={"/assets/img/img2.jpg"} name='aliooo' />
        <TrainerCard img={"/assets/img/img3.jpg"} name='sag' />
      </div>
    </div>
  );
};

export default Trainers;
