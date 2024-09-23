import React from 'react';
import { Link } from 'react-router-dom';
import navheader from './navheader.png'; // Updated file path
import logo from './logo.png'; // Ensure this is the correct path to your logo
import { IoSunny, IoMoon, IoMenu, IoClose } from 'react-icons/io5';

export const Navbar = () => {
  const [dark, setDark] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); // State to track menu

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  return (
    <nav 
      className={`w-full shadow py-4 ${dark ? 'bg-black' : 'bg-white'} transition-colors duration-500`}
      style={{
        backgroundImage: dark ? 'none' : `url(${navheader})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <img className="w-52 h-auto" src={logo} alt="Logo" />
        </Link>

        {/* Mobile Dark Mode & Menu Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Dark mode button */}
          <button onClick={darkModeHandler} className={`${dark ? 'text-white' : 'text-black'}`}>
            {dark ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMenu} className={`${dark ? 'text-white' : 'text-black'}`}>
            {isMenuOpen ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-4 text-sm flex-grow justify-center ${dark ? 'text-white' : 'text-white'}`}>
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

        {/* Desktop Donate and Dark Mode */}
        <div className="hidden md:flex items-center space-x-4">
          <button className={`py-2 px-4 rounded hover:bg-[#FD7718] transition-colors duration-300 ${dark ? 'bg-white text-black' : 'bg-[#1A173A] text-white'}`}>
            Donate
          </button>

          <button onClick={darkModeHandler} className={`${dark ? 'text-white' : 'text-black'}`}>
            {dark ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <ul className={`md:hidden flex flex-col items-center space-y-4 py-4 ${dark ? 'text-white' : 'text-black'}`}>
          <li className="hover:underline hover:text-[#FD7718] transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline hover:text-[#FD7718] transition-all duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline hover:text-[#FD7718] transition-all duration-300">
            <Link to="/alumni">Alumni</Link>
          </li>
          <button className={`py-2 px-4 rounded hover:bg-[#FD7718] transition-colors duration-300 ${dark ? 'bg-white text-black' : 'bg-[#1A173A] text-white'}`}>
            Donate
          </button>
        </ul>
      )}
    </nav>
  );
};
