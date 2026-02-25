// app/leftcolumn/page.js
"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "3 FC personnel martyred in terrorist attack in KP's Karak",
    description: "According to officials, the personnel were martyred as an ambulance carrying the wounded from an earlier quadcopter attack was ambushed.",
    timestamp: "Published about 13 hours ago",
    image: "/images/img1.png",
    category: "news"
  },
  {
    id: 2,
    title: "Iran says any US attack including limited strikes would be 'act of aggression'",
    description: "Foreign ministry spokesman Esmaeil Baqaei boasts Iranians had never \"capitulated\" at any point in their history.",
    timestamp: "Published about 14 hours ago",
    image: "/images/img2.png",
    category: "international"
  },
  {
    id: 3,
    title: "Opposition leaders hold sit-in outside Supreme Court, demand immediate scheduling of Imran's cases",
    description: "TTAP, PTI demand complete medical examination of Imran by his personal doctors.",
    timestamp: "Updated about 13 hours ago",
    image: "/images/img1.png",
    category: "politics"
  },
  {
    id: 4,
    title: "PM Shehbaz to undertake 2-day Doha visit to explore new avenues of cooperation with Qatar: FO",
    description: "Premier will meet with Qatari emir to discuss \"entire spectrum of bilateral relations\", FO says.",
    timestamp: "Updated about 16 hours ago",
    image: "/images/img2.png",
    category: "politics"
  },
  {
    id: 5,
    title: "Another Tejas jet lost as Indian Air Force grounds fleet for inspections, reports local media",
    description: "The incident, believed to have been caused by a brake failure, took place on February 7.",
    timestamp: "Published about 16 hours ago",
    image: "/images/img1.png",
    category: "international"
  },
  {
    id: 6,
    title: "ECP to hear plea against victory of PPP's Ali Hassan Zehri from Hub in Feb 8 elections",
    description: "The commission will hear the plea on Tuesday; recount had declared Zehri the winner, even though the original count had not even declared him the runner-up.",
    timestamp: "About 14 hours ago",
    image: "/images/img2.png",
    category: "politics"
  },
  {
    id: 7,
    title: "Increased risk of glacial floods in Gilgit-Baltistan due to above-normal temperatures: PMD",
    description: "In its Feb-April weather outlook, PMD indicates that the risk of glacier melt acceleration and potential Glof occurrences may increase in vulnerable areas.",
    timestamp: "Published about 14 hours ago",
    image: "/images/img1.png",
    category: "weather"
  },
  {
    id: 8,
    title: "'National security is non-negotiable': Parliamentary secretary on Afghanistan strikes",
    description: "KP governor says Pakistan will \"not allow our soil to be destabilised by forces operating from across the border\".",
    timestamp: "Updated about 17 hours ago",
    image: "/images/img2.png",
    category: "national"
  }
];

export default function LeftColumnPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-serif">

      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wide mb-8">
        LATEST NEWS
      </h1>

      {/* News List */}
      <div className="flex flex-col space-y-6">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start md:items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Image Left */}
            <div className="relative w-full md:w-48 h-40 md:h-40 flex-shrink-0 bg-gray-100 order-1 md:order-1">
              <Link href={`/leftcolumn/${item.id}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </Link>
            </div>

            {/* Text Right */}
            <div className="flex-1 p-4 md:p-6 order-2 md:order-2">
              <Link href={`/leftcolumn/${item.id}`}>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 hover:text-red-700 cursor-pointer mb-2 leading-snug">
                  {item.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                {item.description}
              </p>
              <p className="text-xs text-gray-400 italic">{item.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors shadow-sm"
        >
          ← Back to Home
        </Link>
      </div>

    </div>
  );
}