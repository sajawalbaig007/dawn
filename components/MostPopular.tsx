"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    number: "16",
    title: "CM Maryam unveils free land scheme for farmers",
    desc: "Cultivable govt land to be leased for 10 years free of cost.",
    category: "Pakistan",
    time: "Updated 2 days ago",
    image: "/images/banneradd.jpg",
    link: "/mostpopular/1",
  },
  {
    id: 2,
    number: "12",
    title: "Stock market hits record high amid reforms",
    desc: "Investors celebrate as banking sector posts strong gains.",
    category: "Business",
    time: "Updated 1 day ago",
    image: "/images/cola.jpg",
    link: "/mostpopular/2",
  },
  {
    id: 3,
    number: "8",
    title: "Pakistan secure thrilling win in final over",
    desc: "Babar and Rizwan lead team to dramatic victory.",
    category: "Sports",
    time: "Updated 5 hours ago",
    image: "/images/banner1.png",
    link: "/mostpopular/3",
  },
  {
    id: 4,
    number: "20",
    title: "Heavy rains expected across major cities",
    desc: "Met department issues alert for next 48 hours.",
    category: "Weather",
    time: "Updated 3 hours ago",
    image: "/images/banner.png",
    link: "/mostpopular/4",
  },
];

export default function MostPopularSlider() {
  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const slide = slides[current];

  return (
    <div className="w-full bg-white border-t border-gray-300 py-6 font-serif">

      {/* Header - clickable */}
      <div className="flex justify-between items-center mb-6 px-4">
        <Link href="/mostpopular">
          <h2 className="text-red-600 font-semibold uppercase text-sm tracking-wide cursor-pointer hover:underline">
            MOST POPULAR ▶
          </h2>
        </Link>
        <span className="text-sm text-gray-500">
          Over last 24 hours
        </span>
      </div>

      {/* Slide wrapper */}
      <div key={slide.id} className="relative grid md:grid-cols-2 gap-8 items-center px-4 transition-all duration-500 ease-in-out">

        {/* LEFT TEXT */}
        <div className="relative pl-14 pr-10">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
          >
            ◀
          </button>

          {/* Number */}
          <div className="text-4xl font-bold text-red-700 mb-2">
            {slide.number}
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold leading-snug mb-3 text-gray-900">
            {slide.title}
          </h3>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-gray-300 mb-3"></div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            {slide.desc}
          </p>

          {/* Meta */}
          <p className="text-xs text-gray-500">
            {slide.category}, {slide.time}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Link href={slide.link}>
            <img
              key={slide.id} // ✅ React will replace this img when slide.id changes
              src={slide.image}
              alt={slide.title}
              className="w-full h-56 object-cover cursor-pointer"
            />
          </Link>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
          >
            ▶
          </button>
        </div>

      </div>
    </div>
  );
}