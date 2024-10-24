import { WhyJoin } from "../components/About/WhyJoin";
import placeholder from '../components/placeholder.jpg';
import { Link } from "react-router-dom";
import TeamPng from '../components/TeamPng.png';

const HomeHdr1 = "Who We Are";
const HomePar1 = "Our Multidisciplinary Club Began As An Electrical Engineering Project. Over Time, Titan Rover Has Expanded To Include Students With Backgrounds In: Mechanical Engineering, Computer Engineering, Computer Science, Biology, Geology, Business, Chemistry, Photography, Film, Graphic Design, Marketing, Etc.";
const HomePar2 = "We Host Virtual Workshops And Meetings Throughout The Year To Teach Students Practical Skills And New Concepts To Include, But Not Limited To: 3D Printing, ROS, Coding On Arduinos And Raspberry Pis, And Soldering! Workshops Are Open To All So Keep Your Eye Out Throughout The Year.";
const HomePar3 = "If You Are Interested In Learning More About Titan Rover Or Desire To Expand Your Knowledge In STEM, Titan Rover Is The Organization For You!";
const LastWord = "here.";
const HomeHdr2 = "Our Goal";
const HomePar4 = "Our Goal Is To Prepare Students in STEM Related Fields With Technical/Innovative Knowledge By Experiential Learning While Inspiring Newer Generations About STEM. Being In Titan Rover Gives The Opportunity For Members To Better Themselves And Their Skill Sets By Working Together To Make A Rover Intended To Compete At The Mars Society's University Rover Challenge.";

export const HomePage = () => {
  return (
    <>
 {/* Hero section */}
<div className="relative w-full h-[500px] sm:h-[600px] md:h-[70vh] lg:h-[80vh] dark:bg-black mt-0">
  {/* Background image */}
  <img src={placeholder} alt="Titan Rover" className="w-full h-full object-cover" />
  
  {/* Overlay with heading */}
  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start text-left p-6 sm:p-8 md:p-16 lg:p-24 space-y-2 sm:space-y-4"> {/* Adjust space-y */}
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
      <span className="block md:hidden">University Rover Challenge</span> {/* Single line on mobile */}
      <span className="hidden md:block">University Rover<br />Challenge</span> {/* Two lines on desktop */}
    </h1>
    <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-light">
      Competitor Since 2014
    </p>
    <button className="bg-orange-500 text-white hover:bg-orange-300 py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded-lg font-medium text-base sm:text-lg md:text-xl lg:text-2xl transition-transform transform hover:scale-105">
      Join The Team
    </button>
  </div>
</div>





      {/* Main content section */}
      <div className="flex flex-col md:flex-row items-center md:items-start dark:bg-black dark:text-white ">
        {/* Text section */}
        <div className="md:w-3/5 pt-10 md:pt-20 px-5 md:px-20 pb-8 md:pb-13 text-left">
          <h1 className="text-5xl font-semibold text-center md:text-left mb-8 md:ml-8">{HomeHdr1}</h1>
          <p className="text-sm mb-6 text-center md:text-left">{HomePar1}</p>
          <p className="text-sm mb-6 text-center md:text-left">{HomePar2}</p>
          <p className="text-sm mb-6 text-center md:text-left">{HomePar3}</p>
          <p className="text-sm mb-6 text-center md:text-left">
            Learn more about the team and our history <Link to="/about" className="underline">{LastWord}</Link>
          </p>
        </div>

        {/* Image section */}
        <div className="md:w-2/5 max-w-xs mx-auto md:max-w-full  dark:bg-black dark:text-white">
          <img src={TeamPng} alt="Team" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Our Goal section */}
      <div className="px-5 md:px-[100px] py-10  dark:bg-black dark:text-white">
        <h1 className="font-semibold text-5xl text-center">{HomeHdr2}</h1>
        <p className="text-sm text-justify m-6">{HomePar4}</p>
      </div>

      {/* WhyJoin component */}
      <WhyJoin />
      
    </>
  );
};
