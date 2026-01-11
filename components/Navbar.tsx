import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'academics' | 'facilities' | 'contact' | 'staff') => void;
  activePage: 'home' | 'about' | 'academics' | 'facilities' | 'contact' | 'staff';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: 'home' | 'about' | 'academics' | 'facilities' | 'contact' | 'staff') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const navItemClass = (page: 'home' | 'about' | 'academics' | 'facilities' | 'contact' | 'staff') => {
    const isActive = activePage === page;
    const base = "hover:text-yellow-500 transition-colors font-medium";
    const activeStyles = isActive ? "text-yellow-500 border-b-2 border-yellow-500" : "";
    return `${base} ${activeStyles}`;
  };

  const textColorClass = isScrolled || activePage !== 'home' ? 'text-slate-700' : 'text-white';
  const logoColorClass = isScrolled || activePage !== 'home' ? 'text-blue-900' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || activePage !== 'home' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
          <span className={`font-bold text-xl md:text-2xl transition-colors ${logoColorClass}`}>
            PNREDDY <span className="text-yellow-500">Techno</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-8 font-medium ${textColorClass}`}>
          <button onClick={() => handleLinkClick('home')} className={navItemClass('home')}>Home</button>
          <button onClick={() => handleLinkClick('about')} className={navItemClass('about')}>About Us</button>
          <button onClick={() => handleLinkClick('academics')} className={navItemClass('academics')}>Academics</button>
          <button onClick={() => handleLinkClick('staff')} className={navItemClass('staff')}>School Staff</button>
          <button onClick={() => handleLinkClick('facilities')} className={navItemClass('facilities')}>Facilities</button>
        </div>

        <button 
          onClick={() => handleLinkClick('contact')}
          className="hidden md:block bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105"
        >
          Contact Us
        </button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={textColorClass}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 border-t shadow-xl p-6 flex flex-col gap-4 animate-fadeIn">
          <button onClick={() => handleLinkClick('home')} className="text-left text-slate-700 font-semibold">Home</button>
          <button onClick={() => handleLinkClick('about')} className="text-left text-slate-700 font-semibold">About Us</button>
          <button onClick={() => handleLinkClick('academics')} className="text-left text-slate-700 font-semibold">Academics</button>
          <button onClick={() => handleLinkClick('staff')} className="text-left text-slate-700 font-semibold">School Staff</button>
          <button onClick={() => handleLinkClick('facilities')} className="text-left text-slate-700 font-semibold">Facilities</button>
          <button onClick={() => handleLinkClick('contact')} className="text-left text-blue-900 font-bold mt-2">Contact Us</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;