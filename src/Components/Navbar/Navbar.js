import React from 'react'
import { Link } from 'react-router-dom';
import fanta_logo from "../../Assets/fanta_logo.png";
import {MdMenu} from "react-icons/md";
import {FaRegUser} from 'react-icons/fa';
import { motion, AnimatePresence, } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';

// const NavbarMenu = [
//     {
//         id: 1,
//         title: "Home",
//         link: "",
//     },
//     {
//         id: 2,
//         title: "About",
//         link: "",
//     },
//     {
//         id: 1,
//         title: "Categories",
//         link: "",
//     },
//     {
//         id: 1,
//         title: "Blog",
//         link: "",
//     },
//     {
//         id: 1,
//         title: "Contact",
//         link: "",
//     },
// ]
function Navbar() {
  return (
    // fixed w-full top-0 left-0 z-20
    <> 
       <div className=" text-white py-8">
       <AnimatePresence mode="wait">
       <UpdateFollower mouseOptions={{
        backgroundColor: "white",
        zIndex: 10,
        followSpeed: 0.5,
        scale: 5,
        mixBlendMode: "difference",
        }}>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{Duration: 0.4, delay: 0.2, ease: "easeInOut"}}
        exit={{
         opacity: 0,
         transition: {
           duration:0.4,
         },
        }}
        className='container flex justify-between items-center'>
                {/* LOGO SECTION */}
                <div className="">
                    <img src={fanta_logo} alt='logo' className='max-w-[100px] invert' />
                </div>
                {/* MENU SECTION */}
                
                <div className='hidden md:block'>
                    
                    <ul className='flex items-center gap-4 relative z-40'>
                        <li>
                            <Link to="/" className="inline-block text-base font-semibold py-2 px-3 uppercase">Home</Link>
                        </li>
                        <li>
                            <Link to="" className="inline-block text-base font-semibold py-2 px-3 uppercase">About</Link>
                        </li>
                        <li>
                            <Link to="" className="inline-block text-base font-semibold py-2 px-3 uppercase">Contact</Link>
                        </li>
                        <li>
                            <Link to="" className="inline-block text-base font-semibold py-2 px-3 uppercase">Categories</Link>
                        </li>
                        <li>
                            <Link to="" className="inline-block text-base font-semibold py-2 px-3 uppercase">Blog</Link>
                        </li>
                        <li>
                            <Link to="" className="inline-block text-base font-semibold py-2 px-3 uppercase text-xl"><FaRegUser /></Link>
                        </li>
                    </ul>
                </div>
                <div className='md:hidden'>
                    <MdMenu className='text-4xl'/>
                    </div>
                </motion.div>
                </UpdateFollower>
            </AnimatePresence>
        </div>
     
    </>
  )
}

export default Navbar