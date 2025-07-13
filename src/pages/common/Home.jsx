import React from 'react';
import img from '../../assets/image.jpg'
import herovideo from '../../assets/image-hero.mp4'
import Slider from '../Homepage Component/Slider';
import HowItWork from '../Homepage Component/HowItWork';
import DemoSEction from '../Homepage Component/DemoSEction';

const Home = () => {
    return (
        <div>
            {/* hero */}
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
                    <div className="img-sec w-full  md:w-[46%] flex items-center justify-end   ">
                        {/* <img src={img} className=' object-fill rounded-2xl ' alt="image" /> */}
                        <video src={herovideo} muted loop
                            playsInline autoPlay className='h-[400px] border-2 border-amber-300  md:w-full md:h-[450px] rounded-2xl '></video>
                    </div>
                </div>
            </div>
            {/*  how it work*/}
             <div className="mt-12 w-11/12 mx-auto">
                   <HowItWork></HowItWork>
             </div>
            {/*  demo  section*/}
             <div className="mt-12 mx-auto w-11/12 ">
                   <DemoSEction></DemoSEction>
             </div>
        </div>
    );
};

export default Home;