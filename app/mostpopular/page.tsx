// app/mostpopular/page.js
"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const mostPopularData = [
  {
    id: 1,
    number: "16",
    title: "CM Maryam unveils free land scheme for farmers",
    desc: "Cultivable govt land to be leased for 10 years free of cost.",
    category: "Pakistan",
    time: "Updated 2 days ago",
    image: "/images/banner1.png",
    link: "/mostpopular/1",
  },
  {
    id: 2,
    number: "12",
    title: "Stock market hits record high amid reforms",
    desc: "Investors celebrate as banking sector posts strong gains.",
    category: "Business",
    time: "Updated 1 day ago",
    image: "/images/imgB2.jpg",
    link: "/mostpopular/2",
  },
  {
    id: 3,
    number: "8",
    title: "Pakistan secure thrilling win in final over",
    desc: "Babar and Rizwan lead team to dramatic victory.",
    category: "Sports",
    time: "Updated 5 hours ago",
    image: "/images/imgB1.jpg",
    link: "/mostpopular/3",
  },
  {
    id: 4,
    number: "20",
    title: "Heavy rains expected across major cities",
    desc: "Met department issues alert for next 48 hours.",
    category: "Weather",
    time: "Updated 3 hours ago",
    image: "/images/imgB3.jpg",
    link: "/mostpopular/4",
  },
  {
    id: 5,
    number: "10",
    title: "New tech startup raises $5M in seed funding",
    desc: "Entrepreneurs aim to revolutionize local logistics industry.",
    category: "Business",
    time: "Updated 12 hours ago",
    image: "/images/imgB3.jpg",
    link: "/mostpopular/5",
  },
  {
    id: 6,
    number: "14",
    title: "Art exhibition showcases modern Pakistani artists",
    desc: "Gallery opens doors to contemporary and experimental art.",
    category: "Culture",
    time: "Updated yesterday",
    image: "/images/imgB1.jpg",
    link: "/mostpopular/6",
  },
  {
    id: 7,
    number: "18",
    title: "Electric vehicle adoption rises in urban centers",
    desc: "Government incentives and infrastructure drive growth.",
    category: "Technology",
    time: "Updated 6 hours ago",
    image: "/images/imgB2.jpg",
    link: "/mostpopular/7",
  },
  {
    id: 8,
    number: "9",
    title: "International cricket: Pakistan vs India highlights",
    desc: "Fans celebrate thrilling moments from the match.",
    category: "Sports",
    time: "Updated 4 hours ago",
    image: "/images/imgB2.jpg",
    link: "/mostpopular/8",
  },
  {
    id: 9,
    number: "7",
    title: "Local film festival attracts global attention",
    desc: "Screenings feature award-winning short and feature films.",
    category: "Culture",
    time: "Updated 2 days ago",
    image: "/images/imgB3.jpg",
    link: "/mostpopular/9",
  },
  {
    id: 10,
    number: "11",
    title: "Authorities crack down on illegal trade networks",
    desc: "Operation seizes contraband and arrests several suspects.",
    category: "Pakistan",
    time: "Updated today",
    image: "/images/imgB1.jpg",
    link: "/mostpopular/10",
  },
  {
    id: 11,
    number: "13",
    title: "Major tech conference kicks off in Karachi",
    desc: "Startups, investors, and tech enthusiasts gather for networking.",
    category: "Technology",
    time: "Updated yesterday",
    image: "/images/imgB2.jpg",
    link: "/mostpopular/11",
  },
  {
    id: 12,
    number: "5",
    title: "Severe air pollution levels trigger public health warning",
    desc: "Authorities advise masks and restricted outdoor activity.",
    category: "Environment",
    time: "Updated 3 hours ago",
    image: "/images/imgB3.jpg",
    link: "/mostpopular/12",
  },
];

export default function MostPopularPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-serif">

      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wide mb-8">
        MOST POPULAR
      </h1>

      {/* Horizontal Cards */}
      <div className="flex flex-col space-y-6">

        {mostPopularData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start md:items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >

            {/* Image Left */}
            <Link href={item.link} className="flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={180}
                height={120}
                className="object-cover w-full md:w-48 h-40 md:h-40 cursor-pointer"
              />
            </Link>

            {/* Text Right */}
            <div className="p-4 md:p-6 flex-1">
              <div className="text-red-700 font-bold text-lg mb-1">{item.number}</div>
              <h2 className="text-md md:text-lg font-bold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-gray-700 text-sm mb-2">{item.desc}</p>
              <p className="text-xs text-gray-500">{item.category}, {item.time}</p>
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