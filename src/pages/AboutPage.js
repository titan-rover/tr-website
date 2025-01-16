import placeholder from '../components/placeholder.jpg';
import missionImage from '../components/Mission.png';
import electrical from '../components/electrical.png'
import science from '../components/science.png'
import mechanical from '../components/mechanical.png'
import controls from '../components/controls.png'
import business from '../components/business.png'

import PastRoversSlider from '../components/rovers/pastrover';

export const AboutPage = () => {
  return (
    <> 
       {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[70vh] dark:bg-black">
        <img
          src={placeholder}
          alt="Titan Rover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </section>

     {/* Our Mission Section */}
<section className="relative bg-gray-50 dark:bg-black dark:text-white py-16">
  <div className="container mx-auto px-6 md:px-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Text Content */}
      <div className="space-y-6">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          We aim to prepare students in STEM-related fields with technical and
          innovative knowledge by experiential learning, inspiring newer
          generations about STEM. Titan Rover gives members the opportunity to
          improve themselves and their skills by working together to make
          a rover intended to compete at the Mars Society’s University Rover
          Challenge.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative">
        <div className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-orange-500/30 to-yellow-500/10 blur-lg -z-10"></div>
        <img
          src={missionImage}
          alt="Rover on Mars"
          className="w-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</section>


   
    <section className="pb-10 pt-5 px-10 bg-gradient-to-b from-[rgba(19,65,117,0.46)] dark:from-[rgba(19,65,117,0.81)] to-[rgba(26,33,65,0.46)] dark:to-[rgba(26,33,65,0.56)]">
  <h1 className="text-4xl font-bold mt-6 mb-6 text-black dark:text-white">Sub Teams</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto">
    {/* Subteam Cards */}
    <div className="rounded-lg bg-[#D9D9D9] dark:bg-[#272727] shadow border-lg p-6">
      <img src={mechanical} alt="mech-img" />
      <h3 className="text-xl md:text-2xl font-bold p-2 text-black dark:text-white">Mechanical</h3>
      <p className="text-black dark:text-gray-300">
        Building the foundation. Engineers and designers in this department
        create the physical structure of the rover, including the chassis,
        suspension, wheels, science mechanism, and robotic arm and gripper.
      </p>
    </div>
    <div className="rounded-lg bg-[#D9D9D9] dark:bg-[#272727] shadow border-lg p-6">
      <img src={electrical} alt="elec-img" />
      <h3 className="text-xl md:text-2xl font-bold p-2 text-black dark:text-white">Electrical</h3>
      <p className="text-black dark:text-gray-300">
        Powering our mission. Electrical and computer engineers on this team
        design and build the electronic systems that keep our rover running,
        from circuit boards to battery management.
      </p>
    </div>
    <div className="rounded-lg bg-[#D9D9D9] dark:bg-[#272727] shadow border-lg p-6">
      <img src={controls} alt="controls-img" />
      <h3 className="text-xl md:text-2xl font-bold p-2 text-black dark:text-white">Controls</h3>
      <p className="text-black dark:text-gray-300">
        The brains behind our rover's operation. This team of computer
        scientists and engineers develops the software that brings our rover to
        life, including autonomous navigation, communication systems, and
        science instrument control.
      </p>
    </div>
    <div className="rounded-lg bg-[#D9D9D9] dark:bg-[#272727] shadow border-lg p-6">
      <img src={business} alt="business-img" />
      <h3 className="text-xl md:text-2xl font-bold p-2 text-black dark:text-white">Business</h3>
      <p className="text-black dark:text-gray-300">
        Fueling our success. Our business-minded team handles finances,
        marketing, and sponsorships, ensuring the smooth operation of our
        project.
      </p>
    </div>
    <div className="rounded-lg bg-[#D9D9D9] dark:bg-[#272727] shadow border-lg p-6">
      <img src={science} alt="science-img" />
      <h3 className="text-xl md:text-2xl font-bold p-2 text-black dark:text-white">Life Sciences</h3>
      <p className="text-black dark:text-gray-300">
        Uncovering the secrets of Mars. Biology, chemistry, and geology students
        collaborate to develop experiments that our rover will conduct on
        simulated Martian terrain, searching for signs of life and studying the
        planet's geology.
      </p>
    </div>
  </div>
</section>


    {/* past rovers section  */}
    <section>
      <PastRoversSlider />
    </section>

        
     
    </>
  );
};
