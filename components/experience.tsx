"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <motion.section className="text-center leading-8 mb-20" id="experience" ref={ref}
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:-300}}
    transition={{delay:0.175}}>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="gray">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.4)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                fontFamily: "Inter",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
              }}
              date={item.date}
              dateClassName=" font-alias text-xl font-extrabold text-white"
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-alias text-xl font-semibold capitalize text-white">{item.title}</h3>
              <p className="font-alias text-xl font-normal !mt-0 text-white/70">{item.location}</p>
              <p className="font-alias text-xl !mt-1 !font-normal text-white/70">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}