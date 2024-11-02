import React from 'react';
import background from '../components/AlumniBackground.png';  
import team20192020 from '../components/2019-2020-team.png'; 
import team20182019 from '../components/2018-2019-team.png';
import team20172018 from '../components/2017-2018-team.png';
import team20162017 from '../components/2016-2017-team.png'; 

export const AlumniPage = () => {
   
    const yearData = [
        { year: '2019-2020', imgSrc: team20192020 }, 
        { year: '2018-2019', imgSrc: team20182019 },
        { year: '2017-2018', imgSrc: team20172018 },
        { year: '2016-2017', imgSrc: team20162017 } 
    ];

    return (
        <>

        {/* alumni hero section */}
            <header 
                className="relative bg-cover bg-center h-screen" 
                style={{ backgroundImage: `url(${background})` }} 
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Alumni</h1>
                </div>
            </header>


           {/* throughout the years section */}

            <section className="text-center py-8">
                <h2 className="text-3xl font-semibold">Titan Rover Through The Years</h2>
            </section>

            {/* <section className="flex flex-col space-y-8 max-w-4xl mx-auto">
                {yearData.map((data, index) => (
                    <div 
                        key={index} 
                        className={`rounded-lg shadow-md overflow-hidden ${
                            data.year === '2018-2019' || data.year === '2016-2017' ? 'bg-blue-200' : 'bg-white'
                        }`}
                    >
                        <h3 className="text-center text-xl font-medium py-4">{data.year}</h3>
                                  
                        <div className="w-full relative pb-[100%]">  
                            <img 
                                src={data.imgSrc} 
                                alt={`${data.year} team`} 
                                className="absolute top-0 left-0 w-full h-full object-contain"  // Use object-contain
                            />
                        </div>
                    </div>
                ))}
               
                <div className="h-32"></div>  
            </section> */}
        </>
    );
}










