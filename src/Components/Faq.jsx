import React, { useState } from "react";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

function Faq() {
   const [activeIndex, setActiveIndex] = useState(null);

   const faqs = [
      {
         question: "Qeydiyyat üçün hər hansı yaş məhdudiyyəti varmı?",
         answer: "Kurslarımızda 15–65 yaş arası şəxslər iştirak edə bilər. İstər gənc, istərsə də karyerasını dəyişmək istəyənlər üçün tam uyğundur.",
      },
      {
         question: "Kursların müddəti nə qədərdir?",
         answer: "Tədris proqramlarımız 3–6 ay davam edir. Bu müddətdə tələbələr həm nəzəri, həm də praktiki biliklər əldə edirlər.",
      },
      {
         question: "Dərslər online keçirilir, yoxsa oflayn?",
         answer: "Bütün dərslər oflayn, sinif şəraitində keçirilir. Bu, müəllim və tələbə arasında daha effektiv ünsiyyət yaradır.",
      },
      {
         question: "Kursu bitirdikdən sonra diplom verilirmi?",
         answer: "Kursu bitirənlərə rəsmi diplom təqdim olunur. Bu diplom işə qəbul və gələcək karyera imkanlarında üstünlük qazandırır.",
      },
      {
         question: "Akademiya tərəfindən karyera dəstəyi göstərilirmi?",
         answer: "Tədris başa çatdıqdan sonra tələbələr karyera dəstəyi alırlar. CV hazırlığı, müsahibə təlimləri və iş tapmaqda yardım göstərilir.",
      },
   ];

   const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   return (
      <section className="py-32">
         <div className="container mx-auto text-center">
            <p className="uppercase inline p-3 text-[14px] font-[400] border border-[#5519A3] rounded-full">
               <span className="text-[#5519A3] text-xl">●</span> SUALIN VAR?
            </p>
            <h3 className="text-[48px] font-[600] mt-10">
               Tez-tez Verilən <span className="text-[#5519A3]">Suallar</span>
            </h3>
         </div>

         <div className="container mx-auto px-32 flex flex-col gap-6 mt-12">
            {faqs.map((faq, index) => (
               <div key={index} className="border border-[#D1BAEF] rounded-[24px] bg-white py-7 px-8 cursor-pointer transition-all duration-400" onClick={() => toggleFaq(index)}>
                  <div className="flex justify-between items-center">
                     <h6 className="text-[20px] font-[500]">{faq.question}</h6>
                     <div className={`w-8 h-8 flex items-center justify-center transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}>
                        <img src={activeIndex === index ? minus : plus} alt="toggle" className="w-8 h-8" />
                     </div>
                  </div>

                  <div className={`transition-all duration-400 overflow-hidden ${activeIndex === index ? "max-h-40 mt-4" : "max-h-0"}`}>
                     <p className="text-[#3A3A3A] text-base font-[500]">{faq.answer}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Faq;
