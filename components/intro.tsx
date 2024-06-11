"use client";

import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


import Link from "next/link";
import {BsArrowDown} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from "react-icons/fa";
import { useMediaQuery } from 'react-responsive'

export default function Intro(){
    const { ref } = useSectionInView("Home", 0.5);
    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' })
    return (
        <section ref={ref} id="home" className="overflow-hidden">
            <div className='flex items-center justify-center'>
                <div className = "relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{type: 'tween', duration: 0.3}}
                    >
                        <Image src='/kersh.jpeg' alt='Kersh' width="512" height="512" 
                            quality = "100" priority={true} className='h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-3xl
                            object-cover border-[0.2rem] border-white border-opacity-50 
                            shadow-lg shadow-black/[0.03] sm:translate-x-[-25rem] sm:translate-y-[10rem]'
                        />
                    </motion.div>
                </div>
            </div>
            <motion.p className='m1-auto text-center text-3xl sm:text-4xl md:text-8xl text-white font-excelorate font-extrabold mt-4'
            initial={{opacity:0, x: isSmallScreen ? 0 : 250, y: isSmallScreen ? 150 : 100}}
            animate={{opacity:1, x: isSmallScreen ? 0 : 250, y: isSmallScreen ? 0 : -70}}>
                HELLO WORLD.
            </motion.p>
            <motion.p className='m1-auto text-center text-xl sm:text-2xl md:text-4xl text-white font-inter font-bold mt-4'
            initial={{opacity:0, x: isSmallScreen ? 0 : 250, y: isSmallScreen ? 150 : 100}}
            animate={{opacity:1, x: isSmallScreen ? 0 : 250, y: isSmallScreen ? -20 : -90}}>
                My name is Kershan Arulneswaran.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row justify-center gap-2 transform translate-x-64 -translate-y-14"
            initial={{opacity:0, x: isSmallScreen ? 0 : 250, y:100}}
            animate={{opacity:1, x: isSmallScreen ? 0 : 250, y:-70}}
            transition={{delay:0.1}}>
                <Link href = "#contact"
                className="group bg-white bg-opacity-60 text-gray-950 font-inter px-4 sm:px-7 py-2 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-50">
                    Contact Me <BsArrowDown className="group-hover:translate-y-1 transition"/>
                </Link>
                <Link href="https://drive.google.com/file/d/1FXvdBHODgtzlvZA-NKmX7hxDRLdQG5fc/view?usp=sharing" 
                className="group bg-gray-950 bg-opacity-60 text-white font-inter px-4 sm:px-7 py-2 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-black">
                    Resume <HiDownload className="group-hover:translate-y-1 transition"/>
                </Link>
                <Link href = "https://www.linkedin.com/in/kersharul/"
                className="bg-white bg-opacity-60 text-gray-950 font-inter p-3 sm:p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-50">
                    <FaLinkedin/>
                </Link>
                <Link href = "https://github.com/Koops0"
                className="bg-white bg-opacity-60 text-gray-950 font-inter p-3 sm:p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-50">
                    <FaGithubSquare/>
                </Link>
            </motion.div>
        </section>
    );
}