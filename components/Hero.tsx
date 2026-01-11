
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-white space-y-6 max-w-4xl">
          <div className="inline-block py-1 px-4 bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 rounded-full text-yellow-400 font-semibold tracking-wide uppercase text-sm">
            Est. 2001 • Hyderabad
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            PNREDDY <span className="text-yellow-400 italic">Techno</span> School
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-blue-100 italic">
            "Strong Foundations. Brighter Futures."
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
