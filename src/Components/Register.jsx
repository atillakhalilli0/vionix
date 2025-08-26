import React from "react";

function Register() {
   return (
      <section className="my-32">
         <div className="container mx-auto text-center bg-white/80 rounded-[30px] py-16">
            <p className="uppercase inline p-3 text-[14px] font-[400] border-[1px] border-[#5519A3] rounded-[50px]">
               <span className="text-[#5519A3] text-xl">●</span> QEYDİYYAT
            </p>
            <h4 className="text-[48px] font-[600] mt-10">Bizə Müraciət Et və Öndə Ol</h4>
            <p className="text-base font-[400] w-[50%] mx-auto">Vionix Academy-də sən də yerini ayır və karyerana doğru ilk addımı at. Seçdiyin kurs üzrə peşəkar təlimçilərlə bilik və bacarıqlarını inkişaf etdir. İndi qeydiyyatdan keçərək gələcəyini formalaşdırmaq fürsətini qaçırma.</p>
            <div className="flex gap-4 mt-6 justify-center">
               <button className="px-16 py-3 bg-[#6A1FCC] border-[1px] border-[#6A1FCC] text-white hover:text-[#6A1FCC] font-medium rounded-full hover:bg-white transition duration-300 cursor-pointer">Müraciət et</button>

               <button className="flex items-center gap-2 px-16 py-3 border-[1px] border-[#6A1FCC] text-[#6A1FCC] font-medium rounded-full hover:bg-[#6A1FCC] hover:text-white transition duration-300 cursor-pointer">
                  Kurslara bax
                  <span className="flex items-center">
                     <svg width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M17.4699 5.094C17.6108 4.95317 17.8018 4.87405 18.0009 4.87405C18.2001 4.87405 18.3911 4.95317 18.5319 5.094C18.6728 5.23483 18.7519 5.42584 18.7519 5.625C18.7519 5.82416 18.6728 6.01517 18.5319 6.156L5.78195 18.906C5.71222 18.9757 5.62943 19.031 5.53832 19.0688C5.44721 19.1065 5.34956 19.1259 5.25095 19.1259C5.15233 19.1259 5.05468 19.1065 4.96357 19.0688C4.87246 19.031 4.78968 18.9757 4.71995 18.906C4.65022 18.8363 4.5949 18.7535 4.55716 18.6624C4.51942 18.5713 4.5 18.4736 4.5 18.375C4.5 18.2764 4.51942 18.1787 4.55716 18.0876C4.5949 17.9965 4.65022 17.9137 4.71995 17.844L17.4699 5.094Z"
                           fill="currentColor"
                        />
                        <path
                           d="M18.5001 6H8.7876C8.58869 6 8.39792 5.92098 8.25727 5.78033C8.11662 5.63968 8.0376 5.44891 8.0376 5.25C8.0376 5.05109 8.11662 4.86032 8.25727 4.71967C8.39792 4.57902 8.58869 4.5 8.7876 4.5H19.2501C19.449 4.5 19.6398 4.57902 19.7804 4.71967C19.9211 4.86032 20.0001 5.05109 20.0001 5.25V15.75C20.0001 15.9489 19.9211 16.1397 19.7804 16.2803C19.6398 16.421 19.449 16.5 19.2501 16.5C19.0512 16.5 18.8604 16.421 18.7198 16.2803C18.5791 16.1397 18.5001 15.9489 18.5001 15.75V6Z"
                           fill="currentColor"
                        />
                     </svg>
                  </span>
               </button>
            </div>
         </div>
      </section>
   );
}

export default Register;
