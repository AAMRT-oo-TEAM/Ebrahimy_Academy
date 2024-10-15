import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <>
      <div className="relative text-right min-h-screen font-IranianSans flex flex-col md:flex-row items-center md:mx-32 mx-5">
        <div>
          <h1 className="text-5xl font-semibold text-right md:text-center ml-36 mt-14 md:mt-0">
            درباره ما
          </h1>
          <div className="w-full md:w-3/4 space-y-5 mt-4">
            <p>
              ما تیمی از مربیان حرفه‌ای دومیدانی و بدنسازی هستیم که با سال‌ها
              تجربه در زمینه آماده‌سازی ورزشکاران و علاقه‌مندان به تناسب اندام،
              به شما کمک می‌کنیم تا به اهداف خود در ورزش و سلامتی برسید. با ما،
              تمرینات شما هدفمند و علمی خواهند بود.
            </p>

            <p>
              خدمات ما شامل برنامه‌های تمرینی شخصی‌سازی شده، مشاوره تغذیه و
              پشتیبانی ۲۴ ساعته برای راهنمایی و پیگیری پیشرفت شماست. ماموریت ما
              این است که شما به بالاترین سطح آمادگی جسمانی خود برسید.
            </p>
          </div>
        </div>
        <div>
          <img src={img} alt="مربی دومیدانی و بدنسازی" />
        </div>
      </div>
    </>
  );
};

export default About;
