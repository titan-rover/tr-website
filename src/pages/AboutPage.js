import { SubteamSlider } from '../components/About/SubteamSlider';
import placeholder from '../components/placeholder.jpg';
import missionImage from '../components/Mission.png';

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

          <div className=' p-2 px-5 py-5 bg-cover bg-gradient-to-b from-[rgba(19,65,117,0.46)] dark:from-[rgba(19,65,117,0.81)] to-[rgba(26,33,65,0.46)] dark:to-[rgba(26,33,65,0.56)] mh-screen '>

          <h1 className="text-4xl font-bold mt-6 mb-6 ">Our Team Structure</h1>
          <div className="px-20">
          <p className="text-lg mb-6 px-20 text-left">
          Titan Rover’s team is divided into five specialized subteams—Mechanical, Electrical, Controls, Business, and Life Sciences. Each subteam brings unique expertise, working together to ensure the success of our rover missions.
          </p>
         
          <h1 className="text-4xl font-bold text-left px-20">Subteams</h1>
          <SubteamSlider />
          </div>
          

          </div>

        
      </div>    
    </>
  );
};
