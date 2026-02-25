// components/LeftColumn.js
import Image from 'next/image';
import Link from 'next/link'
export default function LeftColumn() {
  
  // News Data Array
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
    
  ];

  return (
    <div className="space-y-5 font-serif">
      {/* PSX Story (Special with Related) */}
      <div className="border-b border-gray-300 pb-5">
        {/* Full width image for main story */}
        <div className="relative h-48 w-full mb-3 bg-gray-100">
          <Image 
            src="/images/img1.png"
            alt="PSX"
            fill
            className="object-cover"
          />
        </div>
        
        <h2 className="text-lg font-bold leading-tight hover:text-red-700 cursor-pointer">
          Another meltdown at PSX as KSE-100 loses over 5,400 points
        </h2>
        
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          Benchmark index declines by 3.16pc amid broad sell-off.
        </p>
        
        <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
          UPDATED ABOUT 14 HOURS AGO
        </p>

        {/* RELATED Section */}
        <div className="mt-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            RELATED
          </h3>
          
          <div className="space-y-2">
            {[
              'PSX plunges record 6,683 points on geopolitical fears',
              'Bears wipe out over 5,000 points from KSE-100 as index closes in the red',
              'Bearish spell grips psx amid lack of triggers'
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-gray-300 pl-2">
                <p className="text-sm font-medium hover:text-red-700 cursor-pointer leading-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News Cards with Left Side Images */}
      {newsItems.map((item) => (
        <div key={item.id} className="border-b border-gray-300 pb-4 last:border-b-0">
          
          {/* Flex container for image and content */}
          <div className="flex gap-3">
            
            {/* Left side image - fixed width */}
            <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100">
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right side content */}
            <div className="flex-1">
              <h2 className="text-[15px] font-bold leading-snug hover:text-red-700 cursor-pointer">
                {item.title}
              </h2>
              
              <p className="text-xs text-gray-600 mt-0.5 leading-relaxed line-clamp-2">
                {item.description}
              </p>
              
              <p className="text-[10px] text-gray-400 mt-1 italic">
                {item.timestamp}
              </p>
            </div>
          </div>
          
        </div>
      ))}
      <div>
        <Link 
          href="/newspage"
          className="text-xs tracking-widest text-red-600 mb-4"
        >
          READ MORE TOP STORIES ▶
        </Link>
      </div>
    </div>
  );
}