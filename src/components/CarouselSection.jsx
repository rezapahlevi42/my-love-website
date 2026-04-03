import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselSection() {
  const slides = [
    { image: "/images/Joel.png" },
    { image: "/images/superman.png" },
    { image: "/images/zootopia.png" },
    { image: "/images/sore.png" },
    { image: "/images/la-la-land.png" },
    { image: "/images/miles.png" },
    { image: "/images/steve.png" },
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // AUTO SLIDE
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  // BUTTON
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  };

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    startAutoSlide();
  };

  return (
      <div className="w-full max-w-7xl flex gap-10 items-center">

        {/* LEFT - CAROUSEL */}
        <div className="w-2/3 relative h-[500px] rounded-2xl overflow-hidden">

          {/* STACKED IMAGES (FADE SYSTEM) */}
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt="slide"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                ${current === index ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            />
          ))}

          {/* PREV */}
          <button
            onClick={handlePrev}
            className="z-30 absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur px-3 py-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          {/* NEXT */}
          <button
            onClick={handleNext}
            className="z-30 absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur px-3 py-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* RIGHT - TEXT (STATIC, TIDAK BERUBAH) */}
        <div className="w-1/3 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 font-['Marcellus']">
            I Will Remember You Through Their Stories 🤍
          </h2>

          <p className="font-['Montserrat'] text-lg text-gray-300 leading-relaxed">
            Each couple here reminds me of how love isn’t always easy, the struggles they go through, the challenges they face, and how they choose to stay through it all. It makes me think of us, and how what we have is something worth holding onto.
          </p>
        </div>

      </div>
  );
}
