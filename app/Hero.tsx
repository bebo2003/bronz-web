"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    "/برونزية_resized_2000.png",
    "/تصميم-ويب.png",
    "/داخل-وخارج.png",
    "/منتج-استون.png"
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + slides.length) % slides.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  return (
    <section className="w-screen h-screen relative overflow-hidden lg:pt-20">
      <div
        className="w-full h-full relative flex items-center justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => {
          touchStartX.current = e.touches?.[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const endX = e.changedTouches?.[0]?.clientX ?? null;
          if (touchStartX.current != null && endX != null) {
            const dx = endX - touchStartX.current;
            if (Math.abs(dx) > 40) {
              if (dx > 0) setIndex((i) => (i - 1 + slides.length) % slides.length);
              else setIndex((i) => (i + 1) % slides.length);
            }
          }
          touchStartX.current = null;
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0"
            aria-hidden={index !== i}
            role="group"
          >
            <Image
              src={slide}
              alt={`slide-${i}`}
              fill
              quality={90}
              priority={i === 0}
              style={{
                objectFit: isMobile ? "contain" : "cover",
                objectPosition: "center",
              }}
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
              className={`w-3 h-3 rounded-full transition ${index === i ? "bg-[#CD7F32]" : "bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
