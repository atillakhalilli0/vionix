import React from "react";
import first from "../assets/qeydiyyat.svg";
import second from "../assets/konsultasiya.svg";
import third from "../assets/tedris2.svg";
import forth from "../assets/sertifikasiya.svg";
import fifth from "../assets/support.svg";

function Step() {
   const steps = [
      {
         id: "01",
         title: "Qeydiyyat",
         desc: "Sadə bir form dolduraraq təhsilə ilk addımını atırsan. Proses sürətli və rahatdır, cəmi bir neçə dəqiqə davam edir.",
         img: first,
      },
      {
         id: "02",
         title: "Konsultasiya",
         desc: "Mütəxəssislərimiz məqsədlərinə uyğun istiqamət göstərir. Hansı sahəyə fokuslanmaq istədiyini birlikdə seçirik.",
         img: second,
      },
      {
         id: "03",
         title: "Tədris",
         desc: "Peşəkar müəllimlərin dəstəyi ilə nəzəriyyəni praktik tapşırıqlarla birləşdirirsən. İntensiv dərslər real biliklər qazanmağa imkan verir.",
         img: third,
      },
      {
         id: "04",
         title: "Sertifikasiya",
         desc: "Təhsilini uğurla başa vurduqda rəsmi sertifikat əldə edirsən. Bu sənəd sənin biliklərini və bacarıqlarını təsdiqləyir.",
         img: forth,
      },
      {
         id: "05",
         title: "Dəstək",
         desc: "Mütəxəssislərimiz sənə iş axtarışında yol göstərir. CV hazırlanması, müsahibəyə hazırlıq və yönləndirmə ilə dəstək alırsan.",
         img: fifth,
      },
   ];

   return (
      <section>
         <div className="container mx-auto text-center">
            <p className="uppercase inline p-3 text-[14px] font-[400] border-[1px] border-[#5519A3] rounded-[50px]">
               <span className="text-[#5519A3] text-xl">●</span> SƏNİ NƏ GÖZLƏYİR?
            </p>
            <h3 className="text-[48px] font-[600] mt-[12px]">Hər Addımda Yanınızdayıq</h3>
         </div>

         <div className="container my-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map((step) => (
               <div key={step.id} className="group flex flex-col justify-center items-center text-center">
                  <div className="relative border-[1px] bg-white transition duration-300 group-hover:bg-[#6A1FCC] border-[#909090] rounded-full p-5 flex items-center justify-center">
                     <img className="scale-90 transition duration-300 group-hover:invert" src={step.img} alt={step.title} />
                     <span className="absolute text-[22px] -top-3 bg-white -right-3 border-[1px] w-12 h-12 rounded-full p-2 border-[#909090] font-bold">{step.id}</span>
                  </div>
                  <h5 className="text-[24px] font-[600] mt-4 ">{step.title}</h5>
                  <p className="text-[14px] font-[400] mt-2 w-[90%]">{step.desc}</p>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Step;
