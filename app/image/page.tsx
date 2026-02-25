// app/image/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const imageArticles = [
  { id: 1, title: "Beautiful landscapes of Pakistan", caption: "Nature at its best", image: "/images/image1.webp", date: "Updated 21 Feb, 2026" },
  { id: 2, title: "Modern architecture highlights", caption: "Cityscapes & designs", image: "/images/image2.webp", date: "Updated 20 Feb, 2026" },
  { id: 3, title: "Wildlife photography insights", caption: "Capturing the wild", image: "/images/image3.webp", date: "Published 19 Feb, 2026" },
  { id: 4, title: "Cultural festivals across Pakistan", caption: "Colors & traditions", image: "/images/imgOne.webp", date: "Published 18 Feb, 2026" },
  { id: 5, title: "Street art and murals", caption: "Urban creativity", image: "/images/imgl.jpg", date: "Updated 17 Feb, 2026" },
  { id: 6, title: "Historic monuments", caption: "Heritage & history", image: "/images/imgl2.jpg", date: "Updated 16 Feb, 2026" },
  { id: 7, title: "Traditional cuisine photography", caption: "Flavors & colors", image: "/images/imgl3.jpg", date: "Published 15 Feb, 2026" },
];

export default function ImagePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-serif">

      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wide mb-8">
        IMAGES
      </h1>

      {/* Image Cards */}
      <div className="flex flex-col space-y-6">
        {imageArticles.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            
            <Link href={`/image/${item.id}`} className="shrink-0">
              <div className="relative w-full md:w-48 h-40 md:h-40">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
            </Link>

            <div className="p-4 md:p-6 flex-1">
              <h2 className="text-md md:text-lg font-bold text-gray-900 mb-1">{item.title}</h2>
              <p className="text-sm text-gray-700 mb-1">{item.caption}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-10 flex justify-center">
        <Link href="/" className="text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors duration-200">
          ← Back to Home
        </Link>
      </div>

    </div>
  );
}