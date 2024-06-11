"use client";
import React, { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export default function SectionHeading({children}: SectionHeadingProps) {
    return(
        <h2 className="text-5xl text-white font-excelorate font-extrabold mt-4 mb-4">{children}</h2>
    )
}