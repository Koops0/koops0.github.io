"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <motion.section className="text-center leading-8 mb-20" id="projects" ref={ref}
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.175}}>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}