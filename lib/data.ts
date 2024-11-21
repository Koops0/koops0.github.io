import React from "react";
import { MdOutlineComputer } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { FaLaptop } from "react-icons/fa";

import t8Img from "@/public/t8.jpg";
import outputImg from "@/public/output.png";
import chessImg from "@/public/Chess.jpg";
import EMUImg from "@/public/EMUWHITE.png";
import titleImg from "@/public/TitlePage.png";
import ssImg from "@/public/screenshot.png";
import codeImg from "@/public/code.png";
import chartImg from "@/public/chart.jpg";
import terrariaImg from "@/public/terraria.jpg";
import trash from "@/public/trash.jpg";
import redacted from "@/public/redacted.jpg";
import temp from "@/public/temp.jpg";
import drawing from "@/public/drawing.png";
import ss from "@/public/ss.png";



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
    icon: React.createElement(FaRobot),
    date: "2023 - Present",
  },
  {
    title: "Mentor",
    location: "Toronto, ON",
    description:
      "I also mentor people on how to code and what techniques one should apply. For example, I taught a student how to build a CRUD app using Java and MySQL, as well as talking about data structures in full detail.",
    icon: React.createElement(FaHandsHelping),
    date: "2023 - present",
  },
  {
    title: "Lead Web Developer - Ontario Tech Hack Station",
    location: "Oshawa, ON",
    description:
      "Currently, I'm a lead web developer for Ontario Tech Hack Station, where I'm responsible for creating and maintaining the website and admin portal.",
    icon: React.createElement(FaLaptop),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "TekkenAI",
    description:
      "I'm currently working on this project, but this will be a bot that can play Tekken via computer vision.",
    tags: ["C++", "Python", "OpenCV", "PyTorch", "YOLO"],
    link: "https://github.com/Koops0/TekkenAIPublic",
    imageUrl: t8Img,
  },
  {
    title: "Aero Copilot - 2023 Space Apps G.F.H.M.",
    description:
      "An AI system for streamlining technical documents.",
    tags: ["Next.js", "Python", "Flask", "AWS", "Claude"],
    link: "https://github.com/Koops0/Aero-Copilot",
    imageUrl: outputImg,
  },
  {
    title: "Gain+ - HTV 2024 Winner",
    description:
      "A fitness website where one can create personalized workout and meal plans based on photos. Won Best Databricks Hack.",
    tags: ["Roboflow", "LLaMA", "React", "Firebase"],
    link: "https://github.com/AyanASaiyed/GainPlus",
    imageUrl: drawing,
  },
  {
    title: "My First Mobile App.",
    description:
      "Coming very soon.",
    tags: ["React Native", "TensorFlow"],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    imageUrl: temp,
  },
  {
    title: "????? - Meta LLaMA Hackathon Toronto",
    description:
      "Coming very soon.",
    tags: ["LLaMA"],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    imageUrl: redacted,
  },
  {
    title: "SymphonicSlates - Hack the North 2024",
    description:
      "A web app that converts your favourite image into a photo through GenAI.",
    tags: ["Next.js", "Convex", "Python", "Gradio", "Stable Diffusion"],
    link: "https://github.com/Koops0/SymphonicSlates",
    imageUrl: ss,
  },
  {
    title: "TrashTalk - HT6 2024",
    description:
      "The bin that talks trash when you shoot bricks and talks nice when you make it in.",
    tags: ["OpenCV", "Arduino", "Python", "Next.js", "Express", "MongoDB",],
    link: "https://github.com/Koops0/TrashTalk",
    imageUrl: trash,
  },
  {
    title: "ChessHub",
    description:
      "A public web app that allows players to play chess online, play against a CPU and solve daily puzzles.",
    tags: ["HTML", "CSS", "JavaScript", "Java", "Google Cloud"],
    link: "https://github.com/mujtabach2/chess-hub",
    imageUrl: chessImg,
  },
  {
    title: "GPSXE",
    description:
      "An emulator that can play your curated PlayStation 1 classics, built with Go and OpenGL.",
    tags: ["Go", "OpenGL"],
    link: "https://github.com/Koops0/GPSXE",
    imageUrl: EMUImg,
  },
  {
    title: "TalkHub",
    description:
      "A chat application that incorporates WebSockets for seamless configuration. Users can create chat rooms and send messages to each other.",
    tags: ["HTML", "CSS", "JavaScript", "Java"],
    link: "https://github.com/Koops0/Talkhub",
    imageUrl: titleImg,
  },
  {
    title: "Spam Detector",
    description:
      "A spam detector that uses Naive Bayes to classify emails as spam or not spam. Achieved 90% accuracy on the test set.",
    tags: ["HTML", "CSS", "JavaScript", "Java"],
    link: "https://github.com/Koops0/Spam-Detector",
    imageUrl: ssImg,
  },
  {
    title: "Robot in 3 Days 2024 - Crescendo",
    description:
      "A robot that can participate in the 2024 FRC game, Crescendo, built with Java.",
    tags: ["Java", "WPILib"],
    link: "https://github.com/otri3d/Crescendo2024",
    imageUrl: codeImg,
  },
  {
    title: "NBA Data Analysis",
    description:
      "An exploratory data analysis about NBA players in the 2022-2023 season.",
    tags: ["Jupyter", "Python", "NumPy", "pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/Koops0/EDANBA",
    imageUrl: chartImg,
  },
  {
    title: "Terraria Item Guru",
    description:
      "A CRUD application that allows players to look at Terraria weapons and their stats.",
    tags: ["Java"],
    link: "https://github.com/Koops0/Terraria-Item-Guru",
    imageUrl: terrariaImg,
  }
] as const;

export const skillsData = [
  "Python",
  "C++",
  "C",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Go",
  "Rust",
  "SQL",
  "PHP",
  "OpenCV",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "YOLOv8",
  "OpenAI",
  "Claude",
  "React",
  "NumPy",
  "SciPy",
  "pandas",
  "Matplotlib",
  "Seaborn",
  "Jupyter",
  "Scikit-Learn",
  "OpenGL",
  "XGBoost", 
  "spaCy", 
  "PySpark",
  "Linux",
  "Node.js",
  "Docker",
  "Git",
  "Jupyter Notebook",
  "Netlify",
  "Vercel",
  "Amazon Web Services",
  "Google Cloud Platform",
  "MongoDB",
  "PostgreSQL",
  "JIRA",
  "Roboflow",
  "Figma",
  "Next.js",
  "Laravel",
  "Vue",
  "Convex",
  "Express",
  "Django",
  "Flask",
  "WordPress",
  "Apache Spark",
  "Tailwind",
  "WPILib",
  "STM32",
  "Raspberry Pi",
  "Arduino",
] as const;