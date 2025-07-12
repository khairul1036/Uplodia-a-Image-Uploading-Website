import React from 'react';
import img from '../../assets/profile.jpg'
import Slider from '../Homepage Component/Slider';

const Home = () => {
    return (
        <div className='py-20 -z-10  bg-[#E0E7FF]'>
            <div className="full-hero w-11/12 mx-auto flex md:flex-row flex-col items-center py-20 justify-between">
                <div className="text-sec space-y-4 md:w-[43%] w-full">
                    <div className='text-6xl font-bold text-[#4F46E5]'>Image and Video API Platform</div>
                    <div className='text-2xl font-bold '>Visualize Engaging
                        Experiences</div>
                    <div className='text-xl font-semibold'>Trusted by 2 million developers and 10,000
                        enterprise and hyper-growth companies as
                        a critical part of their tech stack.</div>
                    <div className="button">
                         <button className='btn-outline btn bg-[#2563EB] text-[#ffffff]'>Get Started</button>
                    </div>
                </div>
                <div className="img-sec w-[200px] h-[100px]  md:w-[650px] md:h-[450px]  border border-amber-400 ">
                       <img src={img} className='w-[200px] h-[100px]  md:w-[650px] md:h-[500px]' alt="image" />
                </div>
            </div>
           
        </div>
    );
};

export default Home;