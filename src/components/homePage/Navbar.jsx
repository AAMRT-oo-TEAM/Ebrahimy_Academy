import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  // sticky navbar

  window.addEventListener("scroll", function () {
    var navbar = document.querySelector("#nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <div>
      <div
        id='nav'
        className='flex flex-row justify-between gap-16 h-20 p-2 px-2 bg-slate-800   md:fixed md:px-0 w-screen'
      >
        <div className='flex items-center p-1'>
          <Link to='/'>
            <img src='/assets/Logo-removed-bg.png' alt='logo' width={120} />
          </Link>
        </div>

        <nav className='items-center hidden gap-5 p-2 mr-44  md:flex'>
          <Link
            to='home'
            spy={true}
            smooth={true}
            duration={500}
            className='font-bold transition-all cursor-pointer  hover:text-brightRed font-IranianSans'
          >
            خانه
          </Link>
          <Link
            to='plans'
            spy={true}
            smooth={true}
            duration={500}
            className='font-bold transition-all cursor-pointer  hover:text-brightRed font-IranianSans'
          >
            خرید اشتراک
          </Link>
          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={500}
            className='font-bold transition-all cursor-pointer  hover:text-brightRed font-IranianSans'
          >
            !درباره مربیان
          </Link>
          <Link
            to='trainers'
            spy={true}
            smooth={true}
            duration={500}
            className='font-bold transition-all cursor-pointer  hover:text-brightRed font-IranianSans'
          >
            شاگرد ها
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            className='font-bold transition-all cursor-pointer  hover:text-brightRed font-IranianSans'
          >
            تماس باما
          </Link>
          <a
            href='/Login'
            className=' hover:text-brightRed transition-all cursor-pointer font-bold font-IranianSans'
          >
            ثبت نام
          </a>
        </nav>

        <div className='flex items-center p-2 md:hidden' onClick={handleChange}>
          <AiOutlineMenuUnfold size={28} />
        </div>
      </div>

      <div
        className={`${
          menu ? " translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to='home'
          spy={true}
          smooth={true}
          duration={500}
          className='transition-all cursor-pointer  hover:text-brightRed'
        >
          خانه
        </Link>
        <Link
          to='plans'
          spy={true}
          smooth={true}
          duration={500}
          className='transition-all cursor-pointer  hover:text-brightRed'
        >
          خرید اشتراک
        </Link>
        <Link
          to='about'
          spy={true}
          smooth={true}
          duration={500}
          className='transition-all cursor-pointer  hover:text-brightRed'
        >
          درباره
        </Link>
        <Link
          to='trainers'
          spy={true}
          smooth={true}
          duration={500}
          className='transition-all cursor-pointer  hover:text-brightRed'
        >
          شاگرد ها
        </Link>
        <Link
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
          className='transition-all cursor-pointer  hover:text-brightRed'
        >
          تماس با ما
        </Link>
        <a
          href='/Login'
          className=' hover:text-brightRed transition-all cursor-pointer font-bold font-IranianSans'
        >
          ثبت نام
        </a>
      </div>
    </div>
  );
};

export default Navbar;
