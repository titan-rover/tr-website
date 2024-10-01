import { SubteamSlider } from '../components/About/SubteamSlider';
import placeholder from '../components/placeholder.jpg';

export const AboutPage = () => {
  return (
    <>
        <div className="relative w-full h-[500px] ">
          <img src={placeholder} alt="Titan Rover" className="w-full h-full object-cover" />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold bg-black bg-opacity-50">
            About Us
          </h1>
        </div>

        <div className="px-20 dark:bg-black dark:text-white">    
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
