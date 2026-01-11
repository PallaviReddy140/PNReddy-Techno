
import React from 'react';

const FacilitiesPage: React.FC = () => {
  const facilityCategories = [
    {
      title: "Academic Spaces",
      items: [
        {
          name: "Smart Classrooms",
          description: "Digitally-enabled classrooms with smart boards and interactive tools to enhance conceptual understanding.",
          image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2020&auto=format&fit=crop"
        },
        {
          name: "Composite Science Lab",
          description: "Well-equipped labs for Physics, Chemistry, and Biology to promote inquiry-based scientific learning.",
          image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop"
        }
      ]
    },
    {
      title: "Digital & Literary Resources",
      items: [
        {
          name: "Modern IT Center",
          description: "High-speed computing lab dedicated to digital literacy, coding, and educational research.",
          image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Enriched Library",
          description: "A wide collection of journals, encyclopedia, and literature to cultivate a lifelong reading habit.",
          image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    },
    {
      title: "Holistic Development",
      items: [
        {
          name: "Sports Complex",
          description: "Facilities for Cricket, Basketball, and Athletics, plus indoor zones for Chess and Table Tennis.",
          image: "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=2071&auto=format&fit=crop"
        },
        {
          name: "Creative Studio",
          description: "Dedicated spaces for Art, Craft, Music, and Performing Arts to nurture hidden talents.",
          image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
        }
      ]
    }
  ];

  const safetyFeatures = [
    { icon: "🛡️", title: "CCTV Surveillance", desc: "24/7 monitoring of all corridors, playfields, and entrances." },
    { icon: "🚒", title: "Fire Safety", desc: "Fully compliant fire detection and extinguishing systems on every floor." },
    { icon: "👩‍🏫", title: "Female Floor Staff", desc: "Ensuring comfort and safety with female attendants present at all times." },
    { icon: "🚌", title: "GPS Transport", desc: "Safe bus fleet equipped with real-time GPS tracking for parents." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-blue-900 pt-32 pb-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">World-Class Infrastructure</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto font-medium">
            Discover a campus designed to inspire learning, ensure safety, and promote holistic growth.
          </p>
        </div>
      </section>

      {/* Campus Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          {facilityCategories.map((category, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-10 border-l-4 border-yellow-500 pl-6">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                {category.items.map((item, i) => (
                  <div key={i} className="group overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                    <div className="relative h-72 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.name}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety First Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-yellow-400">Your Child's Safety is Our Priority</h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                At PNREDDY, we have implemented a comprehensive 360-degree safety protocol to ensure a secure environment where children can learn without worry.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {safetyFeatures.map((feat, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-3xl">{feat.icon}</div>
                    <h4 className="text-xl font-bold">{feat.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 rounded-3xl bg-blue-800/20 p-8 flex items-end">
                   <p className="font-bold text-2xl">Verified <br/>Staff Only</p>
                </div>
                <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl h-64 object-cover w-full" alt="Safety" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl h-64 object-cover w-full" alt="Security" />
                <div className="h-64 rounded-3xl bg-yellow-500/10 p-8 border border-yellow-500/20 flex items-center justify-center text-center">
                   <p className="font-bold text-xl text-yellow-400">Zero-Tolerance <br/>Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Thoughtful Amenities</h2>
            <p className="text-slate-600 text-lg">Small details that make a big difference in the daily school life.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">💧</div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">Mineral Water</h4>
              <p className="text-slate-600 text-sm">RO-purified drinking water systems on every floor.</p>
            </div>
            <div className="text-center p-8 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🚑</div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">Medical Room</h4>
              <p className="text-slate-600 text-sm">Well-equipped infirmary with a qualified nurse on duty.</p>
            </div>
            <div className="text-center p-8 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🧺</div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">Hygiene Protocols</h4>
              <p className="text-slate-600 text-sm">Regular sanitation of all common areas and washrooms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
