
import React from 'react';

const ChairmanMessage: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-4 bg-yellow-500 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Founder/Chairman" 
                className="relative z-10 w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 z-20 bg-blue-900 text-white p-6 rounded-2xl shadow-xl">
                <h4 className="font-bold text-lg">Shri P.N. Reddy</h4>
                <p className="text-blue-200 text-sm">Founder & Chairman</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-bold rounded-md text-sm uppercase tracking-wider mb-2">
              Chairman's Message
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
              Empowering Students to Reach Their Full Potential
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                "At PNREDDY Techno School, our journey since 2001 has been defined by a relentless pursuit of academic excellence and character building. We believe that every child is unique and deserves an environment that fosters curiosity and resilience."
              </p>
              <p>
                "Our focus is not just on producing top rankers in SSC exams, but on shaping well-rounded individuals who are ready to face the challenges of the 21st century with confidence and integrity. We bridge the gap between theoretical knowledge and practical application through our specialized 'Concept-Based' teaching methodology."
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
               <div className="italic font-serif text-2xl text-slate-400">"Strong Foundations lead to Brighter Futures."</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
