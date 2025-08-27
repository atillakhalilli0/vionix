import React from "react";
import icon1 from "../assets/besttelimci.svg";
import icon2 from "../assets/effective.svg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
function About() {
   return (
      <section id="about" className="my-32 mx-36">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[500px]">
               <div className="absolute top-0 left-0 border-[1px] rounded-full py-4 pl-4 pr-10 border-[#909090] flex items-center gap-3 z-10 bg-white">
                  <div className="p-3 rounded-full bg-[#F5F2FF] flex items-center justify-center">
                     <img src={icon1} alt="icon" className="w-6 h-6" />
                  </div>
                  <div>
                     <h6 className="text-[20px] font-[600]">Ən Yaxşı</h6>
                     <p className="text-[14px] font-[500] text-[#909090]">Təlimçilər</p>
                  </div>
               </div>

               <div className="absolute -bottom-2 right-48 border-[1px] rounded-full py-4 pl-4 pr-10 border-[#909090] flex items-center gap-3 z-10 bg-white">
                  <div className="p-3 rounded-full bg-[#F5F2FF] flex items-center justify-center">
                     <img src={icon2} alt="icon" className="w-6 h-6" />
                  </div>
                  <div>
                     <h6 className="text-[20px] font-[600]">Ən Effektiv</h6>
                     <p className="text-[14px] font-[500] text-[#909090]">Tədris Proqramları</p>
                  </div>
               </div>

               <img src={about3} alt="about3" className="absolute bottom-10 left-0 w-[450px] rounded-[20px]" />
               <img src={about1} alt="about1" className="absolute top-16 right-[44%] w-32 rounded-[20px]" />
               <img src={about2} alt="about2" className="absolute top-28 left-8 w-38 rounded-[20px]" />
               <img src={about4} alt="about4" className="absolute bottom-[22%] right-[20%] w-48 h-36 object-cover rounded-[20px]" />
            </div>

            <div className="w-[75%]">
               <p className="uppercase inline p-3 text-[14px] font-[400] border border-[#5519A3] rounded-full">
                  <span className="text-[#5519A3] text-xl">●</span> BİZ KİMİK?
               </p>
               <h4 className="text-[42px] md:text-[48px] font-[600] mt-4">Haqqımızda</h4>
               <p className="text-base font-[400] mt-4 leading-relaxed text-[#444]">
                  Vionix Academy Sumqayıt İnnovation Hub-ın tərkibində olan akademiyadır. Biz müasir və praktik yanaşmalarla tələbələrə real bacarıqlar qazandırırıq. Kurslarımız Frontend, Backend, UX/UI, Qrafik Dizayn, Data Analitika və Digital Marketing sahələrini əhatə edir. Təcrübəli mütəxəssislər və akademik partnyorlarımızla birlikdə sizə
                  karyera inkişafı və şəbəkələşmə imkanları təqdim edirik. Məqsədimiz hər tələbəyə peşəkar bilik və bacarıqlar verərək, onların gələcəyini qurmaqdır. Vionix Academy-də öyrənmək həm faydalı, həm də ilhamverici bir təcrübədir.
               </p>
            </div>
         </div>
      </section>
   );
}

export default About;
