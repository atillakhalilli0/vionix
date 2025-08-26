import React from "react";
import "./Education.css";
import icon1 from "../assets/edu1.svg";
import icon2 from "../assets/edu2.svg";
import icon3 from "../assets/edu3.svg";
import icon4 from "../assets/edu4.svg";
import icon5 from "../assets/edu5.svg";
import icon6 from "../assets/edu6.svg";

const programs = [
   {
      id: 1,
      title: "UX/UI Dizayn",
      desc: "İstifadəçi təcrübəsini və interfeys dizaynını peşəkar, yaradıcı və innovativ səviyyədə inkişaf etdirin.",
      icon: icon1,
   },
   {
      id: 2,
      title: "Front-End",
      desc: "Müasir texnologiyalarla funksional və istifadəçi yönümlü web interfeyslərin hazırlanmasını öyrənin.",
      icon: icon2,
   },
   {
      id: 3,
      title: "Back-End",
      desc: "Server tərəfi proqramlaşdırma və verilənlər bazası idarəetməsi ilə güclü sistemlər qurma bacarığı əldə edin.",
      icon: icon3,
   },
   {
      id: 4,
      title: "Digital Marketing",
      desc: "Rəqəmsal dünyada effektiv marketing strategiyaları quraraq brendin inkişafını təmin edin.",
      icon: icon4,
   },
   {
      id: 5,
      title: "Qrafik Dizayn",
      desc: "Brend və məhsullar üçün peşəkar vizual həllər və kreativ dizayn nümunələri hazırlamağı öyrənin.",
      icon: icon5,
   },
   {
      id: 6,
      title: "Data Analitika",
      desc: "Məlumatların təhlili vasitəsilə düzgün qərarverməni və biznes proseslərinin optimallaşdırılmasını mənimsəyin.",
      icon: icon6,
   },
];

function Education() {
   return (
      <section className="py-32">
         <div className="container mx-auto mb-10">
            <p className="uppercase inline p-3 text-[14px] font-[400] border-[1px] border-[#5519A3] rounded-[50px]">
               <span className="text-[#5519A3] text-xl">●</span> İXTİSASLARIMIZ
            </p>
            <h3 className="text-[48px] font-[600] mt-[12px]">Tədris Proqramlarımız</h3>
         </div>

         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10">
            {programs.map((item) => (
               <div key={item.id} className="relative">
                  <div className="inverted-education flex flex-col justify-center p-6 relative z-10">
                     <h5 className="text-[24px] font-[600] mb-6">{item.title}</h5>
                     <p className="text-base font-[400] w-[90%] mb-6">{item.desc}</p>
                     <div className="flex justify-between items-center">
                        <button className="bg-[#5519A3] px-10 py-3 rounded-[50px] border border-[#5519A3] hover:bg-white text-white hover:text-black transition-all duration-300 cursor-pointer text-base font-[500]">Müraciət Et</button>
                        <span className="mr-8 text-[48px] font-[600] text-[#010101]/70">{item.id}.</span>
                     </div>
                  </div>

                  <div className="absolute top-0 right-24 bg-white p-4 rounded-[20px] border-[1px] border-[#D1BAEF] z-20">
                     <img src={item.icon} alt={item.title} className="w-14 h-14" />
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Education;
