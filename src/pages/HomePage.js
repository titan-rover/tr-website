import { WhyJoin } from "../components/About/WhyJoin";
import YoutubeEmbed from "../YoutubeEmbeded";

export const HomePage = () => {
	

	return (
		<>
			{/* <h1>home page</h1> */}
			<WhyJoin />


			
			<div className= "flex flex-col items-center py-8  md:py-5 md:px-10 dark:bg-black"> 
				<h1 className="text-4xl font-bold py-8 md:py-14 text-center dark:text-white">
				Check out our latest Video
				</h1>
				<YoutubeEmbed embedId="OTfGrkzJBZI" />
			</div>
		</>


		
	)
}