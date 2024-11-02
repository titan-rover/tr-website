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

        <div className="px-20 dark:bg-black dark:text-white py-10"> 

        <h1 class="text-4xl font-bold mb-4">Our Mission</h1>
          <div class="bg-sand-500 p-10 flex items-center">
          <img src={missionImage} alt="Rover on Mars" class="w-1/2 object-cover"></img>
          <div class="w-3/4 px-10">
          <p class="text-lg leading-snug text-left">We aim to prepare students in stem related fields with technical/innovative knowledge by experiential learning while inspiring newer generations about stem. Being in titan rover gives the opportunity for members to better themselves and their skill sets by working together to make a rover intended to compete at the mars society’s university rover challenge.
          </p>
          </div>
          </div>

          <div className="mb-12"></div> 

          <h1 className="text-4xl font-bold mt-6 mb-6">Our Team Structure</h1>
          <div className="px-20">
          <p className="text-lg mb-6 px-20 text-left">
          Titan Rover’s team is divided into five specialized subteams—Mechanical, Electrical, Controls, Business, and Life Sciences. Each subteam brings unique expertise, working together to ensure the success of our rover missions.
          </p>
         
          <h1 className="text-4xl font-bold text-left px-20">Subteams</h1>
          <SubteamSlider />

          </div>
      </div>    
    </>
  );
};
