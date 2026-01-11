
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <svg width="400" height="400" fill="none" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" className="text-blue-900" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="2" className="text-yellow-500" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Who We Are</h2>
          <p className="text-slate-600 text-lg">
            Dedicated to excellence since 2001, PNREDDY Techno School stands as a 
            pillar of quality education in Hyderabad, shaping the futures of 
            thousands of students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* History */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border-b-4 border-blue-600 transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our History</h3>
            <p className="text-slate-600 leading-relaxed">
              Founded in 2001 with a vision to provide accessible high-quality SSC 
              education, PNREDDY Techno School began its journey with a small campus 
              and a big heart. Today, we are recognized as a leader in techno-based 
              schooling in the region.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border-b-4 border-yellow-500 transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be a global benchmark in foundational education where technology 
              and value-based learning coalesce to create innovative thinkers, 
              compassionate leaders, and responsible global citizens.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border-b-4 border-emerald-500 transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to provide a stimulating environment that inspires a 
              love for learning, encourages critical thinking, and prepares 
              students to excel in the SSC curriculum and beyond through 
              personalized attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
