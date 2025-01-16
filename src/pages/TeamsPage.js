import React from "react";
import placeholder from '../components/placeholder.jpg'
import SubTeams from "../components/About/SubTeams";


import ExecutiveBoard from "../components/About/ExectutiveTeam";
export const TeamsPage = () => { 

    return (
        <>
        <section className="relative w-full h-[500px] md:h-[70vh] dark:bg-black">
        <img
          src={placeholder}
          alt="Titan Rover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            Teams 
          </h1>
        </div>
      </section>

        {/* ExecutiveBoard Section */}
       <section> 
        <ExecutiveBoard />
       </section>

       {/* our teams strucute */}
       {/* <section >
            <h1 className="text-4xl font-bold mt-6 mb-6 ">Our Team structure</h1> 
            <p className="text-xs md:text-xl">
                Titan Rover’s team is divided into five specialized subteams—Mechanical, Electrical, Controls, Business, and Life Sciences. 
                Each subteam brings unique expertise, working together to ensure the success of our rover missions.
            </p>

        </section> */}

        {/* subteams section */}

        <section>
            <SubTeams />

        </section>

        </>
    )
};
