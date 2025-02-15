import React from "react";

const About = () => {
  return (
    <>
      <div className='relative flex flex-col items-center min-h-screen mx-5 text-right font-IranianSans md:flex-row md:mx-32'>
        <div>
          <h1 className='text-5xl font-semibold text-right md:text-center ml-36 mt-14 md:mt-0'>
            درباره ما
          </h1>
          <div className='w-full mt-4 space-y-5 md:w-3/4'>
            <p>
              ما تیمی از مربیان حرفه‌ای دومیدانی و بدنسازی که با سال‌ها تجربه در
              زمینه آماده‌سازی ورزشکاران برای قهرمانی و علاقه‌مندان به تناسب
              اندام، به شما کمک می‌کنیم تا به اهداف خود در ورزش و سلامتی برسید.
              با ما، تمرینات شما هدفمند و علمی خواهند بود
            </p>

            <p>
              برنامه‌های تمرینی شخصی‌سازی شده بدنسازی ، دومیدانی ، مشاوره تغذیه
              ویژه و همچنین در زمینه آماده سازی برای قهرمانی
            </p>
            <p>
              خدمات شامل دو صورت حضوری و غیر حضوری میشود افرادی که میخواهند برای
              قهرمانی تمرین کنند حتما به صورت حضوری باید حاضر بشوند
            </p>
            <p>
              برای تمرینات حضوری باید با مربی از طریق واتساپ و شماره تماس در
              ارتباط باشید
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default About;
