import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="bg-[#171E3D] text-white py-4 text-center dark:bg-black">
			<h1 className="text-3xl ">Contact Us</h1>
			<p className="py-1">Email: titanrover04@gmail.com</p>
			{/* link google form */}

			<Link to="/contact" className="text-blue-500 hover:underline">
				Contact Form
			</Link>
			<div className="flex items-center justify-center  text-3xl space-x-2.5 pt-1">
				<a
					className="hover:text-[#FD7718]"
					href="https://www.instagram.com/titanrover/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<PiInstagramLogoFill />
				</a>
				<a
					className="hover:text-[#FD7718]"
					href="https://www.youtube.com/@titanrovercsuf3885?app=desktop"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IoLogoYoutube />
				</a>
				<a
					className="hover:text-[#FD7718]"
					href="https://www.linkedin.com/company/titan-rover"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
			</div>
		</footer>
	);
};
