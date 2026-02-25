// components/MiddleColumn.js
import Image from 'next/image';
import Link from 'next/link';

export default function MiddleColumn() {
  
  const mustReadCards = [
    {
      id: 1,
      text: "Editorial: Continued extension of CEC's expired term deepens perception that constitutional requirements are optional, not binding",
      image: "/images/img1.png",
      alt: "Election Commission of Pakistan"
    },
    {
      id: 2,
      text: "History: The freedom fighter who became stateless",
      image: "/images/img2.png",
      alt: "Historical black and white photograph"
    },
    {
      id: 3,
      text: "The 7 unspoken rules of attending an iftar",
      image: "/images/img1.png",
      alt: "Pakistan"
    }
  ];

  return (
    <div className="font-serif space-y-6 max-w-md mx-auto px-4">
      
      {/* MUST READ STORIES Heading */}
      <div className="pb-1 mb-2">
        <Link href="/mustread" className="text-red-600 font-semibold uppercase text-sm tracking-wide cursor-pointer hover:underline">
          MUST READ STORIES ▶
        </Link>
      </div>

      {/* Mapped Cards */}
      {mustReadCards.map((card, index) => (
        <div key={card.id} className={`flex flex-col sm:flex-row gap-3 ${index < mustReadCards.length - 1 ? 'border-b border-gray-300 pb-4' : 'pb-2'}`}>
          
          {/* Image */}
          <div className="relative w-full sm:w-28 h-32 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
            <Image 
              src={card.image}
              alt={card.alt}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Text */}
          <div className="flex-1">
            <Link href="/left-column">
              <p className="text-xs font-bold text-gray-900 hover:text-red-600 cursor-pointer leading-snug">
                {card.text}
              </p>
            </Link>
          </div>
        </div>
      ))}

      {/* Bottom line */}
      <div className='border-b border-gray-300 w-full'></div>
    </div>
  );
}