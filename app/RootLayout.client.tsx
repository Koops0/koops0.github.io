"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min.js';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const myRef = useRef(null);

  useEffect(() => {
    if (!myRef.current) throw Error("divRef is not assigned");
    const vantaEffect = FOG({
      THREE,
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xffffff,
      midtoneColor: 0x0,
      lowlightColor: 0x0,
      baseColor: 0x0,
      blurFactor: 0.90,
      zoom: 0.5,
      speed: 5.00
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <div ref={myRef} className="vanta-container fixed top-0 left-0 w-full h-full z-[-1]" />
      <div className="relative">
        {children}
      </div>
    </>
  );
}