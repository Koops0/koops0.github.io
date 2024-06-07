import React from "react";
import { MdOutlineComputer } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
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
      "I was also part of our university's robotics programming team, where we compete in RoboMaster, as well as building a robot in 3 days. We use C and Java to program our robots.",
    icon: React.createElement(FaRobot),
    date: "2023 - 2024",
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
      "I'm currently working on this project, but this will be a bot that can play Tekken via computer vision.",
    tags: ["C++", "Python", "OpenCV", "PyTorch", "YOLO"],
    link: "https://github.com/Koops0/TekkenAIPublic"
    //imageUrl:
  },
  {
    title: "Aero Copilot - 2023 Space Apps G.F.H.M.",
    description:
      "An AI system for streamlining technical documents.",
    tags: ["TypeScript", "Python", "JavaScript", "CSS", "Next.js", "Flask", "AWS", "OpenAI"],
    link: "https://github.com/Koops0/Aero-Copilot"
    //imageUrl:
  },
  {
    title: "ChessHub",
    description:
      "A public web app that allows players to play chess online, play against a CPU and solve daily puzzles.",
    tags: ["HTML", "CSS", "JavaScript", "Java", "Google Cloud"],
    link: "https://github.com/mujtabach2/chess-hub"
    //imageUrl:
  },
  {
    title: "GPSXE",
    description:
      "An emulator that can play PlayStation games, built with Go. Currently on hold, but will work on the GPU and audio emulation.",
    tags: ["Go", "OpenGL"],
    link: "https://github.com/Koops0/GPSXE"
    //imageUrl:
  },
  {
    title: "TalkHub",
    description:
      "A chat application that incorporates WebSockets for seamless configuration. Users can create chat rooms and send messages to each other.",
    tags: ["HTML", "CSS", "JavaScript", "Java"],
    link: "https://github.com/Koops0/Talkhub"
    //imageUrl:
  },
  {
    title: "Spam Detector",
    description:
      "A spam detector that uses Naive Bayes to classify emails as spam or not spam. Achieved 90% accuracy on the test set.",
    tags: ["HTML", "CSS", "JavaScript", "Java"],
    link: "https://github.com/Koops0/Spam-Detector"
    //imageUrl:
  },
  {
    title: "Robot in 3 Days 2024 - Crescendo",
    description:
      "A robot that can participate in the 2024 FRC game, Crescendo, built with Java.",
    tags: ["Java", "WPILib"],
    link: "https://github.com/otri3d/Crescendo2024"
    //imageUrl:
  },
  {
    title: "NBA Data Analysis",
    description:
      "An exploratory data analysis about NBA players in the 2022-2023 season.",
    tags: ["Jupyter", "Python", "NumPy", "pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/Koops0/EDANBA"
    //imageUrl:
  },
  {
    title: "Terraria Item Guru",
    description:
      "A CRUD application that allows players to look at Terraria weapons and their stats.",
    tags: ["Java"],
    link: "https://github.com/Koops0/Terraria-Item-Guru"
    //imageUrl:
  }
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