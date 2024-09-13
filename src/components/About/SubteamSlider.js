import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Linkedin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const teams = [
  {
    name: "Mechanical",
    description: "Building the foundation. Engineers and designers in this department create the physical structure of the rover, including the chassis, suspension, wheels, science mechanism and robotic arm and gripper.",
    image: "dev-team.jpg",
    leads: [
      { image: "lead1.jpg", linkedin: "https://linkedin.com/in/lead1" },
      { image: "lead2.jpg", linkedin: "https://linkedin.com/in/lead2" }
    ]  },
  {
    name: "Controls",
    description: "The brains behind our rover's operation. This team of computer scientists and engineers develops the software that brings our rover to life, including autonomous navigation, communication systems, and science instrument control.",
    image: "design-team.jpg",
    leads: ["lead3.jpg", "lead4.jpg"]
  },
  {
    name: "Science",
    description: "Uncovering the secrets of Mars. Biology, chemistry, and geology students collaborate to develop experiments that our rover will conduct on simulated Martian terrain, searching for signs of life and studying the planet's geology.",
    image: "design-team.jpg",
    leads: [
      { image: "lead1.jpg", linkedin: "https://linkedin.com/in/lead1" },
      { image: "lead2.jpg", linkedin: "https://linkedin.com/in/lead2" }
    ]  },
  {
    name: "Business",
    description: "Fueling our success. Our business-minded team handles finances, marketing, and sponsorships, ensuring the smooth operation of our project.",
    image: "design-team.jpg",
    leads: [
      { image: "lead1.jpg", linkedin: "https://linkedin.com/in/lead1" },
      { image: "lead2.jpg", linkedin: "https://linkedin.com/in/lead2" }
    ]  },
  {
    name: "Electrical",
    description: "Powering our mission. Electrical and computer engineers on this team design and build the electronic systems that keep our rover running, from circuit boards to battery management.",
    image: "design-team.jpg",
    leads: [
      { image: "lead1.jpg", linkedin: "https://linkedin.com/in/lead1" },
      { image: "lead2.jpg", linkedin: "https://linkedin.com/in/lead2" }
    ]  },
];

export const SubteamSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current && paginationRef.current) {
      prevRef.current.style.display = 'block';
      nextRef.current.style.display = 'block';
    }
  }, []);

  return (
    <div className="relative w-full text-left px-20 sm:px-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          el: paginationRef.current,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.pagination.el = paginationRef.current;
        }}

        className="pb-8"
      >
        {teams.map((team, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-row gap-6 px-4">
              <div className="w-2/3 p-6 space-y-6">
                <h2 className="text-3xl font-bold">{team.name}</h2>
                <p className="text-lg leading-relaxed">{team.description}</p>
                <div className="flex space-x-4 justify-center">
                  {team.leads.map((lead, idx) => (
                    <div key={idx} className="flex flex-col items-center px-10">
                      <img src={lead.image} alt={`Lead ${idx + 1}`} className="w-12 h-12 rounded-full mb-2" />
                      <a href={lead.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/3 p-4">
                <img src={team.image} alt={team.name} className="rounded-xl" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-custom absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4" />
      </Swiper>

      <div
        ref={prevRef}
        className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl z-10 cursor-pointer px-5"
      >
        {'<'}
      </div>

      <div
        ref={nextRef}
        className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl z-10 cursor-pointer px-5"
      >
        {'>'}
      </div>

      <div 
        ref={paginationRef}
        className="swiper-pagination-custom absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center mt-4"
      />
    </div>
  );
};