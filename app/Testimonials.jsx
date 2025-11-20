"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Ali Aldakhil",
    time: "1 year ago",
    text: "طلبت عندهم سيارتي و ما شاء الله التظليل مزبوط. الشغل كان سريع و المعامله كانت احترافيه. الله يباركلهم في شغلهم يارب.",
  },
  {
    name: "محمد الشهري",
    time: "1 year ago",
    text: "غني عن التعريف أنا ثالث سياره أضبطها عندهم شغلهم جبار.",
  },
  {
    name: "سعيد الحربي",
    time: "1 year ago",
    text: "صراحه عزل رائع من أفضل ما يكون.",
  },
  {
    name: "خالد الزهراني",
    time: "1 year ago",
    text: "حسن الاستقبال و اتقان في العمل و جودة واحترافيه. الف شكر.",
  },
];

const Star = () => (
  <svg viewBox="0 0 24 24" fill="#cd7f32" className="w-5 h-5">
    <path d="M12 .587l3.668 7.431L23.4 9.748l-5.7 5.556L19.435 24 12 19.897 4.565 24l1.734-8.696L.6 9.748l7.732-1.73L12 .587z" />
  </svg>
);

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section dir="rtl" className="py-20 text-[#b87333]">
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold">ماذا يقول العميل عنا</h2>
        <div className="w-28 h-1 bg-[#cd7f32] mx-auto mt-4"></div>
        <p className="text-white mt-4 text-lg">
          شهادات العملاء تعكس جودة خدماتنا
        </p>
      </div>

      {/* Slider container */}
      <div className="relative max-w-3xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-[#B08B4F] to-black border shadow-md rounded-2xl p-6 text-white"
          >
            {/* Name + Google */}
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="font-semibold text-lg">{reviews[index].name}</h3>
                <p className="text-sm">{reviews[index].time}</p>
              </div>

              <div className="w-8 h-8 bg-[#cd7f32] flex items-center justify-center rounded-full font-bold">
                G
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-3">
              <Star /> <Star /> <Star /> <Star /> <Star />
            </div>

            {/* Text */}
            <p className="leading-relaxed">{reviews[index].text}</p>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border shadow-lg w-10 h-10 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2"
            fill="none"
          >
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border shadow-lg w-10 h-10 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2"
            fill="none"
          >
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="text-center mt-10 text-white text-sm">
        Google rating score: 4.6 of 5, based on 232 reviews
      </p>
    </section>
  );
}
