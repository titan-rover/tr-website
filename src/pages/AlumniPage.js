import React from 'react';
import background from '../components/AlumniBackground.png';  
import team20192020 from '../components/2019-2020-team.png'; 
import team20182019 from '../components/2018-2019-team.png';
import team20172018 from '../components/2017-2018-team.png';
import team20162017 from '../components/2016-2017-team.png'; 

export const AlumniPage = () => {
   
    const yearData = [
        { year: '2019-2020', imgSrc: team20192020, bgColor: 'bg-white' }, 
        { year: '2018-2019', imgSrc: team20182019, bgColor: 'bg-blue-200' },
        { year: '2017-2018', imgSrc: team20172018, bgColor: 'bg-white' },
        { year: '2016-2017', imgSrc: team20162017, bgColor: 'bg-blue-200' }
    ];

    return (
        <>
            <header 
                className="relative bg-cover bg-center h-screen" 
                style={{ backgroundImage: `url(${background})` }} 
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Alumni</h1>
                </div>
            </header>

            <section className="text-center py-8">
                <h2 className="text-3xl font-semibold">Titan Rover Through The Years</h2>
            </section>

            {yearData.map((data, index) => (
                <section key={index} className={`${data.bgColor} w-full`}>
                    <div className="flex flex-col max-w-4xl mx-auto py-4"> 
                        <div className="rounded-lg shadow-md overflow-hidden">
                            <h3 className="text-center text-2xl font-medium py-0 mb-0"> 
                                {data.year}
                            </h3>
                            
                            <div className="w-full relative pb-[100%] focus:outline-none"> 
                                <img 
                                    src={data.imgSrc} 
                                    alt={`${data.year} team`} 
                                    className="absolute top-0 left-0 w-full h-full object-contain border-none focus:outline-none"  
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <div className="h-32"></div>
        </>
    );
}








