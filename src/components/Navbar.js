import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
      <nav className="w-full bg-white shadow">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4 py-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/alumni">Alumni</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }