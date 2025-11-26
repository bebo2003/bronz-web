"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    "/برونزية_resized_2000.png",
    "/تصميم-ويب.png",
    "/داخل-وخارج.png",
    "/منتج-استون.png"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-screen overflow-hidden">

      {/* الخلفية البلاتر */}
      <div
        className="absolute inset-0 blur-2xl scale-110 opacity-60"
        style={{
          backgroundImage: `url(${slides[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* الصورة الأساسية */}
      <Image
        src={slides[index]}
        alt="Hero Slide"
        fill
        priority
        className="object-contain relative z-10 transition-all duration-700"
      />

      {/* Overlay على الديسكتوب فقط */}
      <div className="hidden md:block absolute inset-0 bg-black/40 z-20"></div>

      {/* Layer خفيفة للجودة على الموبايل */}
      <div className="absolute inset-0 bg-black/30 z-[5] md:hidden"></div>
    </div>
  );
}
