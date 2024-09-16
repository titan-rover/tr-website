import React from "react";
import { Link } from 'react-router-dom';
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";




export const Footer = () => {
  return (
    <footer className="bg-[#171E3D] text-white py-4 text-center">
      <h1 className="text-3xl ">Contact Us</h1>
      <p className="py-1">Email: titanrover04@gmail.com</p>
      {/* link google form */}
     
      <Link to="/contact" className="text-blue-500 hover:underline">
        Contact Form
      </Link>
      <div className="flex items-center justify-center  text-3xl space-x-2.5"> 
        <a className="" href="https://www.instagram.com/titanrover/" target="_blank" rel="noopener noreferrer"> 
        <PiInstagramLogoFill />
        </a>
        <a href="https://www.youtube.com/@titanrovercsuf3885?app=desktop" target="_blank" rel="noopener noreferrer"> 
        <IoLogoYoutube />
        </a>
      <a href="https://www.linkedin.com/company/titan-rover" target="_blank" rel="noopener noreferrer"> 
      <FaLinkedin />
      </a>
     
    
      </div>
    </footer>
  );
};

