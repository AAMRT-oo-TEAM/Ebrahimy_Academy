import React from "react";
import Button from "../../layouts/Button";

const Contact = () => {
  return (
    <div className=' min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10'>
      <div className=' flex flex-col md:flex-row justify-between w-full'>
        <form className=' w-full md:w-2/5 space-y-5 pt-20'>
          <h1 className='text-5xl font-semibold text-center'>تماس با ما</h1>
          <div className=' flex flex-col'>
            <label className='text-right font-IranianSans' htmlFor='userName'>
              نام و نام خانوادگی
            </label>
            <input
              className=' py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
              type='text'
              name='userName'
              id='userName'
              placeholder='enter your name'
            />
          </div>
          <div className=' flex flex-col'>
            <label className='text-right font-IranianSans' htmlFor='userEmail'>
              ادرس ایمیل
            </label>
            <input
              className=' py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
              type='email'
              name='userEmail'
              id='userEmail'
              placeholder='enter your email'
            />
          </div>
          <div className=' flex flex-col'>
            <label className='text-right font-IranianSans' htmlFor='userNumber'>
              شماره موبایل
            </label>
            <input
              className=' py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
              type='text'
              name='userNumber'
              id='userNumber'
              placeholder='enter your number'
            />
          </div>

          <div className=' flex flex-row justify-center font-IranianSans'>
            <Button title='ارسال' />
          </div>
        </form>

        <div className=' flex flex-row items-center w-full md:w-2/4 my-5'>
          <img
            className=' rounded-md'
            src={"/assets/img/contactImg.jpg"}
            alt='img'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
