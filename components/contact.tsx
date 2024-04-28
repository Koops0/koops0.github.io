"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Contact() {
    return(
        <section className="text-center leading-8 mb-20">
            <SectionHeading>Contact</SectionHeading>
            <p className="text-3xl text-white font-inter font-medium mx-16">
            As a third-year undergraduate student pursuing a degree in Computer Science with a minor in 
            Mathematics at Ontario Tech University, I've cultivated a strong foundation in computer science 
            and honed my skills in programming languages like Python, Java, and C++. From developing diverse 
            projects, including a Go emulator and full-stack web applications centered around Chess, I'm adept 
            at solving complex problems and thrive on adding innovative twists to my work. With a passion for 
            sectors like Computer Vision, Artificial Intelligence, Robotics, and Full-Stack Software Development, 
            I'm eager to explore exciting opportunities in robotics, software engineering, or ML/AI as a co-op intern. 
            Committed to collaboration and staying abreast of industry trends, I'm driven to contribute to technological 
            advancements and eager to connect with professionals.</p>
        </section>
    )
}