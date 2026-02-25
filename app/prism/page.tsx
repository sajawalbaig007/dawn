// app/prism/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id: number;
  img: string;
  title: string;
  description?: string;
  author: string;
  date: string;
}

const articles: Article[] = [
  {
    id: 1,
    img: "/images/gs1.png",
    title: "Pakistan’s energy sector isn’t broken by chance. It’s broken by design",
    author: "Muhammad Hamza Latif",
    date: "Updated 20 Feb, 2026 02:19pm",
  },
  {
    id: 2,
    img: "/images/gs2.jpg",
    title: "The shutdown of USAID and the deeper crisis behind it",
    description: "USAID's collapse exposes a bitter truth: global aid is fragile, bureaucratic, and ultimately at the mercy of politics at home and abroad.",
    author: "Shuyan (Michael) Huang",
    date: "Published 17 Feb, 2026 12:55pm",
  },
  {
    id: 3,
    img: "/images/gs3.jpg",
    title: "When floods come back, they find the same people waiting",
    description: "The floods of 2022 and 2025 were not just nature’s wrath. They were mirrors, reflecting how society is organised — who is protected and who is left exposed.",
    author: "Ehsan Leghari",
    date: "Published 12 Feb, 2026 12:02pm",
  },
  {
    id: 4,
    img: "/images/gs1.png",
    title: "Climate change and its impact on Pakistan’s agriculture",
    description: "Rising temperatures and unpredictable weather patterns are threatening food security.",
    author: "Ali Khan",
    date: "Updated 18 Feb, 2026 11:00am",
  },
  {
    id: 5,
    img: "/images/gs2.jpg",
    title: "The rise of digital banking in South Asia",
    description: "How fintech startups are revolutionizing traditional banking systems.",
    author: "Sania Mirza",
    date: "Published 15 Feb, 2026 09:30am",
  },
  {
    id: 6,
    img: "/images/gs3.jpg",
    title: "Pakistan’s youth and the entrepreneurship boom",
    description: "Young innovators are shaping the country’s economic future.",
    author: "Hassan Ali",
    date: "Updated 10 Feb, 2026 05:45pm",
  },
];

export default function PrismPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-serif">

      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wide mb-8">
        P R I S M
      </h1>

      {/* Article Cards */}
      <div className="flex flex-col space-y-6">

        {articles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col md:flex-row items-start md:items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >

            {/* Image */}
            <Link href={`/prism/${article.id}`} className="shrink-0">
              <Image
                src={article.img}
                alt={article.title}
                width={180}
                height={120}
                className="object-cover w-full md:w-48 h-40 md:h-40 cursor-pointer"
              />
            </Link>

            {/* Text */}
            <div className="p-4 md:p-6 flex-1">
              <h2 className="text-md md:text-lg font-bold text-gray-900 mb-2">{article.title}</h2>
              {article.description && <p className="text-gray-700 text-sm mb-2">{article.description}</p>}
              <p className="text-xs text-gray-500">{article.author}, {article.date}</p>
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