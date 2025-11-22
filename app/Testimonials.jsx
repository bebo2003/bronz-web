"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  {
    name: "عميل جديد 1",
    time: "6 months ago",
    text: "خدمة ممتازة جدا وسريعة.",
  },
  {
    name: "عميل جديد 2",
    time: "3 months ago",
    text: "أنصح الجميع بتجربة الخدمة لديهم.",
  },
];

const Star = () => (
  <svg viewBox="0 0 24 24" fill="#cd7f32" className="w-5 h-5">
    <path d="M12 .587l3.668 7.431L23.4 9.748l-5.7 5.556L19.435 24 12 19.897 4.565 24l1.734-8.696L.6 9.748l7.732-1.73L12 .587z" />
  </svg>
);

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // تحديث عدد الكروت حسب حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % reviews.length);
  };

  // حساب translateX بناء على عدد الكروت المرئية
  const translateX = -(index * (100 / visibleCount));

  return (
    <section dir="rtl" className="py-20 text-[#b87333]">
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold">ماذا يقول العميل عنا</h2>
        <div className="w-28 h-1 bg-[#cd7f32] mx-auto mt-4"></div>
        <p className="text-white mt-4 text-lg">شهادات العملاء تعكس جودة خدماتنا</p>
      </div>

      {/* Slider container */}
      <div className="relative overflow-hidden max-w-6xl mx-auto px-4">
        <motion.div
          className="flex gap-6"
          animate={{ x: `${translateX}%` }}
          transition={{ duration: 0.5 }}
        >
          {reviews.concat(reviews).map((review, i) => (
            <div
              key={i}
              className={`flex-none w-full sm:w-1/2 lg:w-1/4 bg-gradient-to-b from-[#B08B4F] to-black border shadow-md rounded-2xl p-6 text-white`}
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm">{review.time}</p>
                </div>
                <div className="w-8 h-8 bg-[#cd7f32] flex items-center justify-center rounded-full font-bold">
                  G
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>

              <p className="leading-relaxed">{review.text}</p>
            </div>
          ))}
        </motion.div>

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
