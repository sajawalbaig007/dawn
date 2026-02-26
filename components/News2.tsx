// components/MustReadStories.js - LeftColumn style
import Image from 'next/image';
import Link from 'next/link';

export default function News2() {
  
  const stories = [
    {
      id: 1,
      text: "Trump's Board of Peace meeting raises more questions than answers about how his plan would be operationalised",
      image: "/images/img1.png"
    },
    {
      id: 2,
      text: "Netizens need a Fiza Ali in their lives after seeing how she defended her guest on live TV",
      image: "/images/img2.png"
    },
    {
      id: 3,
      text: "Editorial: For a country repeatedly threatened by sovereign default, stabilisation is an achievement",
      image: "/images/img1.png"
    },
    {
      id: 4,
      text: "US envoy's remarks rile up nations 'from Nile to Euphrates' and beyond",
      image: "/images/img2.png"
    },
    {
      id: 5,
      text: "Why the HEC's future role is uncertain following the devolution of powers to the provinces",
      image: "/images/img1.png"
    },
    {
      id: 6,
      text: "Zara Noor Abbas opens up about industry friendships, personal growth, and where things stand with Sajal Aly",
      image: "/images/img2.png"
    },
    {
      id: 7,
      text: "Select excerpts from Mohammed Hanif's The Rebel English Academy",
      image: "/images/img1.png"
    },
    {
      id: 8,
      text: "One Battle After Another wins",
      image: "/images/img2.png"
    },
    {
      id: 9,
      text: "Select excerpts from Mohammed Hanif’s The Rebel English Academy",
       image: "/images/img1.png"
    },
    {
      id: 10,
      text: "Select excerpts from Mohammed Hanif’s The Rebel English Academy",
       image: "/images/img2.png"
    }
  ];

  return (
    <div className="font-serif">
      
      
      {/* Stories with left text and right image */}
      <div className="space-y-3 mt-11">
        {stories.map((story) => (
          <div key={story.id} className="flex gap-2 border-b border-gray-200 pb-4 last:border-b-0">
            
            {/* Text - left side */}
            <div className="flex-1">
              <Link href="/news2">
                <p className="text-[12px] font-semibold md:text-black sm:text-white hover:text-red-700 cursor-pointer leading-tight">
                  {story.text}
                </p>
              </Link>
            </div>
            
            {/* Image - right side (small) */}
            <div className="relative w-14 h-14 flex-shrink-0 bg-gray-100">
              <Image 
                src={story.image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
       <p className='border-b pt-1 border-gray-300 w-72'></p>
    </div>
  );
}