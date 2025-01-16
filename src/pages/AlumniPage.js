import React from 'react';
// import background from '../components/AlumniBackground.png';  
import team20192020 from '../components/2019-2020-team.png'; 
import team20182019 from '../components/2018-2019-team.png';
import team20172018 from '../components/2017-2018-team.png';
import team20162017 from '../components/2016-2017-team.png'; 
import placeholder from '../components/placeholder.jpg';



import Team_2016_17 from '../components/2016-2017-team.png';
const Members_2016_17 = "Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, ";

export const AlumniPage = () => {
   
    const yearData = [
        { year: '2019-2020', imgSrc: team20192020 }, 
        { year: '2018-2019', imgSrc: team20182019 },
        { year: '2017-2018', imgSrc: team20172018 },
        { year: '2016-2017', imgSrc: team20162017 } 
    ];

    return (
        <>

         {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[70vh] dark:bg-black">
        <img
          src={placeholder}
          alt="Titan Rover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            Alumni 
          </h1>
        </div>
      </section>


        

           {/* throughout the years section */}

            <section className="text-center dark:bg-black dark:text-white">
                <h2 className="text-3xl font-semibold py-4">Titan Rover Through The Years</h2>
            </section>

            <AlumniCard4 />

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



export const AlumniCard4 = () => {
    return(
        <div className="m-auto py-20 grid justify-center dark:bg-black dark:text-white">


            {/* 2016 - 2017 */}

            {/*Text Section*/}
            <h1 className='mb-5 text-2xl text-center'>2016-2017</h1>
            {/*FlipCard Section*/}
            <div className="group [perspective:1000px]">
                <div className="relative min-h-[500px] min-w-[900px] shadow-lg transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/*Front*/}
                    <div className="absolute h-full w-full inset-0 rounded-lg [backface-visibility:hidden]">
                        <img src={Team_2016_17} alt="Team 2016-2017" className="w-full h-full"/>
                    </div>
                    {/*Back*/}
                    <div className="absolute h-full w-full inset-0 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center bg-amber-500">
                        <div className='py-9'>
                            <p className="text-5xl">2016-2017 Members</p>
                            <p className="text-4xl mx-20"> {Members_2016_17} </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* 2017 - 2018 */}

            {/*Text Section*/}
             <h1 className='mb-5 text-2xl text-center py-6'>2017-2018</h1>
            {/*FlipCard Section*/}
            <div className="group [perspective:1000px]">
                <div className="relative min-h-[500px] min-w-[900px] shadow-lg transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/*Front*/}
                    <div className="absolute h-full w-full inset-0 rounded-lg [backface-visibility:hidden]">
                        <img src={team20172018} alt="Team 2016-2017" className="w-full h-full"/>
                    </div>
                    {/*Back*/}
                    <div className="absolute h-full w-full inset-0 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center bg-amber-500">
                        <div className='py-9'>
                            <p className="text-5xl">2017-2018 Members</p>
                            <p className="text-4xl mx-20"> {Members_2016_17} </p>
                        </div>
                    </div>
                </div>
            </div>

            


         {/* 2018 - 2019 */}
            {/*Text Section*/}
            <h1 className='mb-5 text-2xl text-center py-6'>2018-2019</h1>
            {/*FlipCard Section*/}
            <div className="group [perspective:1000px]">
                <div className="relative min-h-[500px] min-w-[900px] shadow-lg transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/*Front*/}
                    <div className="absolute h-full w-full inset-0 rounded-lg [backface-visibility:hidden]">
                        <img src={team20192020} alt="Team 2016-2017" className="w-full h-full"/>
                    </div>
                    {/*Back*/}
                    <div className="absolute h-full w-full inset-0 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center bg-amber-500">
                        <div className='py-9'>
                            <p className="text-5xl">2016-2017 Members</p>
                            <p className="text-4xl mx-20"> {Members_2016_17} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        
    );
};







