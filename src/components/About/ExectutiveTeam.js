import React from 'react';
import avery from '../leadimg/avery.jpg'
import oz_santos from '../leadimg/oz_santos.jpeg'
import saloni from '../leadimg/saloni.png'

const executiveMembers = [
  {
    name: "Avery Micheals",
    role: "President",
    major: "Mechanical Engineering",
    imageUrl: avery,
  },
  {
    name: "Oz Santos",
    role: "Vice President",
    major: "Mechanical Engineering",
    imageUrl: oz_santos
  },
  {
    name: "Saloni Joshi",
    role: "Project Manager",
    major: "Computer Science + Business",
    imageUrl: saloni
  }
];

const ExecutiveTeam = () => {
  return (
    // from-gray-900 to-gray-800
    <section className="py-20 bg-gray-50  dark:bg-black dark:text-white ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">Executive Team</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {executiveMembers.map((member, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div className="h-80">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.major}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;