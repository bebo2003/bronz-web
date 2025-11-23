"use client";

import { useEffect, useRef } from "react";

const reviews = [
  { name: "علي الشهراني", time: "1 year ago", text: "طلبت عندهم سيارتي و ما شاء الله التظليل مزبوط." },
  { name: "محمد الشهري", time: "1 year ago", text: "غني عن التعريف أنا ثالث سياره أضبطها عندهم شغلهم جبار." },
  { name: "سعيد الحربي", time: "1 year ago", text: "صراحه عزل رائع من أفضل ما يكون." },
  { name: "خالد الزهراني", time: "1 year ago", text: "حسن الاستقبال و اتقان في العمل و جودة واحترافيه. الف شكر." },
  { name: "زياد مشعل", time: "6 months ago", text: "خدمة ممتازة جدا وسريعة." },
  { name: "عبدالرحمت محمد", time: "3 months ago", text: "أنصح الجميع بتجربة الخدمة لديهم." },
];

const Star = () => (
  <svg viewBox="0 0 24 24" fill="#cd7f32" className="w-5 h-5">
    <path d="M12 .587l3.668 7.431L23.4 9.748l-5.7 5.556L19.435 24 12 19.897 4.565 24l1.734-8.696L.6 9.748l7.732-1.73L12 .587z" />
  </svg>
);

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;
    const speed = 0.5; // pixels per frame

    // clone the children enough times for seamless loop
    const children = Array.from(scrollContainer.children);
    const totalWidth = children.reduce((acc, child) => acc + child.offsetWidth + 24, 0); // 24 = gap-6

    const loop = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += speed;

        // seamless scroll by duplicating content
        if (scrollContainer.scrollLeft >= totalWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section dir="ltr" className="py-20 text-white">
      <div className="text-center mb-10 px-4">
        <p className="text-4xl font-bold">ماذا يقول العميل عنا</p>
        <h2 className="text-2xl">شهادات العملاء تعكس جودة خدماتنا</h2>
        <div className="w-28 h-1 bg-[#cd7f32] mx-auto mt-4"></div>
      </div>

      <div className="overflow-hidden max-w-6xl mx-auto px-4">
        <div
          ref={scrollRef}
          className="flex gap-6 w-full"
          style={{ overflowX: "hidden", scrollBehavior: "smooth" }}
        >
          {/* repeat array multiple times for seamless loop */}
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="flex-none w-full sm:w-1/2 lg:w-1/4 bg-gradient-to-b from-[#B08B4F] to-black border shadow-md rounded-2xl p-6 text-white"
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
        </div>
      </div>
    </section>
  );
}
