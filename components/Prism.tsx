// app/prism/page.tsx
"use client";
import React from "react";
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
    img: "/images/gs3.jpg",
    title: "The shutdown of USAID and the deeper crisis behind it",
    description:
      "USAID's collapse exposes a bitter truth: global aid is fragile, bureaucratic, and ultimately at the mercy of politics at home and abroad.",
    author: "Shuyan (Michael) Huang",
    date: "Published 17 Feb, 2026 12:55pm",
  },
  {
    id: 3,
    img: "/images/gs2.jpg",
    title: "When floods come back, they find the same people waiting",
    description:
      "The floods of 2022 and 2025 were not just nature’s wrath. They were mirrors, reflecting how society is organised — who is protected and who is left exposed.",
    author: "Ehsan Leghari",
    date: "Published 12 Feb, 2026 12:02pm",
  },
];

const ArticleCard: React.FC<Article> = ({ img, title, description, author, date }) => (
  <div className="flex flex-col gap-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow duration-200 w-full sm:w-[300px] md:w-[350px] h-[400px] flex-shrink-0">
    <div className="relative w-full h-48">
      <Image
        src={img}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-t"
        priority
      />
    </div>
    <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
        {description && <p className="text-sm text-gray-700 mt-2 line-clamp-4">{description}</p>}
      </div>
      <p className="text-xs text-gray-500 mt-2">
        <span>{author}</span> <br /> <span>{date}</span>
      </p>
    </div>
  </div>
);

export default function PrismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-serif tracking-widest border-b border-black pb-2 mb-8">
        P R I S M
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <ArticleCard key={a.id} {...a} />
        ))}
      </div>

      {/* Line at the end */}
      <div className="border-t border-black mt-8"></div>
    </div>
  );
}