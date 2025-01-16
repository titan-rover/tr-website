import React from 'react';
import avery from '../leadimg/avery.jpg';

const subTeams = [
  {
    name: "Mechanical",
    description: "Responsible for the structural design, chassis development, and mechanical systems integration of our rover.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    leads: [
      {
        name: "Allen Sia",
        role: "Project Manager",
        major: "Mechanical Engineering",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Daniel Lopez",
        role: "Mobility Lead",
        major: "Mechanical Engineering",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Vincent Lee",
        role: "Robotics Lead",
        major: "Mechanical Engineering",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Avery Micheals",
        role: "Lead Engineer",
        major: "Mechanical Engineering",
        imageUrl: avery
      },
      {
        name: "Paolo Madrigal",
        role: "Science Lead",
        major: "Mechanical Engineering",
        imageUrl: avery
      }
    ]
  },
  {
    name: "Controls",
    description: "Develops software for autonomous navigation, communication systems, and mission control interfaces.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    leads: [
      {
        name: "Joann Sum",
        role: "Controls Lead",
        major: "Computer Science",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      },
      {
        name: "Max Mascardo",
        role: "PCB Lead",
        major: "Computer Engineering",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      },
      {
        name: "Sachin Lodhi",
        role: "Autonomous Lead",
        major: "Computer Science",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      },
      {
        name: "Oyinkansola Olayinka",
        role: "UI Lead",
        major: "Computer Science",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      },
      {
        name: "AJ Osorio",
        role: "Comms/Robotics Lead",
        major: "Computer Engineering",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      },
      {
        name: "Cesar Rojas",
        role: "Mobility Lead",
        major: "Computer Engineering",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      }
    ]
  },
 
 
];

const SubTeams = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[rgba(19,65,117,0.46)] dark:from-[rgba(19,65,117,0.81)] to-[rgba(26,33,65,0.46)] dark:to-[rgba(26,33,65,0.56)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Sub-Teams</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Our team is divided into specialized sub-teams, each bringing unique expertise to ensure mission success.
          </p>
        </div>

        <div className="space-y-24 ">
          {subTeams.map((team, index) => (
            <div key={index} className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
              
              <div className="bg-[#D9D9D9] dark:bg-[#272727] rounded-2xl shadow-xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Team Info Section */}
                  <div className="relative lg:col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-gray-900/90"></div>
                    <img 
                      src={team.imageUrl} 
                      alt={team.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="text-white text-center">
                        <h3 className="text-4xl font-bold mb-4 tracking-tight">{team.name}</h3>
                        <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
                        <p className="text-lg text-white/90 leading-relaxed">{team.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Team Leads Section */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <h4 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                      <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">Team Leads</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {team.leads.map((lead, leadIndex) => (
                        <div 
                          key={leadIndex} 
                          className="group/card relative bg-gradient-to-r from-orange-100/10 to-orange-600/10  p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-0 group-hover/card:opacity-50 transition-opacity duration-300"></div>
                              <img 
                                src={lead.imageUrl} 
                                alt={lead.name}
                                className="relative w-16 h-16 rounded-full object-cover ring-2 ring-white"
                              />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 group-hover/card:text-orange-600 transition-colors duration-300">
                                {lead.name}
                              </p>
                              <p className="text-orange-600 text-sm font-medium mb-1">{lead.role}</p>
                              <p className="text-gray-500 text-sm">{lead.major}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubTeams;