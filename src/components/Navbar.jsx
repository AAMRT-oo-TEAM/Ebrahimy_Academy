import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className=" md:fixed flex flex-row justify-between md:px-32 px-5 p-5 gap-16 ">
        <div className=" flex items-center p-2">
          <Link to="/">
            <h1 className=" font-semibold text-2xl text-brightRed">FitZone</h1>
          </Link>
        </div>

        <nav className=" hidden md:flex items-center p-2 gap-5">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed  transition-all cursor-pointer font-bold font-IranianSans"
          >
            خانه
          </Link>
          <Link
            to="plans"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer font-bold font-IranianSans"
          >
            خرید اشتراک
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer font-bold font-IranianSans"
          >
            !درباره من
          </Link>
          <Link
            to="trainers"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer font-bold font-IranianSans"
          >
            شاگرد ها
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer font-bold font-IranianSans"
          >
            تماس باما
          </Link>
        </nav>

        <div className="md:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenuUnfold size={28} />
        </div>
      </div>

      <div
        className={`${
          menu ? " translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          خانه
        </Link>
        <Link
          to="plans"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          خرید اشتراک
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          درباره
        </Link>
        <Link
          to="trainers"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          شاگرد ها
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          تماس با ما
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
