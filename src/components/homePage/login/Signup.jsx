import React from "react";
import { Link } from "react-router-dom";
import IMG from "../../../assets/img/image-3.png";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-right relative">
      <header className="absolute top-0 left-0 w-full p-4 bg-gray-800 shadow-md text-center">
        <Link to="/" className="text-xl font-bold text-white">
          خانه
        </Link>
      </header>

      <div className="relative bg-gray-850 p-8 rounded-lg shadow-lg w-full max-w-md mt-16">
        {/* تصویر */}
        <img src={IMG} alt="Signup" className="mb-4 rounded-md shadow-md" />

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          ثبت‌نام
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              نام کاربری
            </label>
            <input
              type="text"
              className="w-full text-right px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="نام کاربری"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              ایمیل
            </label>
            <input
              type="email"
              className="w-full text-right px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ایمیل"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              رمز عبور
            </label>
            <input
              type="password"
              className="w-full text-right px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="رمز عبور"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white text-sm font-medium transition-colors"
          >
            ثبت‌نام
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-gray-400">حساب کاربری داری؟</span>
          <Link to="/login" className="text-blue-400 hover:underline ml-2">
            ورود
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
