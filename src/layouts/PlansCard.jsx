import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../layouts/Button";

const PlansCard = (props) => {
  return (
    <>
      <div className=" flex flex-col font-IranianSans bg-gray-800 hover:bg-[#003dc2] hover:shadow-blue shadow-2xl text-white duration-300 group max-w-[300px] text-center p-5 rounded-2xl transform hover:scale-105 transition-all">
        <h2 className=" font-semibold text-xl text-gray-100 group-hover:text-yellow-400">
          {props.title}
        </h2>
        <div className=" flex flex-row justify-center items-center mt-4">
          <h3 className="font-semibold text-xl text-gray-100 group-hover:text-yellow-400">
            {props.price} تومان
          </h3>
        </div>
        <div className=" flex flex-col items-center mt-5">
          <div className=" flex flex-row items-center mb-2">
            <span className=" inline-block mr-2">
              <AiFillCheckCircle size={22} className="text-green-400" />
            </span>
            <p className="text-gray-400 group-hover:text-gray-200 duration-300 text-sm">
              دسترسی کامل به تمامی دستگاه‌ها و امکانات باشگاه.
            </p>
          </div>
          <div className=" flex flex-row items-center">
            <span className=" inline-block mr-2">
              <AiFillCheckCircle size={22} className="text-green-400" />
            </span>
            <p className="text-gray-400 group-hover:text-gray-200 duration-300 text-sm">
              شامل یک جلسه مشاوره رایگان با مربی تخصصی.
            </p>
          </div>
        </div>
        <div className=" flex flex-row justify-center mt-6">
          <Button title="خرید پلن" />
        </div>
      </div>
    </>
  );
};

export default PlansCard;
