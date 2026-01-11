
import React from 'react';
import { GalleryItem } from '../data/galleryData';

interface GalleryHighlightsProps {
  onNavigate: (page: 'home' | 'about' | 'academics' | 'facilities' | 'contact' | 'staff' | 'gallery') => void;
  data: GalleryItem[];
}

const GalleryHighlights: React.FC<GalleryHighlightsProps> = ({ onNavigate, data }) => {
  const highlights = data.filter(item => item.isSpotlight).slice(0, 3);
  const displayItems = highlights.length > 0 ? highlights : data.slice(0, 3);

  const getThumbnail = (item: any) => {
    if (item.type === 'video') {
      return `https://img.youtube.com/vi/${item.media}/maxresdefault.jpg`;
    }
    return item.media;
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-telangana-beige/30 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-telangana-red/10 text-telangana-red font-black rounded-lg text-xs uppercase tracking-[0.2em] mb-6">
              Cloud-Synced Showcase
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-telangana-maroon font-display leading-tight">
              Campus <span className="text-telangana-gold italic">Reflections</span>
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('gallery')}
            className="bg-telangana-maroon text-white font-black py-5 px-12 rounded-full uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-telangana-red transition-all flex items-center gap-4 group"
          >
            Explore Full Gallery
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {displayItems[0] && (
            <div 
              onClick={() => onNavigate('gallery')}
              className="lg:col-span-7 group relative overflow-hidden rounded-[3rem] bg-telangana-charcoal h-[500px] shadow-2xl cursor-pointer"
            >
              <img 
                src={getThumbnail(displayItems[0])} 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                alt={displayItems[0].title}
              />
              <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-telangana-maroon to-transparent">
                <h3 className="text-4xl font-black text-white font-display mb-2">{displayItems[0].title}</h3>
                <p className="text-white/80 font-medium">{displayItems[0].description}</p>
              </div>
            </div>
          )}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {displayItems.slice(1, 3).map((item, idx) => (
              <div 
                key={idx}
                onClick={() => onNavigate('gallery')}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white h-full shadow-xl border border-telangana-beige cursor-pointer"
              >
                <div className="h-full relative overflow-hidden">
                  <img 
                    src={getThumbnail(item)} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={item.title}
                  />
                  <div className="absolute bottom-0 left-0 p-10 w-full">
                    <h3 className="text-2xl font-black text-white font-display leading-tight">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHighlights;
