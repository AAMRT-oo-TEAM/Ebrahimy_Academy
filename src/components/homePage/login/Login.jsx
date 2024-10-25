// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-right relative">
//       <header className="absolute top-0 left-0 w-full p-4 bg-gray-800 shadow-md text-center">
//         <Link to="/" className="text-xl font-bold text-white">
//           خانه
//         </Link>
//       </header>
//       <div className="relative bg-gray-850 p-8 rounded-lg shadow-lg w-full max-w-md mt-16">
//         {/* تصویر */}
//         <img src={IMG} alt="Login" className="mb-4 rounded-md shadow-md" />
//         {/* توپ‌های متحرک */}
//         <div className="absolute top-0 left-0 w-12 h-12 bg-red-500 rounded-full ball"></div>
//         <div className="absolute top-10 right-0 w-12 h-12 bg-blue-500 rounded-full ball"></div>
//         <h2 className="text-2xl font-bold text-white text-center mb-6">
//           ورود به حساب کاربری
//         </h2>
//         <form className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-300">
//               نام کاربری
//             </label>
//             <input
//               type="text"
//               className="w-full text-right px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="نام کاربری"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-300">
//               رمز عبور
//             </label>
//             <input
//               type="password"
//               className="w-full text-right px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="رمز عبور"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <Link
//               to="/forgot-password"
//               className="text-sm text-blue-400 hover:underline"
//             >
//               فراموشی رمز عبور؟
//             </Link>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-medium transition-colors"
//           >
//             ورود
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <span className="text-gray-400">حساب کاربری نداری؟</span>
//           <Link to="/signup" className="text-blue-400 hover:underline ml-2">
//             ثبت‌نام
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IMG from "../../../assets/img/hero.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   
    if (username === "admin" && password === "admin") {
      navigate("/admin"); 
    } else {
      navigate("/user"); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-right relative">
      <div className="bg-gray-850 p-8 rounded-lg shadow-lg w-full max-w-md">
       
        <header className="absolute top-0 left-0 w-full p-4 bg-gray-800 shadow-md text-center">
       
          <Link to="/" className="text-xl font-bold text-white">
             خانه 
          </Link>
      
        </header>
        <img src={IMG} alt="Login" className="mb-4 rounded-md shadow-md" />
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          ورود به حساب کاربری
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
          >
            ورود
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-blue-400 hover:underline">
            ثبت‌نام
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
