// app/mustread/page.js
"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const mustReadCards = [
  {
    id: 1,
    text: "Editorial: Continued extension of CEC's expired term deepens perception that constitutional requirements are optional, not binding",
    image: "/images/img1.png",
    alt: "Election Commission of Pakistan",
    link: "/mustread/1"
  },
  {
    id: 2,
    text: "History: The freedom fighter who became stateless",
    image: "/images/img2.png",
    alt: "Historical black and white photograph",
    link: "/mustread/2"
  },
  {
    id: 3,
    text: "The 7 unspoken rules of attending an iftar",
    image: "/images/img1.png",
    alt: "Pakistan",
    link: "/mustread/3"
  }
];

export default function MustReadPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-serif">

      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wide mb-8">
        MUST READ STORIES 
      </h1>

      {/* Horizontal Cards */}
      <div className="flex flex-col space-y-6">

        {mustReadCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col md:flex-row items-start md:items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >

            {/* Image Left */}
            <Link href={card.link} className="flex-shrink-0">
              <Image
                src={card.image}
                alt={card.alt}
                width={180}
                height={120}
                className="object-cover cursor-pointer"
              />
            </Link>

            {/* Text Right */}
            <div className="p-4 md:p-6 flex-1">
              <p className="text-xs font-bold text-gray-900 leading-snug mb-1">
                {card.text}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Back to Home Button */}
      <div className="mt-10 flex justify-center">
        <Link href="/" className="text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors duration-200">
          ← Back to Home
        </Link>
      </div>

    </div>
  );
}