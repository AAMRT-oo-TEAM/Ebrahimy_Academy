import React, { useState } from "react";
import {
  FaAward,
  FaCertificate,
  FaMedal,
  FaUsers,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import img1 from "../assets/img/photo_2020-10-24_20-27-51.jpg";
import img2 from "../assets/img/photo_2021-02-24_12-37-25.jpg";
import img3 from "../assets/img/photo_2021-07-23_11-34-59.jpg";
import student1 from "../assets/img/photo_2022-02-07_05-16-13.jpg"; // عکس شاگرد ۱
import student2 from "../assets/img/photo_2022-10-06_10-47-22.jpg"; // عکس شاگرد ۲
import student3 from "../assets/img/photo_2022-12-26_20-36-20.jpg"; // عکس شاگرد ۳
import bannerImage from "../assets/img/contactImg.jpg"; // بنر مورد نظر شما

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#06070f] text-white font-IranianSans text-right">
      {/* Header Section */}

      {/* Banner Section */}
      <div
        className="bg-cover bg-center h-screen flex items-center  relative"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <header className="absolute top-0 w-full bg-transparent shadow-lg text-right text-lg">
          <div className="container mx-auto flex justify-between items-center p-5">
            <nav className="space-x-6">
              <a
                href="#about"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                درباره من
              </a>
              <a
                href="#students"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                شاگردان
              </a>
              <a
                href="#private-training"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                آموزش خصوصی
              </a>
              <a
                href="#honors"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                افتخارات
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                تماس
              </a>
            </nav>
          </div>
        </header>{" "}
        <p className="text-gray-300 leading-relaxed mt-4 text-left w-1/4 ml-4  text-xl">
          【N】【E】【V】【E】【R】　【G】【I】【V】【E】　【U】【P】
        </p>
      </div>

      {/* Personal Info & Goals Section */}
      <section
        id="about"
        className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* بخش توضیحات شخصی */}
        <div className="bg-gray-900 text-lg font-IranianSans p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in-up hover:rotate-1 hover:bg-gradient-to-l from-slate-500 to-slate-800">
          <h2 className="text-4xl font-bold mb-6 text-orange-400">
            توضیحات شخصی
          </h2>
          <p className="text-gray-300 leading-relaxed">
            مربی حرفه‌ای با بیش از ۱۵ سال تجربه در آموزش رشته‌های ورزشی و تربیت
            شاگردان موفق در سطح بین‌المللی. عشق به توسعه مهارت‌های ورزشکاران و
            ساختن نسل جدیدی از ورزشکاران پویا و توانا.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            مربیگری برای من فراتر از تمرین فیزیکی است؛ این یک مسیر برای ایجاد
            انضباط، تعهد و همکاری است که به افراد کمک می‌کند تا توانایی‌های خود
            را کشف کنند.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            به طور مداوم تلاش می‌کنم تا بهترین ابزارها و تکنیک‌ها را برای ارتقای
            توانایی‌های شاگردانم فراهم کنم و آن‌ها را به سمت موفقیت رهبری کنم.
          </p>
        </div>

        {/* بخش اهداف و دیدگاه‌ها */}
        <div className="bg-gray-900 p-8 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in-up hover:rotate-1 hover:bg-gradient-to-r from-slate-500 to-slate-800">
          <h2 className="text-4xl font-bold mb-6 text-orange-400">
            اهداف و دیدگاه‌ها
          </h2>
          <p className="text-gray-300 leading-relaxed">
            هدف من ایجاد بستری برای رسیدن به اوج موفقیت در ورزش و تربیت
            ورزشکارانی است که نه تنها در عرصه‌های ورزشی بلکه در زندگی نیز موفق
            باشند.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            من به این باور دارم که هر فردی می‌تواند به بهترین نسخه خود دست یابد،
            اگر ابزار و انگیزه لازم در اختیار او قرار داده شود.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            تلاش می‌کنم با ایجاد فضایی الهام‌بخش، افراد را به چالش بکشیم تا
            محدودیت‌های خود را بشکنند و به سطح‌های بالاتری از توانایی‌ها دست
            یابند.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            هدف نهایی من این است که ورزشکاران نه تنها به لحاظ فیزیکی، بلکه از
            لحاظ ذهنی و احساسی نیز قوی‌تر شوند و بتوانند در هر شرایطی پیروز
            باشند.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-4xl font-bold mb-6">عکس‌های مربی</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src={img1}
            alt="مربی در حال آموزش"
            className="rounded-lg shadow-lg transform transition-transform hover:scale-105"
          />
          <img
            src={img2}
            alt="مربی با شاگردان"
            className="rounded-lg shadow-lg transform transition-transform hover:scale-105"
          />
          <img
            src={img3}
            alt="مربی در مسابقات"
            className="rounded-lg shadow-lg transform transition-transform hover:scale-105"
          />
        </div>
      </section>

      {/* Students Section */}
      <section
        id="students"
        className="container mx-auto px-6 py-10 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">شاگردان من</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={student1} alt="شاگرد ۱" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold">علی</h3>
            <p className="text-gray-300">مقام اول مسابقات کشوری ۲۰۲۳</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={student2} alt="شاگرد ۲" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold">سارا</h3>
            <p className="text-gray-300">مقام دوم مسابقات بین‌المللی ۲۰۲۲</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={student3} alt="شاگرد ۳" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold">مهدی</h3>
            <p className="text-gray-300">مدال طلای آسیایی ۲۰۲۱</p>
          </div>
        </div>
      </section>

      {/* Private Training Sections */}
      <section
        id="private-training"
        className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
      >
        {/* بخش بدنسازی خصوصی */}
        <div
          className="bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-1 hover:bg-gray-700 relative cursor-pointer"
          onClick={() => setShowModal("gym")}
        >
          <h2 className="text-4xl font-bold mb-6 text-orange-400">
            بدنسازی خصوصی
          </h2>
          <p className="text-gray-300 leading-relaxed">
            برنامه‌های اختصاصی بدنسازی برای تمامی سطوح، از مبتدی تا حرفه‌ای. به
            شما کمک می‌کنم تا به اهداف بدنسازی خود برسید و بدن دلخواه خود را
            بسازید.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            با استفاده از برنامه‌های کاملاً شخصی‌سازی‌شده که بر اساس اهداف و سطح
            شما طراحی شده‌اند، تمریناتی اصولی و موثر خواهید داشت.
          </p>
          <span className="absolute bottom-4 right-4 text-orange-300 hover:text-orange-500 transition-colors">
            بیشتر بدانید
          </span>
        </div>

        <div
          className="bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-1 hover:bg-gray-700 relative cursor-pointer"
          onClick={() => setShowModal("running")}
        >
          <h2 className="text-4xl font-bold mb-6 text-orange-400">
            دومیدانی عمومی و خصوصی
          </h2>
          <p className="text-gray-300 leading-relaxed">
            دوره‌های تخصصی دومیدانی برای تمامی سطوح، از افراد مبتدی تا دوندگان
            حرفه‌ای. در این دوره‌ها به بهبود تکنیک، افزایش استقامت و سرعت شما
            پرداخته می‌شود.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            با تمرکز بر روی جزئیات هر حرکت، شما به مرحله جدیدی از آمادگی جسمانی
            خواهید رسید.
          </p>
          <span className="absolute bottom-4 right-4 text-orange-300 hover:text-orange-500 transition-colors">
            بیشتر بدانید
          </span>
        </div>

        {/* مودال برای توضیحات بیشتر */}
        {showModal === "gym" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-orange-400">
                جزئیات بدنسازی خصوصی
              </h2>
              <p className="text-gray-300 leading-relaxed">
                در دوره‌های بدنسازی خصوصی، شما با تمرینات تخصصی و برنامه‌ریزی
                دقیق، به تناسب اندام دلخواه خود می‌رسید. این برنامه‌ها شامل
                تمرینات قدرتی، هوازی و ترکیبی است که تمامی جوانب بدن شما را
                تقویت می‌کند.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                جلسات خصوصی با تمرکز بر تکنیک‌های صحیح تمرین و تغذیه مناسب به
                شما کمک می‌کند تا به بهترین نتایج برسید.
              </p>
              <button
                onClick={() => setShowModal(null)}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors"
              >
                بستن
              </button>
            </div>
          </div>
        )}

        {showModal === "running" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-orange-400">
                جزئیات دوره‌های دومیدانی
              </h2>
              <p className="text-gray-300 leading-relaxed">
                دوره‌های دومیدانی شامل تمرینات سرعت، استقامت و تکنیک‌های دقیق
                برای بهبود عملکرد شماست. با تمرینات اختصاصی برای دوندگان در سطوح
                مختلف، به بهترین نتیجه دست خواهید یافت.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                این دوره‌ها مناسب افرادی است که به دنبال بهبود عملکرد ورزشی خود
                و افزایش سرعت و استقامت در دویدن هستند.
              </p>
              <button
                onClick={() => setShowModal(null)}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors"
              >
                بستن
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Honors and International Achievements Section */}
      <section
        id="honors"
        className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaAward className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold">مدال طلا</h3>
          <p className="text-gray-300">
            برنده مدال طلای مسابقات بین‌المللی در سال ۲۰۲۲.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaCertificate className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold">گواهینامه مربیگری</h3>
          <p className="text-gray-300">
            گواهینامه مربیگری از فدراسیون ورزشی بین‌المللی.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaMedal className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold">افتخارات شاگردان</h3>
          <p className="text-gray-300">
            تربیت چندین ورزشکار موفق که در مسابقات بین‌المللی مدال‌آور شده‌اند.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-6 py-10 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">تماس با من</h2>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <FaEnvelope className="inline text-yellow-500" />
            <span className="text-gray-300">example@gmail.com</span>
          </div>
          <div className="mb-4">
            <FaPhone className="inline text-yellow-500" />
            <span className="text-gray-300">+98 912 345 6789</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-yellow-500 text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-yellow-500 text-2xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center">
        <p className="text-gray-300">© 2024 همه حقوق محفوظ است.</p>
      </footer>
    </div>
  );
};

export default About;
