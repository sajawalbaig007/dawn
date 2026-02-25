// app/business/page.js
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const businessArticles = [
  { id: 1, title: "Nature's beauty", author: "SANA MALIK", image: "/images/img1.png" },
  { id: 2, title: "Stock market trends to watch", author: "FARAH ALI", image: "/images/img1.png" },
  { id: 3, title: "Banking reforms", author: "NAVEED ASLAM", image: "/images/img2.png" },
  { id: 4, title: "Impact of global", author: "AMNA SHAIKH", image: "/images/img1.png" },
  { id: 5, title: "Tech startups booming", author: "HASSAN RAZA", image: "/images/img2.png" },
];

export default function BusinessPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-serif">

      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wide mb-8">
        BUSINESS
      </h1>

      {/* Article Cards */}
      <div className="flex flex-col space-y-6">

        {businessArticles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col md:flex-row items-start md:items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >

            {/* Image */}
            <Link href={`/business/${article.id}`} className="shrink-0">
              <div className="relative w-full md:w-48 h-40 md:h-40">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            {/* Text */}
            <div className="p-4 md:p-6 flex-1">
              <h2 className="text-md md:text-lg font-bold text-gray-900 mb-1">{article.title}</h2>
              <p className="text-xs text-gray-500 tracking-widest">{article.author}</p>
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