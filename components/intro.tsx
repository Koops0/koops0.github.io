"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


import Link from "next/link";
import Modal from './modal';
import Contact from './contact';
import {BsArrowDown} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from "react-icons/fa";

export default function Intro(){
    const { ref } = useSectionInView("Home", 0.5);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsSmallScreen(window.innerWidth <= 640);

            const handleResize = () => {
                setIsSmallScreen(window.innerWidth <= 640);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <section ref={ref} id="home" className={`flex items-center justify-center h-screen overflow-hidden ${isSmallScreen ? 'mt-20' : ''}`}>
          <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <motion.div
                className='m1-auto'
                initial={{ opacity: 0, x: 0, y: 0}}
                animate={{ opacity: 1, x: 0, y: 0 }}
            >
              <Image
                src='/KALogo.png'
                alt='Description of image'
                width={800} // Adjust the width as needed
                height={800} // Adjust the height as needed
                className='rounded-3xl object-cover'
              />
            </motion.div>
            <motion.div className="flex flex-col sm:flex-row justify-center gap-2 transform translate-x-64 -translate-y-14"
                        initial={{ opacity: 0, x: 0, y: isSmallScreen ? -20 : -120}}
                        animate={{ opacity: 1, x: 0, y: isSmallScreen ? -20 : -120}}>
              <div className="flex justify-center gap-2">
              <button
                  className="group bg-white bg-opacity-60 text-gray-950 font-alias text-xl px-2 sm:px-7 py-2 sm:py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-50 w-24 h-12 sm:w-auto sm:h-auto"
                  onClick={openModal}
                >
                  Contact Me <BsArrowDown className="group-hover:translate-y-1 transition" />
                </button>
                <Link href="https://drive.google.com/file/d/1y53pLRKB6lXpBrqveCbhOjl8K0FjnPP1/view?usp=sharing" 
                      className="group bg-gray-950 bg-opacity-60 text-white font-alias text-xl px-2 sm:px-7 py-2 sm:py-3 flex items-center jestify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-black w-24 h-12 sm:w-auto sm:h-auto">
                  Resume <HiDownload className="group-hover:translate-y-1 transition"/>
                </Link>
                <Link href="https://www.linkedin.com/in/kersharul/"
                      className="bg-white bg-opacity-60 text-gray-950 font-alias text-xl p-2 sm:p-4 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-50 w-24 h-12 sm:w-auto sm:h-auto">
                  <FaLinkedin/>
                </Link>
                <Link href="https://github.com/Koops0"
                      className="bg-white bg-opacity-60 text-gray-950 font-alias text-xl p-2 sm:p-4 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-50 w-24 h-12 sm:w-auto sm:h-auto">
                  <FaGithubSquare/>
                </Link>
              </div>
            </motion.div>
          </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <Contact />
        </Modal>
        </section>
    );
}