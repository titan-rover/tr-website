import { WhyJoin } from "../components/About/WhyJoin";
import { Link } from "react-router-dom";
import TeamPng  from '../components/TeamPng.png'; 

const HomeHdr1 = "Who We Are";
const HomePar1 = "Our Multidisciplinary Club Began As An Electrical Engineering Project. Over Time, Titan Rover Has Expanded To Include Students With Backgrounds In: Mechanical Engineering, Computer Engineering, Computer Science, Biology, Geology, Business, Chemistry, Photography, Film, Graphic Design, Marketing, Etc.";
const HomePar2 = "We Host Virtual Workshops And Meetings Throughout The Year To Teach Students Practical Skills And New Concepts To Include, But Not Limited To: 3D Printing, ROS, Coding On Arduinos And Raspberry Pis, And Soldering! Workshops Are Open To All So Keep Your Eye Out Throughout The Year.";
const HomePar3 ="If You Are Interested In Learning More About Titan Rover Or Desire To Expand Your Knowledge In STEM, Titan Rover Is The Organization For You!";
const HomeLink1 = "learn more about the team and our history ";
const LastWord = "here.";
const HomeHdr2 = "Our Goal";
const HomePar4 = "Our Goal Is To Prepare Students in STEM Related Fields With Technical/Innovative Knowledge By Experiential Learning While Inspiring Newer Generations About STEM. Being In Titan Rover Gives The Opportunity For Members To Better Themselves And Their Skill Sets By Working Together To Make A Rover Intended To Compete At The Mars Society's University Rover Challenge.";

export const HomePage = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row min-[900px]:h-[500px] min-[2000px]:h-[1000px]">
				<div className = "md:w-3/5 pt-20 pl-20 pb-13 text-left">
					<h1 className ="text-5xl font-semibold ml-8 mb-10 min-[2500px]:text-7xl min-[2800px]:text-9xl">{HomeHdr1}</h1>
					<p className = "text-sm m-6 min-[2500px]:text-2xl min-[2800px]:text-4xl">{HomePar1}</p>
					<p className = "text-sm m-6 min-[2500px]:text-2xl min-[2800px]:text-4xl">{HomePar2}</p>
					<p className = "text-sm m-6 min-[2500px]:text-2xl min-[2800px]:text-4xl">{HomePar3}</p>
					<p className = "text-xs font-medium mt-10 ml-15 min-[2500px]:text-xl min-[2800px]:text-2xl">{HomeLink1} <Link to="/about" className="underline"> {LastWord} </Link> </p>
				</div>
				<div className="md:w-2/5">
						<img src={TeamPng} alt="Team" className="w-full h-full object-cover"/>

				</div>
			</div>

			<div className="p-[100px]">
				<h1 className="font-semibold text-5xl text-center min-[2500px]:text-7xl min-[2800px]:text-9xl">{HomeHdr2}</h1>
				<p className="text-sm text-justify m-6 min-[2500px]:text-2xl min-[2800px]:text-5xl">{HomePar4}</p>
			</div>

			<WhyJoin />
		</>
	)
}