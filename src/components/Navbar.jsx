import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React from "react";


const Navbar = () => {
const [nav, setNav ] = useState(false)

    const hanleNav = () => {
        setNav(!nav)
    }

    return (
        <>
        <div className=" border border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold primary-color ml-4">Muhammad saidi</h1>
            <ul className={`hidden md:flex ${nav ? 'hidden' :{} }`}>
                <li className="p-5"><a href="#About">About</a></li>
                <li className="p-5"><a href="#Work">Work</a></li>
                <li className="p-5"><a href="#Contact">Contact</a></li>
              
            </ul>
            <div onClick={hanleNav} className="block md:hidden mr-6">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div> 
            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' 
                :'fixed left-[-100%]' }>
                    <h1 className="text-3xl primary-color m-4">M. SAIDI</h1>
                    <ul className="p-8 text-2xl">
                        <li className="p-2"><a href="#About">About</a></li>
                        <li className="p-2"><a href="#Work">Work</a></li>
                        <li className="p-2"><a href="#Contact">Contact</a></li>
                        {/* <li className="p-2"><a href="#Home">Home</a></li>
                        <li className="p-2"><a href="#Experience">Experience</a></li> */}
                       
                    </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar