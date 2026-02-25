// app/page.js
import News from '../components/News';
import News2 from '../components/News2';
import MustRead from '../components/MiddleColumn';
import RightColumn from '../components/RightColumn';
import MostPopular from '../components/MostPopular';
import Opinion from '../components/Opinion';      // Example new component
import Business from '../components/Business';    // Example new component
import ImageSection from '../components/Images'; // Example new component
import Footer from '../components/Footer'
import Prism from '../components/Prism'
export default function Home() {
  return (
    <>
    
    <div className="max-w-7xl mx-auto px-4 py-6">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Column 1 */}
        <div className="md:col-span-3">
          <News />
        </div>

        {/* Last 3 Columns Wrapper */}
        <div className="md:col-span-9">
          
          {/* Top Grid: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MustRead />
            <News2 />
            <RightColumn />
          </div>

          {/* Most Popular Slider */}
          <div className="mt-8">
            <MostPopular />
          </div>

          {/* Bottom Grid: Another 3 Columns (Opinion, Business, Images) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-7 mt-8">
            <Opinion />
            <Business />
            <ImageSection />
          </div>

        </div>
       
      </div>

      <Prism/>
    </div>
      <Footer/>
    </>
  );
} 