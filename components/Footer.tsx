import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-6">
      
      {/* Content Wrapper */}
      <div className="px-6 md:px-12">

        {/* Logo */}
        <h2 className="text-3xl font-serif mb-10">DAWN</h2>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

          <div className="space-y-2">
            <p>CONTACT</p>
            <p>CONTRIBUTION GUIDELINES</p>
            <p>CODE OF ETHICS</p>
            <p>AI POLICY</p>
            <p>TERMS OF USE</p>
            <p>PRIVACY</p>
            <p>COMMENT MODERATION</p>
          </div>

          <div className="space-y-2">
            <p>SUBSCRIBE TO NEWSPAPER</p>
            <p>REPRODUCTION COPYRIGHTS</p>
            <p>ADVERTISE ON DAWN.COM</p>
            <p>BRANDED CONTENT</p>
            <p>CAREERS</p>
            <p>OBITUARIES</p>
          </div>

          <div className="space-y-2">
            <p>PRAYER TIMINGS</p>
            <p>STOCK/FOREX/GOLD</p>
            <p>WEATHER</p>
            <p>DESKTOP</p>
            <p>PRISM</p>
            <p>IMAGES</p>
            <p>SPECIAL REPORTS</p>
          </div>

          <div className="space-y-2">
            <p>EOS/ICON/YOUNG WORLD</p>
            <p>CITYFM89</p>
            <p>HERALD</p>
            <p>TEELI</p>
            <p>AURORA</p>
            <p>DAWN NEWS</p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-xs text-gray-400 flex flex-col md:flex-row justify-between">
          <p>Copyright © 2026, Dawn</p>
          <p>NewsKit Publishing Platform by CompuNode</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;