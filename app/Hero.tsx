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
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-screen h-screen relative overflow-hidden pt-20">

      {/* SLIDER FULLSCREEN */}
      <div className="w-full h-full relative flex items-center justify-center">

        {slides.map((slide, i) => (
          <div key={i} className="absolute inset-0">
            <Image
              src={slide}
              alt={`slide-${i}`}
              fill
              quality={90}
              priority={i === 0}
              style={{ objectFit: "cover" }} // <-- مهم هنا
              className={`transition-opacity duration-700 ${index === i ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        ))}

        {/* DOTS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i ? "bg-[#CD7F32]" : "bg-white/60"
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
