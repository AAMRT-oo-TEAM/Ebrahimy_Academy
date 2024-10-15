import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="bg-[#222] rounded-t-3xl text-right font-IranianSans">
        <div className="flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
          <div className="w-full md:w-1/4">
            <Link to="/">
              <h1 className="font-semibold text-2xl text-brightRed">فیت‌زون</h1>
            </Link>
            <p className="mt-4">
              ما در فیت‌زون همراه شما هستیم تا به بهترین نسخه خود در زمینه تناسب
              اندام برسید.
            </p>
          </div>
          <div>
            <h1 className="font-medium text-xl mt-4">آدرس</h1>
            <p className="mt-4">مجموعه شهید کشوری</p>
          </div>
          <div>
            <h1 className="font-medium text-xl mt-4">تماس</h1>
            <div className="flex flex-row items-center gap-2 mt-4">
              <AiTwotonePhone size={20} />
              <p>+98-912-123-4567</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <AiOutlineMail size={20} />
              <p>test@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-4">
            © تمامی حقوق محفوظ است. طراحی توسط{" "}
            <span className="text-brightRed"> Aliooo</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
