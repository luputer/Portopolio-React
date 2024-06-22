import React from 'react';
import heroimage from '../assets/remove.png'; // Corrected import statement
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh]  mx-auto py-8 bg-black'>
            <div className="my-auto mx-auto">
                <div className="w-[300px] h-auto lg:w-[400px]">
                    <img src={heroimage} alt="hero image" />
                </div>
            </div>

            <div className="col-span-2 px-5 my-auto">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                    <span className="primary-color">
                        I'm a
                    </span> <br />
                    <TypeAnimation
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "BackEnd Dev",
                            1000,
                            "Content Creator",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className="text-white sm:text-lg my-6 lg:text-xl">
                    MY name is Muhammad Saidi and I have 1+ years Experience in web development.
                </p>
                <div className="my-8">
                    <a href="/" className="px-6 py-3 rounded-xl mr-4
                     text-white bg-gradient-to-br from-blue-500 to-indigo-500">
                        Download CV
                    </a>
                    <a href="/Contact" className="px-6 py-3 rounded-xl mr-4 
                    border border-gray-400 hover:bg-gradient-to-br from-blue-500 to-indigo-500
                    text-white hover:border-none">Contact</a>
                </div>
            </div>

        </div>
    );
};

export default Hero;