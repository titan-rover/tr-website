import React from 'react';
import { Link } from 'react-router-dom';
import navheader from './navheader.png'; // Updated file path
import logo from './logo.png'; // Ensure this is the correct path to your logo
import { IoSunny } from 'react-icons/io5';
import { IoMoon } from 'react-icons/io5';

export const Navbar = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  
  // const toggleMenu = () => {
  //   setIsMenuOpen(!set)
  // }
  return (
    <nav 
      className={`w-full shadow py-4 ${dark ? 'bg-black' : 'bg-white'} transition-colors duration-500`} // Keep navbar padding minimal
      style={{
        backgroundImage: dark ? 'none' : `url(${navheader})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <img className="w-52 h-auto" src={logo} alt="Logo" /> {/* Larger logo without affecting nav height */}
        </Link>
        <ul className={`flex space-x-4 text-sm flex-grow justify-center ${dark ? 'text-white' : 'text-white'}`}>
          <li className="hover:underline hover:text-[#FD7718] transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline hover:text-[#FD7718] transition-all duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline hover:text-[#FD7718] transition-all duration-300">
            <Link to="/alumni">Alumni</Link>
          </li>
        </ul>
        <button className={`py-2 px-4 rounded hover:bg-[#FD7718] transition-colors duration-300 ${dark ? 'bg-white text-black' : 'bg-[#1A173A] text-white'}`}>
          Donate
        </button>
        <button onClick={darkModeHandler} className={`ml-5 ${dark ? 'text-white' : 'text-black'}`}>
          {dark ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
        </button>
      </div>
    </nav>
  );
}
