// components/Business.js
import Image from 'next/image';
import Link from 'next/link';

export default function Business() {
  
    const related = [
    { id: 1, title: "Nature's beauty", author: "SANA MALIK", image: "/images/img1.png" },
    { id: 2, title: "Stock market trends to watch", author: "FARAH ALI", image: "/images/img1.png" },
    { id: 3, title: "Banking reforms", author: "NAVEED ASLAM", image: "/images/img2.png" },
    { id: 4, title: "Impact of global", author: "AMNA SHAIKH", image: "/images/img1.png" },
    { id: 5, title: "Tech startups booming", author: "HASSAN RAZA", image: "/images/img2.png" },
  ];

  return (
    <div className="font-serif space-y-6 max-w-md mx-auto">
      
      {/* Section heading */}
      <Link href='/business' className="text-sm font-semibold tracking-widest text-red-600 mb-4">
        BUSINESS ▶
      </Link>

      
      <hr className="border-gray-300 mt-3" />

      {/* Related articles list */}
      <div className="space-y-4">
        {related.map(({ id, title, author, image }) => (
          <Link key={id} href={`/business`} className="flex items-center gap-3 hover:text-red-600 cursor-pointer">
            <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden bg-gray-200">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div>
              <p className="font-semibold text-sm">{title}</p>
              <p className="text-xs text-gray-500 tracking-widest">{author}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}