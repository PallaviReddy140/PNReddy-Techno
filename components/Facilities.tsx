
import React from 'react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      name: "Modern Science Labs",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
      description: "State-of-the-art equipment for Physics, Chemistry, and Biology experiments."
    },
    {
      name: "Advanced IT Center",
      image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop",
      description: "High-speed internet and latest computers for coding and digital literacy."
    },
    {
      name: "Smart Library",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
      description: "A vast collection of academic and recreational books in a serene environment."
    },
    {
      name: "Sports Complex",
      image: "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=2071&auto=format&fit=crop",
      description: "Dedicated spaces for Cricket, Badminton, Athletics and Indoor games."
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Campus & Infrastructure</h2>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-lg">
            A world-class environment designed to spark creativity, facilitate 
            deep learning, and promote physical health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">{item.name}</h3>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
