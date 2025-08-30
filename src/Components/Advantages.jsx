import React from "react";
import card from "../assets/advantagescard.png";
import karyera from "../assets/karyera.svg";
import tedris from "../assets/tedris.svg";
import telim from "../assets/telim.svg";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import star from "../assets/star.svg";

function Advantages() {
   return (
      <section id="advantages" className="mx-36">
         <div className="container mx-auto flex justify-between items-center py-16 gap-10">
            <div className="max-w-[600px] relative">
               <div className="inverted-advantages">
                  <img src={card} alt="card" />
               </div>
               <div className="bg-[#5519A3] px-5 py-4 w-[45%] h-[19%] rounded-[50px] absolute bottom-0 left-0 flex gap-5 items-center">
                  <div className="flex -space-x-8">
                     <img className="w-14 h-14 object-cover rounded-full border-2 border-white" src={user1} alt="user" />
                     <img className="w-14 h-14 object-cover rounded-full border-2 border-white" src={user2} alt="user" />
                     <img className="w-14 h-14 object-cover rounded-full border-2 border-white" src={user3} alt="user" />
                  </div>

                  <div>
                     <div className="flex gap-1">
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                     </div>
                     <p className="text-[14px] font-[400] text-white">Dəyərləndirmə</p>
                  </div>
               </div>
            </div>

            <div className="w-1/2">
               <p className="uppercase inline p-3 text-[14px] font-[400] border-[1px] border-[#5519A3] rounded-[50px]">
                  <span className="text-[#5519A3] text-xl">●</span> Üstünlüklərİmİz nədİr?
               </p>
               <h3 className="text-[48px] font-[600] mt-[12px]">Niyə Vionix?</h3>

               <div className="space-y-2">
                  <div className="flex items-start gap-4 py-4">
                     <div className="bg-[#6A1FCC] p-3 rounded-full flex items-center justify-center">
                        <img className="w-10" src={telim} alt="karyera" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <h6 className="text-lg font-semibold">Peşəkar Təlimçilər</h6>
                        <p className="text-base text-gray-600">
                           Sahəsində təcrübəli mütəxəssislər dərs zamanı sizi <br /> istiqamətləndirir. Onların dəstəyi ilə öyrənmə prosesiniz daha <br /> effektiv və məqsədyönlü olur.
                        </p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4 py-4">
                     <div className="bg-[#6A1FCC] p-3 rounded-full flex items-center justify-center">
                        <img className="w-10" src={tedris} alt="tedris" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <h6 className="text-lg font-semibold">Praktiki Tədris</h6>
                        <p className="text-base text-gray-600">
                           Dərslər yalnız nəzəriyyə ilə məhdudlaşmır, real layihələr <br /> üzərində işləmə imkanı yaradır. Bu yanaşma nəzəri <br /> biliklərinizi praktiki bacarıqlara çevirməyə kömək edir.
                        </p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4 py-4">
                     <div className="bg-[#6A1FCC] p-3 rounded-full flex items-center justify-center">
                        <img className="w-10" src={karyera} alt="telim" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <h6 className="text-lg font-semibold">Karyera İmkanları</h6>
                        <p className="text-base text-gray-600">
                           Kursu bitirdikdən sonra iş ilə təmin olunma və <br /> şəbəkələşmə dəstəyi təqdim olunur. Bu, karyera <br /> hədəflərinizə daha sürətli çatmağınıza şərait yaradır.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Advantages;
