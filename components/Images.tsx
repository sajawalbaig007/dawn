// components/ImageSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function ImageSection() {

  const related = [
     { id: 1, title: "Nature's beauty", author: "SANA MALIK", image: "/images/gs1.png" },
    { id: 2, title: "Street photography highlights", author: "ALI ZAFAR", image: "/images/img1.png" },
    { id: 3, title: "Wildlife in focus", author: "NIDA HUSSAIN", image: "/images/gs2.jpg" },
    { id: 4, title: "Cultural festivals through lens", author: "FARAH IQBAL", image: "/images/gs1.png" },
    { id: 5, title: "Nature's beauty", author: "SANA MALIK", image: "/images/gs3.jpg" },
  ];

  return (
    <div className="font-serif space-y-6 max-w-md mx-auto">

      {/* Section heading */}
      <Link href='/image' className="text-sm font-semibold tracking-widest text-red-600 mb-4">
        IMAGES ▶
      </Link>

      {/* Featured article */}
      

      <hr className="border-gray-300 mt-3" />

      {/* Related articles list */}
      <div className="space-y-4">
        {related.map(({ id, title, author, image }) => (
          <Link key={id} href={`/image`} className="flex items-center gap-3 hover:text-red-600 cursor-pointer">
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