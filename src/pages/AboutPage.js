import { SubteamSlider } from '../components/About/SubteamSlider';
import placeholder from '../components/placeholder.jpg';
import missionImage from '../components/Mission.png';
import electrical from '../components/electrical.png'
import science from '../components/science.png'
import mechanical from '../components/mechanical.png'
import controls from '../components/controls.png'
import business from '../components/business.png'

export const AboutPage = () => {
  return (
    <>
        <div className="relative w-full h-[500px] dark:bg-black">
          <img src={placeholder} alt="Titan Rover" className="w-full h-full object-cover" />
          
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold bg-black bg-opacity-50">
            About Us
          </h1>
        </div>

      {/* our mission section  */}

        <div className="px-4 md:px-20 dark:bg-black dark:text-white py-10">
        <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
        <div className="bg-sand-500 p-6 md:p-10 flex flex-col md:flex-row items-center">
          <img src={missionImage} alt="Rover on Mars" className="w-full md:w-1/2 object-cover mb-4 md:mb-0" />
          <div className="w-full md:w-3/4 md:px-10 text-left">
            <p className="text-lg leading-snug">
              We aim to prepare students in STEM-related fields with technical and innovative knowledge by experiential learning, inspiring newer generations about STEM. Titan Rover gives members the opportunity to improve themselves and their skills by working together to make a rover intended to compete at the Mars Society’s University Rover Challenge.
            </p>
          </div>
        </div>

        


    {/* our team structure */}

    <section className='pb-10 pt-5'> 
      <h1 className="text-4xl font-bold mt-6 mb-6 ">Sub Teams</h1> 
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto'>
        {/* subteam cards */}
          <div className='border border-black border-lg p-6'> 
              <img src={mechanical} />
              <h3 className='text-xs md:text-xl font-bold p-2'>Mechanical</h3>
              <p>
              Building the foundation. Engineers and designers in this department create the physical structure of the rover, 
              including the chassis, suspension, wheels, science mechanism and robotic arm and gripper.
              </p>
          </div>
          <div className='border border-black border-lg p-6'> 
              <img src={electrical} />
              <h3 className='text-xs md:text-xl font-bold p-2' >Electrical</h3>
              <p>
              Powering our mission. Electrical and computer engineers on this team design and build the electronic systems that keep our rover running, 
              from circuit boards to battery management.

              </p>
          </div>

          <div className='border border-black border-lg p-6'> 
              <img src={controls} />
              <h3 className='text-xs md:text-xl font-bold p-2' >Controls</h3>
              <p>
              The brains behind our rover's operation. This team of computer scientists and engineers develops the software that brings our rover to life, including autonomous navigation, 
              communication systems, and science instrument control.
              </p>
          </div>
           <div className='border border-black border-lg p-6'> 
              <img src={business} />
              <h3 className='text-xs md:text-xl font-bold p-2' >Business</h3>
              <p>
              Fueling our success. Our business-minded team handles finances, marketing, and sponsorships, ensuring the smooth operation of our project.
              </p>
          </div>
          <div className='border border-black border-lg p-6'> 
              <img src={science} />
              <h3 className='text-xs md:text-xl font-bold p-2' >Life Sciences</h3>
              <p>
              Uncovering the secrets of Mars. Biology, chemistry, and geology students collaborate to develop experiments that 
              our rover will conduct on simulated Martian terrain, searching for signs of life and studying the planet's geology.
              </p>
          </div>

      </div>

    </section>
        
      </div>    
    </>
  );
};
