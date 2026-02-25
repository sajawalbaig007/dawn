// app/news2/page.js
"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const stories = [
  {
    id: 1,
    text: "Trump's Board of Peace meeting raises more questions than answers about how his plan would be operationalised",
    image: "/images/img1.png",
    link: "/news2/1"
  },
  {
    id: 2,
    text: "Netizens need a Fiza Ali in their lives after seeing how she defended her guest on live TV",
    image: "/images/img2.png",
    link: "/news2/2"
  },
  {
    id: 3,
    text: "Editorial: For a country repeatedly threatened by sovereign default, stabilisation is an achievement",
    image: "/images/img1.png",
    link: "/news2/3"
  },
  {
    id: 4,
    text: "US envoy's remarks rile up nations 'from Nile to Euphrates' and beyond",
    image: "/images/img2.png",
    link: "/news2/4"
  },
  {
    id: 5,
    text: "Why the HEC's future role is uncertain following the devolution of powers to the provinces",
    image: "/images/img1.png",
    link: "/news2/5"
  },
  {
    id: 6,
    text: "Zara Noor Abbas opens up about industry friendships, personal growth, and where things stand with Sajal Aly",
    image: "/images/img2.png",
    link: "/news2/6"
  },
  {
    id: 7,
    text: "Select excerpts from Mohammed Hanif's The Rebel English Academy",
    image: "/images/img1.png",
    link: "/news2/7"
  },
  {
    id: 8,
    text: "One Battle After Another wins",
    image: "/images/img2.png",
    link: "/news2/8"
  },
  {
    id: 9,
    text: "Select excerpts from Mohammed Hanif's The Rebel English Academy",
    image: "/images/img1.png",
    link: "/news2/9"
  },
  {
    id: 10,
    text: "Select excerpts from Mohammed Hanif's The Rebel English Academy",
    image: "/images/img2.png",
    link: "/news2/10"
  }
];

export default function News2Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-serif">

      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wide mb-8">
        LATEST STORIES
      </h1>

      {/* Stories List */}
      <div className="flex flex-col space-y-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col md:flex-row items-start md:items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >

            {/* Text Left */}
            <div className="flex-1 p-4 md:p-6 order-2 md:order-1">
              <Link href={story.link}>
                <p className="text-sm md:text-base font-semibold text-gray-800 hover:text-red-700 cursor-pointer leading-snug">
                  {story.text}
                </p>
              </Link>
            </div>

            {/* Image Right */}
            <div className="relative w-full md:w-48 h-40 md:h-40 flex-shrink-0 bg-gray-100 order-1 md:order-2">
              <Link href={story.link}>
                <Image
                  src={story.image}
                  alt={story.text}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </Link>
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