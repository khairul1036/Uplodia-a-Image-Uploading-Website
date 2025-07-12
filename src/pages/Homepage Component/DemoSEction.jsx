import React from 'react';
import phone from '../../assets/phone-in-hand.jpg'

const DemoSEction = () => {
    return (
        <div>
            <div className="mt-2 py-6">
                {/* title & subtitle */}
                <div className="title w-full">
                    <h2 className="text-5xl font-bold text-center text-[#1F2937] mb-4">
                        Real-Time Preview
                    </h2>
                    <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto text-xl">
                        Preview your experience in real-time before you dive in.
                    </p>
                </div>
                {/* demo section start */}
                <div className="title w-full flex items-center justify-between">
                    <div className="text text-[#1F2937] mb-4 md:w-[45%] text-xl">
                        <div className="max-w-3xl mx-auto px-4 py-16 text-slate-800">
                            {/* Section Title */}
                            <h2 className="text-5xl font-bold mb-4">
                                Improve Engagement, <br />
                                Revenue, and Team Efficiency
                            </h2>

                            {/* Divider Line */}
                            <hr className="my-6 border-slate-300" />

                            {/* E-commerce */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold">E-commerce</h3>
                                <p className="text-base mt-2">
                                Seamlessly scale to handle millions of product images and videos. Whether it's PLPs, PDPs, or full shopping experiences, our platform ensures fast delivery, consistent performance, and unmatched content optimization at any scale.
                                </p>
                            </div>

                            {/* Headless */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold">Headless</h3>
                                <p className="text-base mt-2">
                                 Leverage a modern, cloud-native infrastructure powered by a complete suite of APIs and microservices. Our flexible architecture gives your team the agility and power to build a fully composable tech stack tailored to your unique needs.
                                </p>
                            </div>

                            {/* Video */}
                            <div>
                                <h3 className="text-xl font-semibold">Video</h3>
                                <p className="text-base mt-2">
                                    Deliver high-quality video experiences with a robust API that supports real-time video transcoding, content-aware compression, and on-the-fly video transformation. Everything you need to process and optimize video content instantly and efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${phone})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "100vh",

                    }} className="image md:w-[45%]  h-[850px]">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default DemoSEction;