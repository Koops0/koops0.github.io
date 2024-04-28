import React from "react";
import { MdOutlineComputer } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Software Developer",
    location: "Toronto, ON, Canada",
    description:
      "I first started to code in high school, where I learned various programming languages and built a CRUD app. Since then, I'm working on multiple projects and learning new technologies along the way.",
    icon: React.createElement(AiFillCode),
    date: "2019 - present",
  },
  {
    title: "Student - Bachelor of Science in Computer Science, Minor in Mathematics",
    location: "Ontario Tech University - Oshawa, ON",
    description:
      "I'm currently in my third year of university, learning about data structures, algorithms, databases, computer graphics, and more.",
    icon: React.createElement(MdOutlineComputer),
    date: "2022 - present",
  },
  {
    title: "Robotics Programming Team Member",
    location: "Oshawa, ON",
    description:
      "I'm also part of our university's robotics programming team, where we compete in RoboMaster, as well as building a robot in 3 days. We use C and Java to program our robots.",
    icon: React.createElement(FaHandsHelping),
    date: "2023 - present",
  },
  {
    title: "Mentor",
    location: "Toronto, ON",
    description:
      "I also mentor students on how to code and build projects during my spare time.",
    icon: React.createElement(FaHandsHelping),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    //imageUrl:
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    //imageUrl:
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //imageUrl:
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;