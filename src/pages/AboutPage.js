import { SubteamSlider } from '../components/About/SubteamSlider';

export const AboutPage = () => {
  return (
    <>
        
        <div className="px-20">    
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