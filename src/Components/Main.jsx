import React from "react";
import Advantages from "./Advantages";
import Education from "./Education";
import Step from "./Step";
import Register from "./Register";
import About from "./About";
import Faq from "./Faq";
import Comments from "./Comments";

function Main() {
   return (
      <>
         <main>
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
