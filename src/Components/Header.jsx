import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import herolines from "../assets/herolines.svg";
import hero from "../assets/hero.png";
import pcicon from "../assets/pcicon.svg";
import chaticon from "../assets/chaticon.svg";
import globalicon from "../assets/global-search-icon.svg";
import careericon from "../assets/careericon.svg";
import logo4 from "../assets/logo-04.svg";
import logotrans from "../assets/logo-trans-01.svg";
import aim from "../assets/aimlogo.svg";
import iria from "../assets/irialogo.svg";
import ptm from "../assets/ptmlogo.svg";
import rin from "../assets/rinlogo.svg";
import sih from "../assets/sihlogo.svg";

const Header = () => {
   return (
      <div className="relative overflow-x-hidden px-36">
         <header className="relative z-10 px-6 py-6">
            <img className="absolute -left-36 top-0 z-0" src={herolines} alt="herolines" />
            <nav className="bg-white/90 sticky px-4 py-2 rounded-[50px] flex items-center justify-between container mx-auto">
               <a href="/">
                  <img className="object-contain h-16 cursor-pointer z-30" src={logotrans} alt="logo" />
               </a>
               <div className="hidden ml-[30%] md:flex items-center font-[500] space-x-8 text-base">
                  <a
                     href="#"
                     className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300
               after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
               after:w-full after:h-[2px] after:bg-purple-600
               after:scale-x-0 after:origin-left after:transition-transform after:duration-400
               hover:after:scale-x-100">
                     Akademiya
                  </a>
                  <a
                     href="#advantages"
                     className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300
               after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
               after:w-full after:h-[2px] after:bg-purple-600
               after:scale-x-0 after:origin-left after:transition-transform after:duration-400
               hover:after:scale-x-100">
                     Üstünlüklər
                  </a>
                  <a
                     href="#education"
                     className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300
               after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
               after:w-full after:h-[2px] after:bg-purple-600
               after:scale-x-0 after:origin-left after:transition-transform after:duration-400
               hover:after:scale-x-100">
                     İxtisaslar
                  </a>
                  <a
                     href="#about"
                     className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300
               after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
               after:w-full after:h-[2px] after:bg-purple-600
               after:scale-x-0 after:origin-left after:transition-transform after:duration-400
               hover:after:scale-x-100">
                     Haqqımızda
                  </a>
                  <a
                     href="#faq"
                     className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300
               after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
               after:w-full after:h-[2px] after:bg-purple-600
               after:scale-x-0 after:origin-left after:transition-transform after:duration-400
               hover:after:scale-x-100">
                     FAQ
                  </a>
               </div>

               <div className="flex items-center space-x-4">
                  <button className="bg-[#5519A3] text-white border-[1px] border-[#5519A3] text-base font-[500] py-2 px-6 rounded-full transition-all duration-300 hover:text-[#5519A3] hover:bg-white transform cursor-pointer">Əlaqə</button>
               </div>

               <div className="md:hidden">
                  <button className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                     </svg>
                  </button>
               </div>
            </nav>

            <div className="container mx-auto relative pb-20 min-h-[700px]">
               <div className="absolute top-24 left-0 max-w-2xl z-20">
                  <h1 className="text-[72px] font-[600] text-gray-900 leading-tight mb-8">
                     <div className="flex items-center gap-4">Texnologiya</div>
                     <div className="flex items-center gap-4">
                        dövründə
                        <img src={logo4} alt="Vionix Logo" className="h-24" />
                     </div>
                     <div className="flex items-center gap-4">ilə öndə ol</div>
                  </h1>

                  <button className="bg-[#5519A3] text-white px-16 py-4 rounded-[50px] border-[1px] border-[#5519A3] font-[500] transition-all duration-300 transform hover:bg-white hover:text-[#5519A3] cursor-pointer text-base">İndi Başla</button>
               </div>

               <div className="absolute top-10 right-[6%]">
                  <img src={hero} alt="hero" className="w-auto h-auto" />
               </div>

               <div className="absolute top-[5%] right-[33%] py-6 px-5 rounded-[20px] bg-white border-[1px] border-[#EDEEF0] flex flex-col items-center text-center gap-3 shadow-[10px_25px_100px_0px_#002B6B40] max-w-[280px]">
                  <img src={pcicon} alt="logo" />
                  <h6 className="text-[20px] font-[600]">Layihələrin Nümayişi</h6>
                  <p className="text-[14px] font-[400] text-gray-600">Tələbələrimizin işlərini yaxından kəşf edin.</p>
               </div>

               <div className="absolute top-[15%] right-[5%] py-4 px-6 rounded-[20px] bg-white border-[1px] border-[#EDEEF0] flex items-center gap-4 shadow-[10px_25px_100px_0px_#002B6B40] max-w-[300px]">
                  <img src={chaticon} alt="logo" className="shrink-0" />
                  <h6 className="text-[20px] font-[600] leading-snug">Şəbəkələşmə İmkanları</h6>
               </div>

               <div className="absolute top-[66%] right-[38%] py-4 px-6 rounded-[20px] bg-white border-[1px] border-[#EDEEF0] flex items-center gap-4 shadow-[10px_25px_100px_0px_#002B6B40] max-w-[320px]">
                  <img src={globalicon} alt="logo" className="shrink-0" />
                  <h6 className="text-[20px] font-[600] leading-snug">Ödənişsiz Konsultasiyalar</h6>
               </div>

               <div className="absolute top-[45%] right-[1%] py-6 px-6 rounded-[20px] bg-white border-[1px] border-[#EDEEF0] flex flex-col items-center text-center gap-3 shadow-[10px_25px_100px_0px_#002B6B40] max-w-[280px]">
                  <img src={careericon} alt="logo" />
                  <h6 className="text-[20px] font-[600]">Karyera Dəstəyi</h6>
                  <p className="text-[14px] font-[400] text-gray-600">
                     Karyeranı inkişaf etdirmək
                     <br />
                     üçün dəstəyimiz səninlədir.
                  </p>
               </div>
            </div>

            <Swiper
               slidesPerView={5}
               spaceBetween={20}
               loop={true}
               centeredSlides={false}
               freeMode={true}
               grabCursor={false}
               autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
               }}
               speed={3000}
               allowTouchMove={false}
               modules={[Autoplay]}
               breakpoints={{
                  320: {
                     slidesPerView: 2,
                     spaceBetween: 10
                  },
                  640: {
                     slidesPerView: 3,
                     spaceBetween: 15
                  },
                  768: {
                     slidesPerView: 4,
                     spaceBetween: 20
                  },
                  1024: {
                     slidesPerView: 5,
                     spaceBetween: 20
                  }
               }}
               className="container mt-10 mx-auto px-4 md:px-32 flex w-full justify-between items-center">
               <SwiperSlide>
                  <img src={iria} alt="IRIA logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={sih} alt="SIH logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={ptm} alt="PTM logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={rin} alt="RIN logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={aim} alt="AIM logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={iria} alt="IRIA logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={sih} alt="SIH logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={ptm} alt="PTM logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={rin} alt="RIN logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={aim} alt="AIM logo" className="mx-auto object-contain h-20" />
               </SwiperSlide>
            </Swiper>
         </header>
      </div>
   );
};

export default Header;