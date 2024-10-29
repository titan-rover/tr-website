import Team_2016_17 from '../components/2016-2017-team.png';
const Members_2016_17 = "Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, Joann Sum, ";
export const AlumniPage = () => {
    return (
        // <>
        // <h1>alumni page</h1>
        // </>
        <AlumniCard4/>
    );
};

export const AlumniCard4 = () => {
    return(
        <div className="m-auto px-30 py-20 grid justify-center bg-blue-200">
            {/*Text Section*/}
            <h1 className='mb-5 text-5xl text-center'>2016-2017</h1>
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
        </div>
    );
};