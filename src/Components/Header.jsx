import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
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
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <div className="relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
         <header className="relative z-10 px-2 sm:px-4 md:px-6 py-4 md:py-6">
            <img className="absolute -left-4 sm:-left-8 md:-left-16 lg:-left-24 xl:-left-36 top-0 z-0 w-auto h-auto opacity-50 md:opacity-100" src={herolines} alt="herolines" />

            <nav className="bg-white/90 backdrop-blur-sm sticky px-3 sm:px-4 py-2 sm:py-3 rounded-[25px] sm:rounded-[50px] flex items-center justify-between container mx-auto relative z-20">
               <a href="/" className="flex-shrink-0">
                  <img className="object-contain h-12 sm:h-14 md:h-16 cursor-pointer" src={logotrans} alt="logo" />
               </a>

               <div className="hidden lg:flex items-center ml-56 font-[500] space-x-6 xl:space-x-8 text-sm xl:text-base absolute left-1/2 transform -translate-x-1/2">
                  <a
                     href="#"
                     className="relative text-gray-700 hover:text-[#5519A3] transition-colors duration-300
                  after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
                  after:w-full after:h-[2px] after:bg-[#5519A3]
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-400
                  hover:after:scale-x-100">
                     Akademiya
                  </a>
                  <a
                     href="#advantages"
                     className="relative text-gray-700 hover:text-[#5519A3] transition-colors duration-300
                  after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
                  after:w-full after:h-[2px] after:bg-[#5519A3]
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-400
                  hover:after:scale-x-100">
                     Üstünlüklər
                  </a>
                  <a
                     href="#education"
                     className="relative text-gray-700 hover:text-[#5519A3] transition-colors duration-300
                  after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
                  after:w-full after:h-[2px] after:bg-[#5519A3]
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-400
                  hover:after:scale-x-100">
                     İxtisaslar
                  </a>
                  <a
                     href="#about"
                     className="relative text-gray-700 hover:text-[#5519A3] transition-colors duration-300
                  after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
                  after:w-full after:h-[2px] after:bg-[#5519A3]
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-400
                  hover:after:scale-x-100">
                     Haqqımızda
                  </a>
                  <a
                     href="#faq"
                     className="relative text-gray-700 hover:text-[#5519A3] transition-colors duration-300
                  after:content-[''] after:block after:absolute after:left-0 after:-bottom-1
                  after:w-full after:h-[2px] after:bg-[#5519A3]
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-400
                  hover:after:scale-x-100">
                     FAQ
                  </a>
               </div>

               <div className="hidden sm:flex items-center space-x-4">
                  <button className="bg-[#5519A3] text-white border-[1px] border-[#5519A3] text-sm md:text-base font-[500] py-2 px-4 md:px-6 rounded-full transition-all duration-300 hover:text-[#5519A3] hover:bg-transparent transform cursor-pointer">Əlaqə</button>
               </div>

               <div className="lg:hidden">
                  <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#5519A3] transition-colors duration-300 p-1">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                     </svg>
                  </button>
               </div>

               {isMobileMenuOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm rounded-b-[25px] shadow-lg lg:hidden z-30 mt-1">
                     <div className="flex flex-col space-y-4 p-6">
                        <a href="#" className="text-gray-700 hover:text-[#5519A3] transition-colors duration-300 font-[500]">
                           Akademiya
                        </a>
                        <a href="#advantages" className="text-gray-700 hover:text-[#5519A3] transition-colors duration-300 font-[500]">
                           Üstünlüklər
                        </a>
                        <a href="#education" className="text-gray-700 hover:text-[#5519A3] transition-colors duration-300 font-[500]">
                           İxtisaslar
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-[#5519A3] transition-colors duration-300 font-[500]">
                           Haqqımızda
                        </a>
                        <a href="#faq" className="text-gray-700 hover:text-[#5519A3] transition-colors duration-300 font-[500]">
                           FAQ
                        </a>
                        <button className="bg-[#5519A3] text-white border-[1px] border-[#5519A3] font-[500] py-3 px-6 rounded-full transition-all duration-300 hover:text-[#5519A3] hover:bg-transparent mt-2 sm:hidden">Əlaqə</button>
                     </div>
                  </div>
               )}
            </nav>

            <div className="container mx-auto relative pb-12 sm:pb-16 md:pb-20 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
               <div className="relative top-8 sm:top-12 md:top-16 lg:top-24 left-0 max-w-full lg:max-w-2xl z-20 text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-[600] text-gray-900 leading-tight mb-6 sm:mb-8">
                     <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
                        <span>Texnologiya</span>
                     </div>
                     <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 mt-2">
                        <span>dövründə</span>
                        <img src={logo4} alt="Vionix Logo" className="h-12 sm:h-16 md:h-20 lg:h-24" />
                     </div>
                     <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 mt-2">
                        <span>ilə öndə ol</span>
                     </div>
                  </h1>

                  <button className="bg-[#5519A3] text-white px-8 sm:px-12 lg:px-16 py-3 sm:py-4 rounded-[50px] border-[1px] border-[#5519A3] font-[500] transition-all duration-300 transform hover:bg-transparent hover:text-[#5519A3] cursor-pointer text-sm sm:text-base">İndi Başla</button>
               </div>

               <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 right-0 sm:right-[2%] md:right-[4%] lg:right-[6%]">
                  <img src={hero} alt="hero" className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-auto h-auto" />
               </div>

               <div className="hidden md:block">
                  <div className="absolute top-[8%] sm:top-[5%] right-[25%] lg:right-[33%] py-4 lg:py-6 px-3 lg:px-5 rounded-[15px] lg:rounded-[20px] bg-white border-[1px] border-[#EDEEF0] flex flex-col items-center text-center gap-2 lg:gap-3 shadow-[10px_25px_100px_0px_#002B6B40] max-w-[200px] lg:max-w-[280px]">
                     <img src={pcicon} alt="logo" className="w-8 lg:w-auto" />
                     <h6 className="text-base lg:text-[20px] font-[600]">Layihələrin Nümayişi</h6>
                     <p className="text-xs lg:text-[14px] font-[400] text-gray-600">Tələbələrimizin işlərini yaxından kəşf edin.</p>
                  </div>

                  {/* Networking Card */}
                  <div className="absolute top-[18%] sm:top-[15%] right-[2%] lg:right-[5%] py-3 lg:py-4 px-4 lg:px-6 rounded-[15px] lg:rounded-[20px] bg-white border-[1px] border-[#EDEEF0] flex items-center gap-3 lg:gap-4 shadow-[10px_25px_100px_0px_#002B6B40] max-w-[220px] lg:max-w-[300px]">
                     <img src={chaticon} alt="logo" className="shrink-0 w-8 lg:w-auto" />
                     <h6 className="text-base lg:text-[20px] font-[600] leading-snug">Şəbəkələşmə İmkanları</h6>
                  </div>

                  {/* Consultation Card */}
                  <div className="absolute top-[60%] sm:top-[66%] right-[28%] lg:right-[38%] py-3 lg:py-4 px-4 lg:px-6 rounded-[15px] lg:rounded-[20px] bg-white border-[1px] border-[#EDEEF0] flex items-center gap-3 lg:gap-4 shadow-[10px_25px_100px_0px_#002B6B40] max-w-[240px] lg:max-w-[320px]">
                     <img src={globalicon} alt="logo" className="shrink-0 w-8 lg:w-auto" />
                     <h6 className="text-base lg:text-[20px] font-[600] leading-snug">Ödənişsiz Konsultasiyalar</h6>
                  </div>

                  {/* Career Support Card */}
                  <div className="absolute top-[42%] sm:top-[45%] right-[0%] lg:right-[1%] py-4 lg:py-6 px-4 lg:px-6 rounded-[15px] lg:rounded-[20px] bg-white border-[1px] border-[#EDEEF0] flex flex-col items-center text-center gap-2 lg:gap-3 shadow-[10px_25px_100px_0px_#002B6B40] max-w-[200px] lg:max-w-[280px]">
                     <img src={careericon} alt="logo" className="w-8 lg:w-auto" />
                     <h6 className="text-base lg:text-[20px] font-[600]">Karyera Dəstəyi</h6>
                     <p className="text-xs lg:text-[14px] font-[400] text-gray-600">
                        Karyeranı inkişaf etdirmək
                        <br />
                        üçün dəstəyimiz səninlədir.
                     </p>
                  </div>
               </div>
            </div>

            {/* Logo Slider */}
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
                     spaceBetween: 10,
                  },
                  480: {
                     slidesPerView: 3,
                     spaceBetween: 12,
                  },
                  640: {
                     slidesPerView: 3,
                     spaceBetween: 15,
                  },
                  768: {
                     slidesPerView: 4,
                     spaceBetween: 20,
                  },
                  1024: {
                     slidesPerView: 5,
                     spaceBetween: 20,
                  },
               }}
               className="container mt-8 sm:mt-10 mx-auto px-4 sm:px-8 md:px-16 lg:px-32 flex w-full justify-between items-center">
               <SwiperSlide>
                  <img src={iria} alt="IRIA logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={sih} alt="SIH logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={ptm} alt="PTM logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={rin} alt="RIN logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={aim} alt="AIM logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={iria} alt="IRIA logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={sih} alt="SIH logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={ptm} alt="PTM logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={rin} alt="RIN logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={aim} alt="AIM logo" className="mx-auto object-contain h-12 sm:h-16 md:h-20" />
               </SwiperSlide>
            </Swiper>
         </header>
      </div>
   );
};

export default Header;
