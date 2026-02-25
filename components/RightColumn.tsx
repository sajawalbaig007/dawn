// components/RightColumnClone.js
import Image from 'next/image';
import Link from 'next/link';

export default function RightColumnClone() {
  return (
    <div className="font-serif max-w-sm mx-auto space-y-6">
      
      {/* SYSTEMIC ROT Card */}
      <div className="border border-gray-200 p-4 bg-white">
        {/* Main Image */}
        <div className="relative h-40 w-full mb-3 bg-gray-100">
          <Image 
            src="/images/news.png"
            alt="Systemic Rot"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Headline */}
        <h2 className="text-lg font-bold text-gray-900 leading-tight mb-3">
          SYSTEMIC ROT: HOW A 'SYSTEM' OF CORRUPT OFFICIALS AND POLITICIANS IS USURPING KARACHI'S PRIME REAL ESTATE
        </h2>
        
        {/* Author List */}
        <div className="space-y-1 text-sm text-gray-700 mb-2">
          <p>1. News Desk</p>
          <p>2. Iftikhar A. Khan</p>
          <p>3. Imran Gabol</p>
          <p>4. Anwar Iqbal</p>
          <p>5. Imtiaz Ali</p>
        </div>
      </div>

      {/* RAMAZAN TIMINGS Card - Red Background */}
      <div className="border border-gray-200 p-4 bg-red-600"> {/* bg-red-600 for red background */}
        
        {/* Select Options instead of Image */}
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">Select City</label>
          <select className="w-full p-2 rounded-md border border-red-400 bg-white text-gray-800 text-sm">
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
            <option value="rawalpindi">Rawalpindi</option>
            <option value="multan">Multan</option>
            <option value="peshawar">Peshawar</option>
            <option value="quetta">Quetta</option>
          </select>
        </div>

        {/* City Tabs Alternative - if you want tabs instead of dropdown */}
        <div className="mb-4">
          <p className="text-white text-sm font-medium mb-2">Select City</p>
          <div className="flex flex-wrap gap-2">
            {['Karachi', 'Lahore', 'Islamabad', 'Multan'].map((city) => (
              <button 
                key={city}
                className="px-3 py-1 bg-white text-red-600 text-xs rounded-full hover:bg-red-100 transition-colors"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-3">RAMAZAN TIMINGS</h3>
        
        {/* Timings Table - White text for contrast */}
        <div className="w-full mb-4">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-2 border-b border-white/30 pb-2 mb-2 text-xs font-bold text-white uppercase">
            <div>Date</div>
            <div>Sehri</div>
            <div>Iftaar</div>
          </div>
          
          {/* Table Rows */}
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-3 gap-2">
              <div className="text-white/90">2026-02-23</div>
              <div className="text-white font-medium">5:42 am</div>
              <div className="text-white font-medium">6:32 pm</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-white/90">2026-02-24</div>
              <div className="text-white font-medium">5:41 am</div>
              <div className="text-white font-medium">6:32 pm</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-white/90">2026-02-25</div>
              <div className="text-white font-medium">5:40 am</div>
              <div className="text-white font-medium">6:33 pm</div>
            </div>
          </div>
        </div>

        {/* Sponsored By - White text */}
        <p className="text-xs text-white/70 italic">Sponsored By</p>
      </div>
    </div>
  );
}