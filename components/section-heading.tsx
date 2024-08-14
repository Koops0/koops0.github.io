"use client";
import React, { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export default function SectionHeading({children}: SectionHeadingProps) {
    return(
        <h2 className="text-7xl text-talk text-black font-piedmont font-bold">{children}</h2>
    )
}