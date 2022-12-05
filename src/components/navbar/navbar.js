import React, { useState } from "react";
import Logo from './logo.webp';
import './navbar.css'
import Menu from './Menu.svg'

export default function navbar() {


    return (

      <>
        <nav className="fixed flex justify-between py-4 w-full lg:px-20 md:px-12 px-4 content-center bg-white ">
    <div className="flex items-center">
      <img src={Logo} alt="Logo" className="image" />
    </div>
    <ul className="font-montserrat items-center hidden md:flex">
      <li className="mx-3 ">
        <a className="growing-underline" href="howitworks">
       
        </a>
      </li>
      <li className="growing-underline mx-3">
        <a href="features"></a>
      </li>
      <li className="growing-underline mx-3">
        <a href="pricing"></a>
      </li>
    </ul>
    <div className="font-montserrat hidden md:block">

      <button className="py-3 px-6 text-white bg-black rounded-1xl">
        Contact Us
      </button>
    </div>
    <div id="showMenu" className=" menu md:hidden">
      <img src={Menu} alt="Menu icon" />
    </div>
  </nav>
  <div
    id="mobileNav"
    className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down"
  >
    <div id="hideMenu" className="flex justify-end">
      <img src="dist/assets/logos/Cross.svg" alt="" className="h-16 w-16" />
    </div>
    <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
      <li className="my-6">
        <a href="howitworks"></a>
      </li>
      <li className="my-6">
        <a href="features"></a>
      </li>
      <li className="my-6">
        <a href="pricing"></a>
      </li>
    </ul>
  </div>

  </>
    );
}
