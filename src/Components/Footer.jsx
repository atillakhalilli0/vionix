import React from "react";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";

function Footer() {
   return (
      <footer className="border-t-[1px] border-[#5519A3] pt-10 pb-5">
         <div className="px-36">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[#1A1A1A]">
               <div>
                  <h5 className="font-[600] text-[20px] mb-4">Naviqasiya</h5>
                  <ul className="flex flex-col gap-2 text-[16px] font-[400]">
                     <li>
                        <a className="hover:text-purple-600 transition-all duration-300" href="#">
                           Ana Səhifə
                        </a>
                     </li>
                     <li>
                        <a className="hover:text-purple-600 transition-all duration-300" href="#advantages">
                           Üstünlüklər
                        </a>
                     </li>
                     <li>
                        <a className="hover:text-purple-600 transition-all duration-300" href="#education">
                           Ixtisaslar
                        </a>
                     </li>
                     <li>
                        <a className="hover:text-purple-600 transition-all duration-300" href="#about">
                           Haqqımızda
                        </a>
                     </li>
                     <li>
                        <a className="hover:text-purple-600 transition-all duration-300" href="#faq">
                           FAQ
                        </a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h5 className="font-[600] text-[20px] mb-4">Sosial Media</h5>
                  <ul className="flex flex-col gap-3 text-[16px] font-[400]">
                     <a target="_blank" href="https://www.instagram.com/vionixacademy?igsh=MTE1am42ZmF0a2RoaA==" className="flex items-center gap-2 hover:text-purple-600 transition-all duration-300">
                        <img src={insta} alt="social-media" /> Instagram
                     </a>
                     <a target="_blank" href="https://www.linkedin.com/company/vionixacademy/" className="flex items-center gap-2 hover:text-purple-600 transition-all duration-300">
                        <img src={linkedin} alt="social-media" /> Linkedin
                     </a>
                     <a target="_blank" href="https://www.tiktok.com/@vionixacademy?_t=ZS-8zCId2BNpic&_r=1" className="flex items-center gap-2 hover:text-purple-600 transition-all duration-300">
                        <img src={tiktok} alt="social-media" /> Tik-Tok
                     </a>
                     <a target="_blank" href="https://www.instagram.com/vionixacademy?igsh=MTE1am42ZmF0a2RoaA==" className="flex items-center gap-2 hover:text-purple-600 transition-all duration-300">
                        <img src={youtube} alt="social-media" /> Youtube
                     </a>
                  </ul>
               </div>

               <div>
                  <h5 className="font-[600] text-[20px] mb-4">Əlaqə</h5>
                  <ul className="flex flex-col gap-3 text-[16px] font-[400]">
                     <li>
                        <a className="hover:text-purple-600 transition-all duration-300" href="https://vionix.az" target="_blank" rel="noreferrer">
                           www.vionix.az
                        </a>
                     </li>
                     <li>
                        <a className="hover:text-purple-600 transition-all duration-300" target="_blank" href="https://maps.app.goo.gl/mkzBJ5TqqH3rftSX6">
                           Sumqayıt şəhəri, 36-cı məhəllə <br /> Mərkəz plaza 9-cu mərtəbə
                        </a>
                     </li>
                     <li>
                        <a className="hover:text-purple-600 transition-all duration-300" href="tel:+994102347096">
                           +994 10 234 70 96
                        </a>
                     </li>
                  </ul>
               </div>

               <div className="w-[335px]">
                  <h5 className="font-[600] text-[20px] mb-4">Ünvan</h5>
                  <p className="text-[16px] font-[400] mb-4">Sumqayıtda sizi gözləyirik – Gəl, Vionix ilə gələcəyini qur!</p>
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.9354461921325!2d49.6689375!3d40.58718030000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030971d8184f87d%3A0xd95822e16020e50e!2sMerkez%20Plaza!5e0!3m2!1str!2saz!4v1756231094855!5m2!1str!2saz"
                     width="100%"
                     height="160"
                     allowfullscreen=""
                     loading="lazy"
                     className="rounded-lg border"
                     referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
         </div>

         <div className="w-full mt-12 border-t-[1px] border-[#5519A3] pt-6 text-center text-sm text-[#3A3A3A] px-36">© 2025 Vionix Academy. Bütün hüquqlar qorunur.</div>
      </footer>
   );
}

export default Footer;
