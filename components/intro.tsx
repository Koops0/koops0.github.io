"use client";

import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

import Link from "next/link";
import {BsArrowDown} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from "react-icons/fa";

export default function Intro(){
    return (
        <section className="overflow-hidden">
            <div className='flex items-center justify-center'>
                <div className = "relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{type: 'tween', duration: 0.3}}
                    >
                        <Image src='/kersh.jpeg' alt='Kersh' width="512" height="512" 
                        quality = "100" priority={true} className='h-80 w-80 rounded-3xl
                        object-cover border-[0.2rem] border-white border-opacity-50 
                        shadow-lg shadow-black/[0.03] translate-x-[-25rem] translate-y-[10rem]'
                        />
                    </motion.div>
                </div>
            </div>
            <motion.p className='m1-auto text-center text-8xl text-white font-excelorate font-extrabold mt-4'
            initial={{opacity:0, x:250, y:100}}
            animate={{opacity:1, x:250, y:-70}}>
                HELLO WORLD.
            </motion.p>
            <motion.p className='m1-auto text-center text-4xl text-white font-inter font-bold mt-4'
            initial={{opacity:0, x:250, y:100}}
            animate={{opacity:1, x:250, y:-90}}>
                My name is Kershan Arulneswaran.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row justify-center gap-2 transform translate-x-64 -translate-y-14"
            initial={{opacity:0, x:0, y:0}}
            animate={{opacity:1, x:256, y:-56}}>
                <Link href = "#contact"
                className="bg-white text-gray-950 font-inter px-7 py-3 flex items-center gap-2 rounded-full">
                    Contact Me <BsArrowDown/>
                </Link>
                <a className="bg-gray-950 text-white font-inter px-7 py-3 flex items-center gap-2 rounded-full">
                    Resume <HiDownload/>
                </a>
                <Link href = "https://www.linkedin.com/in/kersharul/"
                className="bg-white text-gray-950 font-inter p-4 flex items-center gap-2 rounded-full">
                    <FaLinkedin/>
                </Link>
                <Link href = "https://github.com/Koops0"
                className="bg-white text-gray-950 font-inter p-4 flex items-center gap-2 rounded-full">
                    <FaGithubSquare/>
                </Link>
            </motion.div>
        </section>
    );
}