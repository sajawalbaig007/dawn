// components/Navbar.js
import React from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full shadow-sm">

      {/* Top Black Bar - Tablet/Desktop */}
      <div className="hidden sm:flex justify-center gap-3 bg-black text-white text-[10px] py-1 uppercase tracking-wide overflow-x-auto whitespace-nowrap">
        <span>EPAPER</span>
        <span>LIVE TV</span>
        <span>DAWNNEWS URDU</span>
        <span>IMAGES</span>
        <span>HERALD</span>
        <span>AURORA</span>
        <span>CITYFM89</span>
        <span>ADVERTISE</span>
        <span>EVENTS</span>
        <span>SUPPLEMENTS</span>
        <span>CAREERS</span>
        <span>OBITUARIES</span>
      </div>

      {/* Logo Section */}
      <div className="flex flex-col items-center py-5 bg-white">
        <img
          src="/images/logo.png"
          alt="Dawn Logo"
          className="w-36 sm:w-40 md:w-44"
        />
        <p className="text-[11px] text-gray-500 tracking-widest mt-1 uppercase text-center">
          E-PAPER | FEBRUARY 23, 2026
        </p>
      </div>

      {/* Thin Black Line */}
      <div className="px-4">
        <div className="h-[2px] bg-black w-full"></div>
      </div>

      {/* Navigation */}
      <div className="px-4 border-b border-gray-300">
        <div className="flex items-center justify-between py-2">

          {/* Desktop / Tablet Links */}
          <div className="hidden sm:flex flex-1 gap-4 text-[11px] font-light uppercase tracking-wide whitespace-nowrap overflow-x-auto">
            <Link href="/"><span className="cursor-pointer hover:text-red-600 transition">HOME</span></Link>
            <Link href="/newspage"><span className="cursor-pointer hover:text-red-600 transition">LATEST</span></Link>
            <Link href="/mustread"><span className="cursor-pointer hover:text-red-600 transition">PAKISTAN</span></Link>
            <Link href="/opinion"><span className="cursor-pointer hover:text-red-600 transition">OPINION</span></Link>
            <Link href="/business"><span className="cursor-pointer hover:text-red-600 transition">BUSINESS</span></Link>
            <Link href="/image"><span className="cursor-pointer hover:text-red-600 transition">IMAGES</span></Link>
            <Link href="/prism"><span className="cursor-pointer hover:text-red-600 transition">PRISM</span></Link>
            <Link href="/world"><span className="cursor-pointer hover:text-red-600 transition">WORLD</span></Link>
            <Link href="/sport"><span className="cursor-pointer hover:text-red-600 transition">SPORT</span></Link>
            <Link href="/breathe"><span className="cursor-pointer hover:text-red-600 transition">BREATHE</span></Link>
            <Link href="/magazines"><span className="cursor-pointer hover:text-red-600 transition">MAGAZINES</span></Link>
            <Link href="/tech"><span className="cursor-pointer hover:text-red-600 transition">TECH</span></Link>
            <Link href="/videos"><span className="cursor-pointer hover:text-red-600 transition">VIDEOS</span></Link>
            <Link href="/popular"><span className="cursor-pointer hover:text-red-600 transition">POPULAR</span></Link>
            <Link href="/archive"><span className="cursor-pointer hover:text-red-600 transition">ARCHIVE</span></Link>
            <Link href="/flood-donations"><span className="cursor-pointer hover:text-red-600 transition">FLOOD DONATIONS</span></Link>
          </div>

          {/* Mobile Links (HOME → OPINION) */}
          <div className="flex sm:hidden gap-4 text-[11px] font-light uppercase tracking-wide whitespace-nowrap flex-1 overflow-x-auto">
            <Link href="/"><span className="cursor-pointer hover:text-red-600 transition">HOME</span></Link>
            <Link href="/newspage"><span className="cursor-pointer hover:text-red-600 transition">LATEST</span></Link>
            <Link href="/pakistan"><span className="cursor-pointer hover:text-red-600 transition">PAKISTAN</span></Link>
            <Link href="/opinion"><span className="cursor-pointer hover:text-red-600 transition">OPINION</span></Link>
          </div>

          {/* Search Input */}
          <div className="relative ml-4 flex-shrink-0">
            <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 pl-7 pr-2 py-1 text-xs w-24 sm:w-28 md:w-32 outline-none focus:border-black"
            />
          </div>

        </div>
      </div>

      {/* Banner */}
      <div className="py-10 px-5">
        <img src="/images/banner.png" alt="Banner" />
      </div>

    </header>
  );
};

export default Navbar;