import React from 'react';
import cutt from '../../../assets/cutt.jpg';
import french from '../../../assets/french.jpg';
import america from '../../../assets/america.jpg';
import thirty from '../../../assets/thirty.jpg';
import Marquee from "react-fast-marquee";

const TopShows = () => {
    return (
        <div className=' text-white py-3'>
            <Marquee speed={60} pauseOnHover={true}>
                <div className='grid lg:grid-cols-5 gap-3 text-center'>
                    <div className='w-64 p-3 mb-2 border bg-red-300 flex flex-col rounded-md'>
                        <img className="h-32 w-32 rounded-full mx-auto" src={america} alt="" />
                        <h1 className='text-2xl my-2 text-blue-600'> America's Test Kitchen</h1>
                        <h3>Julia Child isn't the only PBS cooking institution. "America's Test Kitchen," which debuted in 2001 and has aired a remarkable 500 episodes and counting, has been on the TV screens of American kitchens for more than twice as long as Child was.
                        </h3>
                        <button className="btn btn-secondary w-full mt-auto">Watch Live</button>
                    </div>
                    <div className='w-64 p-3 mb-2 bg-purple-400 flex flex-col rounded-md'>
                        <img className="h-32 w-32 rounded-full mx-auto" src={cutt} alt="" />
                        <h1 className='text-2xl my-2 text-blue-600'>Cutthroat Kitchen</h1>
                        <h3>Alton Brown is going to make several appearances on this list, but we'll dig more into that when we get to his signature show. For now, we're going to look at the extremely fun and innovative cooking competition he hosted that is aptly titled "Cutthroat Kitchen.
                        </h3>
                        <button className="btn btn-secondary w-full mt-auto">Watch Live</button>
                    </div>
                    <div className='w-64 p-3 mb-2 bg-orange-200 flex flex-col rounded-md'>
                        <img className="h-32 w-32 rounded-full mx-auto" src={thirty} alt="" />
                        <h1 className='text-2xl my-2 text-blue-600'> 30 Minute Meals</h1>
                        <h3>Rachael Ray has long been one of the more down-to-earth celebrity chefs, someone you could actually imagine being your friend and neighbor. Her approachable nature shines through in everything she does, particularly her long-running show "30 Minute Meals.
                        </h3>
                        <button className="btn btn-secondary w-full mt-auto">Watch Live</button>
                    </div>
                    <div className='w-64 p-3 mb-2 bg-cyan-500 flex flex-col rounded-md'>
                        <img className="h-32 w-32 rounded-full mx-auto" src={thirty} alt="" />
                        <h1 className='text-2xl my-2 text-blue-600'> The Cooking Show</h1>
                        <h3>Rachael Ray has long been one of the more down-to-earth celebrity chefs, someone you could actually imagine being your friend and neighbor. Her approachable nature shines through in everything she does, particularly her long-running show "30 Minute Meals.
                        </h3>
                        <button className="btn btn-secondary w-full mt-auto">Watch Live</button>
                    </div>
                    <div className='w-64 p-3 mb-2 bg-lime-300 flex flex-col rounded-md'>
                        <img className="h-32 w-32 rounded-full mx-auto" src={french} alt="" />
                        <h1 className='text-2xl my-2 text-blue-600'>The French Chef</h1>
                        <h3>"The French Chef" was bound to be included here just out of pure reverence for Julia Child's contributions to the cooking show genre, but it goes beyond that.
                        </h3>
                        <button className="btn btn-secondary w-full mt-auto">Watch Live</button>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default TopShows;