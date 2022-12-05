import React, { useState } from "react";
import './homepage.css';

function homepage() {

    
    return (
<>
  {/* Navigation */}
 
  {/* Hero */}
  <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-20 md:px-12 px-4 bg-secondary">
    <div className="md:flex-1 md:mr-10">
      <h1 className=" h1 font-pt-serif text-5xl font-bold mb-7">
      Penetration Testing Services
      </h1>
      <p className="font-pt-serif font-normal mb-7">
      As cyber-attacks become more frequent, targeted and sophisticated, a proactive, periodic approach to validating security controls and identifying vulnerabilities can reduce the likelihood and severity of an attacker successfully gaining entry into your network.
      </p>
      <div className="font-montserrat">
        <button className="bg-black px-6 py-4 g border-2 border-black border-solid text-white mr-2 mb-2">
          Talk to Us 
        </button>

      </div>
    </div>
    <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
    <div class="relative">
        <img src='my-app\src\components\homepage\dist\assets\Highlight1.svg' alt="" class="absolute -top-16 -left-10" />
      </div>
      <img src="https://www.getagency.com/static/landing/assets/img/Agency/img/brooke-cagle-xcgh5_-QIXc-unsplash.png" alt="Macbook" className="shadow-lg rounded " />
      <div className="relative">
        <img
          src="dist/assets/Highlight2.svg"
          alt=""
          className="absolute -bottom-10 -right-6"
        />
      </div>
    </div>
  </section>



  
  
</>

    


    );
}

export default homepage;
