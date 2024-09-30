import { WhyJoin } from "../components/About/WhyJoin";
import YoutubeEmbed from "../YoutubeEmbeded";

export const HomePage = () => {
  return (
    <>
      <WhyJoin />
      <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-16 dark:bg-black"> 
        <h1 className="text-4xl font-bold py-8 md:py-14 text-center dark:text-white">
          Check out our latest Video
        </h1>
        <YoutubeEmbed embedId="OTfGrkzJBZI" />
      </div>
    </>
  );
};
