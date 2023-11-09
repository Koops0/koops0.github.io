"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min.js';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const myRef = useRef(null);

  useEffect(() => {
    if (!myRef.current) throw Error("divRef is not assigned");
    const vantaEffect = HALO({
      THREE,
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      baseColor: 0xa3272c,
      backgroundColor: 0x9aaa9f,
      amplitudeFactor: 3.00,
      xOffset: 0.00,
      yOffset: 0.00,
      size: 3.00
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={myRef} className="vanta-container" style={{ width: '100vw', height: '100vh' }}>
      {children}
    </div>
  );
}