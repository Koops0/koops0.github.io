"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About", 0.5);
    return(
        <motion.section ref={ref} id="about" className="text-center leading-8 mb-20"
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}>
            <SectionHeading>About Me</SectionHeading>
            <p className="text-3xl text-white font-inter font-medium mx-16">
            As a third-year undergraduate student pursuing a degree in Computer Science with a minor in 
            Mathematics at Ontario Tech University, I&apos;ve cultivated a strong foundation in computer science 
            and honed my skills in programming languages like Python, Java, and C++. From developing diverse 
            projects, including a bot that can play games for me and full-stack web applications centered around Chess, I&apos;m adept 
            at solving complex problems and thrive on adding innovative twists to my work. With a passion for 
            sectors like Computer Vision, Artificial Intelligence, Robotics, and Full-Stack Software Development, 
            I&apos;m eager to explore exciting opportunities in robotics, software engineering, or ML/AI as a co-op intern. 
            Committed to collaboration and staying abreast of industry trends, I&apos;m driven to contribute to technological 
            advancements and eager to connect with professionals.</p>
        </motion.section>
    )
}