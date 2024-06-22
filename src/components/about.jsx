import React from 'react';
import aboutImg from '../assets/about.jpg'

const About = () => {
    return (
        <div className='text-white max-w-[1200px] mx-auto my-12' id='About'>
            
            <div className="md:grid md:grid-cols-2 sm:py-16">

                <div className="mt-4 md:mt-0 text-left flex ">
                    <div className="my-auto mx-6">
                        <h2 className='text-4xl font-bold mb-4 primary-color' > About me
                        </h2>
                        <p className='text-base lg:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quos ipsam aperiam vitae, amet natus! Vel perspiciatis libero non ad aliquam! Explicabo rem delectus inventore dicta consectetur excepturi, odio nam.
                        Magnam labore incidunt aliquam voluptatem nam voluptates impedit dicta eum quibusdam non debitis tempora reprehenderit consequuntur eveniet omnis veniam optio, obcaecati iusto deserunt molestias reiciendis. Sint fugit a quibusdam error?
                        Quibusdam id error molestias porro ad, aut odio quos commodi totam recusandae  deleniti quos doloremque sint id illum.</p>
                    </div>
                </div>
                <img src={aboutImg} alt="" className=" mx-auto rounded-3xl py-8 md:py-0" width={300} height={300} />
            </div>
        </div>
    );
};



export default About;