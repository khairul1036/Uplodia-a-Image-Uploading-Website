import React from 'react';
import { FaUserPlus, FaCloudUploadAlt, FaShareAlt } from "react-icons/fa";

const HowItWork = () => {
    return (
        <div>
            <section className="bg-[#F9FAFB] py-12 md:px-20">
                <div className="mt-2">
                    <div className="title w-full">
                        <h2 className="text-5xl font-bold text-center text-[#1F2937] mb-4">
                            How It Works
                        </h2>
                        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto text-xl">
                            Upload, explore, and download high-quality images in just a few simple steps.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Step 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                        <div className="bg-[#E0E7FF] w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-4">
                            <FaUserPlus className="text-[#4F46E5] text-3xl" />
                        </div>
                        <h3 className="font-semibold text-xl text-[#2563EB]">1. Sign Up</h3>
                        <p className="text-gray-600 mt-2">
                            Create a free account to get started with uploading and downloading.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                        <div className="bg-[#E0E7FF] w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-4">
                            <FaCloudUploadAlt className="text-[#4F46E5] text-3xl" />
                        </div>
                        <h3 className="font-semibold text-xl text-[#2563EB]">2. Upload Image</h3>
                        <p className="text-gray-600 mt-2">
                            Drag & drop or browse your files to upload your best images.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                        <div className="bg-[#E0E7FF] w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-4">
                            <FaShareAlt className="text-[#4F46E5] text-3xl" />
                        </div>
                        <h3 className="font-semibold text-xl text-[#2563EB]">3. Share or Download</h3>
                        <p className="text-gray-600 mt-2">
                            Publish your image to the gallery or explore and download others’ work.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWork;