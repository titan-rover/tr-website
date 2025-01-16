import { WhyJoin } from "../components/About/WhyJoin";
import placeholder from "../components/placeholder.jpg";
import { Link } from "react-router-dom";
import TeamPng from "../components/TeamPng.png";
import YoutubeEmbed from "../YoutubeEmbeded";

const HomeHdr1 = "Who We Are";
const HomePar1 =
  "Our Multidisciplinary Club Began As An Electrical Engineering Project. Over Time, Titan Rover Has Expanded To Include Students With Backgrounds In: Mechanical Engineering, Computer Engineering, Computer Science, Biology, Geology, Business, Chemistry, Photography, Film, Graphic Design, Marketing, Etc.";
const HomePar2 =
  "We Host Virtual Workshops And Meetings Throughout The Year To Teach Students Practical Skills And New Concepts To Include, But Not Limited To: 3D Printing, ROS, Coding On Arduinos And Raspberry Pis, And Soldering! Workshops Are Open To All So Keep Your Eye Out Throughout The Year.";
const HomePar3 =
  "If You Are Interested In Learning More About Titan Rover Or Desire To Expand Your Knowledge In STEM, Titan Rover Is The Organization For You!";
const LastWord = "here.";
const HomeHdr2 = "Our Goal";
const HomePar4 =
  "Our Goal Is To Prepare Students in STEM Related Fields With Technical/Innovative Knowledge By Experiential Learning While Inspiring Newer Generations About STEM. Being In Titan Rover Gives The Opportunity For Members To Better Themselves And Their Skill Sets By Working Together To Make A Rover Intended To Compete At The Mars Society's University Rover Challenge.";

export const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[70vh] lg:h-[80vh] dark:bg-black mt-0 pt-0">
        <img
          src={placeholder}
          alt="Titan Rover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start text-left px-6 sm:px-10 md:px-16 lg:px-24 space-y-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
            University Rover <br />
            Challenge
          </h1>
          <p className="text-white text-sm sm:text-lg md:text-xl font-light">
            Competitor Since 2014
          </p>
          <button className="bg-orange-500 text-white hover:bg-orange-400 py-2 px-6 rounded-lg font-medium text-base sm:text-lg transition-transform transform hover:scale-105">
            Join The Team
          </button>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-50 dark:bg-black dark:text-white">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">{HomeHdr1}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {HomePar1}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {HomePar2}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {HomePar3}
              </p>
              <Link
                to="/about"
                className="text-orange-500 hover:underline font-semibold"
              >
                Learn more about the team and our history {LastWord}
              </Link>
            </div>

            {/* Image Section */}
            <div>
              <img
                src={TeamPng}
                alt="Team"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="py-16 bg-white dark:bg-black dark:text-white">
        <div className="container mx-auto px-4 lg:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{HomeHdr2}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            {HomePar4}
          </p>
        </div>
      </section>

      {/* WhyJoin Component */}
      <WhyJoin />

      {/* Video Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 lg:px-20 text-center">
          <h2 className="text-4xl font-bold mb-8 dark:text-white">
            Check Out Our Latest Video
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <YoutubeEmbed embedId="OTfGrkzJBZI" />
          </div>
        </div>
      </section>
    </>
  );
};
