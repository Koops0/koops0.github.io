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
    title: "TekkenAI",
    description:
      "I'm currently planning the overall design of this project, but this will be an application that will help players improve their Tekken skills via computer vision.",
    tags: ["Python", "OpenCV"],
    //imageUrl:
  },
  {
    title: "Aero Copilot",
    description:
      "A document processing system backed by AI that streamlines and corrects technical documents. Winner of the Toronto NASA Space Apps Challenge 2023 and a Global Finalist Honorable Mention.",
    tags: ["TypeScript", "Python", "JavaScript", "CSS", "Next.js", "Flask", "Amazon Web Services", "OpenAI"],
    //imageUrl:
  },
  {
    title: "ChessHub",
    description:
      "A public web app that allows players to play chess online, play against a CPU and solve daily puzzles.",
      tags: ["HTML", "CSS", "JavaScript", "Java", "Google Cloud Platform"],
    //imageUrl:
  },
  {
    title: "GPSXE - Go PlayStation Emulator",
    description:
      "An emulator that can play PlayStation games, built with Go. Currently working on the GPU and audio emulation.",
    tags: ["Go", "OpenGL"],
    //imageUrl:
  },
  {
    title: "TalkHub",
    description:
      "A spam detector that uses Naive Bayes to classify emails as spam or not spam. Achieved 90% accuracy on the test set.",
    tags: ["HTML", "CSS", "JavaScript", "Java"],
    //imageUrl:
  },
  {
    title: "Spam Detector",
    description:
      "A spam detector that uses Naive Bayes to classify emails as spam or not spam. Achieved 90% accuracy on the test set.",
    tags: ["HTML", "CSS", "JavaScript", "Java"],
    //imageUrl:
  },
  {
    title: "EDANBA",
    description:
      "An exploratory data analysis about NBA players in the 2022-2023 season.",
    tags: ["Jupyter Notebook", "Python", "NumPy", "pandas", "Matplotlib", "Seaborn"],
    //imageUrl:
  },
  {
    title: "Terraria Item Guru",
    description:
      "A CRUD application that allows players to look at Terraria weapons and their stats.",
    tags: ["Java"],
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