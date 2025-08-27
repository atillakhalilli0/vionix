import React from "react";
import Advantages from "./Advantages";
import Education from "./Education";
import Step from "./Step";
import Register from "./Register";
import About from "./About";
import Faq from "./Faq";
import Comments from "./Comments";
import lines1 from '../assets/lines1.svg'
import lines2 from '../assets/lines2.svg'
function Main() {
   return (
      <>
         <main className="relative">
            <img className="absolute right-0 top-[27%]" src={lines1} alt="line" />
            <img className="absolute right-0 top-[55%]" src={lines2} alt="line" />
            <div className="bg-white py-2">
               <Advantages />
            </div>
            <div>
               <Education />
               <Step />
               <Comments />
               <Register />
               <div className="bg-white py-2">
                  <About />
               </div>
               <Faq />
            </div>
         </main>
      </>
   );
}

export default Main;
