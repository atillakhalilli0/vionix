import React from "react";
import logotrans from "../assets/logo-trans-01.png";
import logo4 from "../assets/logo-04.png";

function Navbar() {
   return (
      <nav>
         <div className="hidden lg:flex bg-white absolute top-10 left-0 right-0 mx-auto px-6 py-4 rounded-full items-center justify-between w-full max-w-[1500px] shadow-md z-10">
            <a href="/"><img className="object-contain h-16" src={logotrans} alt="logo" /></a>
            <div className="flex items-center space-x-6">
               <ul className="flex space-x-6 text-base font-medium">
                  <li className="relative group">
                     <a href="#akademiya" className="hover:text-[#5519A3] cursor-pointer transition-colors">
                        Akademiya
                     </a>
                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5519A3] transition-all duration-300 group-hover:w-full"></div>
                  </li>
                  <li className="relative group">
                     <a href="#ustunlukler" className="hover:text-[#5519A3] cursor-pointer transition-colors">
                        Üstünlükləadsasd
                     </a>
                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5519A3] transition-all duration-300 group-hover:w-full"></div>
                  </li>
                  <li className="relative group">
                     <a href="#ixtisaslar" className="hover:text-[#5519A3] cursor-pointer transition-colors">
                        İxtisaslar
                     </a>
                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5519A3] transition-all duration-300 group-hover:w-full"></div>
                  </li>
                  <li className="relative group">
                     <a href="#haqqimizda" className="hover:text-[#5519A3] cursor-pointer transition-colors">
                        Haqqımızda
                     </a>
                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5519A3] transition-all duration-300 group-hover:w-full"></div>
                  </li>
                  <li className="relative group">
                     <a href="#faq" className="hover:text-[#5519A3] cursor-pointer transition-colors">
                        FAQ
                     </a>
                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5519A3] transition-all duration-300 group-hover:w-full"></div>
                  </li>
               </ul>
               <button className="text-base font-medium text-white bg-[#5519A3] px-4 py-2 rounded-full hover:bg-[#440e88] transition-colors">Əlaqə</button>
            </div>
         </div>

         <div className="absolute top-1/2 -translate-y-1/2 left-0 mt-16">
            <h1 className="text-[72px] font-[600] leading-tight">
               Texnologiya <br />
               dövründə{" "}
               <span>
                  <img src={logo4} alt="Vionix Logo" className="inline" />
               </span>{" "}
               <br />
               ilə öndə ol
            </h1>
         </div>
      </nav>
   );
}

export default Navbar;
