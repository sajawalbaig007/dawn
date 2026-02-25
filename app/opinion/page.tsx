// app/opinion/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const opinionArticles = [
  { id: 1, title: "Why education reform is long overdue", author: "Ali Raza", image: "/images/gs1.png", date: "Updated 20 Feb, 2026" },
  { id: 2, title: "Social media and mental health", author: "Sania Mirza", image: "/images/gs2.jpg", date: "Published 18 Feb, 2026" },
  { id: 3, title: "Climate policies: What Pakistan must do", author: "Ehsan Leghari", image: "/images/gs3.jpg", date: "Updated 16 Feb, 2026" },
  { id: 4, title: "The future of urban development", author: "Hassan Ali", image: "/images/gs4.jpg", date: "Published 15 Feb, 2026" },
  { id: 5, title: "The role of media in shaping opinions", author: "Farah Ali", image: "/images/ICONlogo.png", date: "Updated 14 Feb, 2026" },
];

export default function OpinionPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-serif">

      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wide mb-8">
        OPINION
      </h1>

      {/* Article Cards */}
      <div className="flex flex-col space-y-6">
        {opinionArticles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col md:flex-row items-start md:items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Link href={`/opinion/${article.id}`} className="shrink-0">
              <div className="relative w-full md:w-48 h-40 md:h-40">
                <Image src={article.image} alt={article.title} fill className="object-cover" />
              </div>
            </Link>
            <div className="p-4 md:p-6 flex-1">
              <h2 className="text-md md:text-lg font-bold text-gray-900 mb-1">{article.title}</h2>
              <p className="text-xs text-gray-500 tracking-widest">{article.author}, {article.date}</p>
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