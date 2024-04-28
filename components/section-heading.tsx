"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: ReactNode;
}

export default function SectionHeading({children}: SectionHeadingProps) {
    return(
        <h2 className = "text-6xl text-white font-excelorate font-extrabold mb-4">{children}</h2>
    )
}