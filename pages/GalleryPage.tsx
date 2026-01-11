
import React, { useState } from 'react';
import { GalleryItem, Category } from '../data/galleryData';

interface GalleryPageProps {
  data: GalleryItem[];
}

const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? data 
    : data.filter(item => item.category === activeCategory);

  const getThumbnail = (item: GalleryItem) => {
    if (item.type === 'video') {
      return `https://img.youtube.com/vi/${item.media}/maxresdefault.jpg`;
    }
    return item.media;
  };

  return (
    <div className="bg-telangana-offwhite min-h-screen ikat-pattern">
      <section className="bg-telangana-maroon pt-40 pb-24 text-white relative overflow-hidden text-center">
        <h1 className="text-5xl md:text-8xl font-black mb-8 animate-fadeIn font-display leading-tight">
          Live <span className="text-telangana-gold italic">Gallery</span>
        </h1>
        <p className="text-2xl text-telangana-beige max-w-3xl mx-auto font-medium opacity-90">
          Powered by our real-time cloud sync system.
        </p>
      </section>

      <section className="py-8 sticky top-[72px] md:top-[88px] z-40 bg-white/90 backdrop-blur-xl border-b border-telangana-beige shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {['All', 'Facilities', 'Academics', 'Activities', 'Culture', 'Achievements', 'Videos'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category)}
              className={`px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                activeCategory === cat ? 'bg-telangana-maroon text-white' : 'bg-white text-telangana-charcoal border-2 border-telangana-beige'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} onClick={() => setSelectedMedia(item)} className="group relative overflow-hidden rounded-[3rem] bg-white border border-telangana-beige shadow-xl cursor-pointer">
              <div className="h-80 overflow-hidden relative">
                <img src={getThumbnail(item)} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-telangana-maroon/20">
                    <div className="w-16 h-16 bg-telangana-gold text-telangana-maroon rounded-full flex items-center justify-center shadow-2xl">
                       <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z" /></svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-10">
                <h3 className="font-black text-telangana-maroon text-2xl font-display leading-tight">{item.title}</h3>
                <p className="text-telangana-charcoal/70 mt-3 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMedia && (
        <div className="fixed inset-0 z-[100] bg-telangana-charcoal/95 flex items-center justify-center p-8" onClick={() => setSelectedMedia(null)}>
          <div className="max-w-6xl w-full bg-white rounded-[3rem] overflow-hidden" onClick={e => e.stopPropagation()}>
            {selectedMedia.type === 'video' ? (
              <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${selectedMedia.media}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <img src={selectedMedia.media} alt={selectedMedia.title} className="w-full h-auto max-h-[80vh] object-contain" />
            )}
            <div className="p-10 bg-telangana-offwhite flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-black text-telangana-maroon font-display">{selectedMedia.title}</h2>
                <p className="text-telangana-charcoal font-medium mt-2">{selectedMedia.description}</p>
              </div>
              <button onClick={() => setSelectedMedia(null)} className="bg-telangana-red text-white px-10 py-4 rounded-full font-black uppercase text-xs">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
