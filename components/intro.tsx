"use client";

import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Intro(){
    return (
        <section>
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
                        shadow-lg shadow-black/[0.03] translate-x-[-25rem] translate-y-[15rem]'
                        />
                    </motion.div>
                </div>
            </div>

            <p className='m1-auto text-center text-8xl text-white font-excelorate font-extrabold mt-4 transform translate-x-[15.5rem] translate-y-[1.5rem]'>HELLO WORLD.</p>
            <p className='m1-auto text-center text-4xl text-white font-inter font-bold mt-4 transform translate-x-[15rem] translate-y-[0.5rem]'>My name is Kershan Arulneswaran.</p>
        </section>
    );
}