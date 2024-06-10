"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);
    return(
        <motion.section className="text-center leading-8 mb-20" id="skills" ref={ref}
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}>
            <SectionHeading>Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mx-16">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack rounded-xl px-5 py-3 bg-white/10 text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
        </motion.section>
    )
}