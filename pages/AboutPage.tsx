
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-blue-900 pt-32 pb-20 text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full translate-x-1/3 translate-y-1/3 opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">About Our Institution</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto font-medium">
            Building Strong Foundations for Brighter Futures since 2001.
          </p>
        </div>
      </section>

      {/* Legacy & History Section */}
      <section className="py-20 border-b border-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-2xl z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
                alt="School Evolution" 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-4xl font-bold mb-1">23+</p>
                <p className="text-blue-200 font-semibold uppercase tracking-wider text-xs">Years of Excellence</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-700 font-bold rounded-full text-sm uppercase tracking-widest mb-2">
                Our History
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">A Journey of Academic Rigor</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Founded in 2001 in the heart of Hyderabad, PNREDDY Techno School began its humble journey with a commitment to providing quality SSC education that empowers every child. What started as a vision to bridge the gap between traditional schooling and modern analytical needs has today evolved into a premier educational landmark.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Over two decades, we have consistently secured top ranks in state board examinations while fostering an environment where curiosity is celebrated. Our evolution from a local primary school to a recognized "Techno School" reflects our proactive adaptation to the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto bg-white p-10 md:p-20 rounded-[3rem] shadow-2xl relative">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <path d="M40 20C25 20 15 30 15 50V90H55V50H35C35 40 40 35 45 35V20H40ZM105 20C90 20 80 30 80 50V90H120V50H100C100 40 105 35 110 35V20H105Z" fill="currentColor" className="text-blue-900" />
              </svg>
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center lg:items-start">
              <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
                <div className="absolute inset-0 bg-yellow-500 rounded-3xl rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Chairman Shri P.N. Reddy" 
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-lg border-4 border-white grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-blue-900">Message from our Founder</h3>
                <p className="text-slate-700 italic text-xl leading-relaxed">
                  "Education is the most powerful weapon which you can use to change the world. At PNREDDY, we don't just teach subjects; we cultivate character. Our 'Strong Foundations' are built on discipline, conceptual clarity, and traditional values, ensuring our students achieve 'Brighter Futures' in an ever-competitive world."
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-2xl text-blue-900">Shri P.N. Reddy</h4>
                  <p className="text-slate-500 font-medium">Founder & Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Vision */}
            <div className="p-10 rounded-3xl bg-blue-900 text-white shadow-xl hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 font-display">Our Vision</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To be a premier institution that creates innovative thinkers and compassionate leaders through a unique blend of technological excellence and ethical values.
              </p>
            </div>
            {/* Mission */}
            <div className="p-10 rounded-3xl bg-yellow-500 text-blue-900 shadow-xl hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-blue-900/10 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 font-display">Our Mission</h3>
              <p className="text-blue-900/80 text-lg leading-relaxed font-medium">
                To provide a stimulating learning environment that inspires a love for learning, encourages critical thinking, and ensures excellence in the SSC curriculum.
              </p>
            </div>
            {/* Core Values */}
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 shadow-lg hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-blue-900 font-display">Core Values</h3>
              <ul className="space-y-3 text-slate-600 text-lg font-medium">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Integrity & Respect</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Scientific Temper</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Holistic Discipline</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Social Responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Philosophy Section */}
      <section className="py-24 bg-blue-900 text-white relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">SSC-Focused Academic Philosophy</h2>
            <p className="text-xl text-blue-200 leading-relaxed mb-12">
              Our academic framework is meticulously aligned with the Secondary School Certificate (SSC) standards, enhanced by our proprietary "Techno-Integration" model. We believe in strengthening the core concepts before advancing to complex applications.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-yellow-400 mb-2">Concept Mapping</h4>
                <p className="text-sm text-blue-100">Breaking down the SSC syllabus into digestible concept modules for better retention.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-yellow-400 mb-2">Techno-Enabled Labs</h4>
                <p className="text-sm text-blue-100">Bridging the gap between textbook theory and practical scientific inquiry.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm md:col-span-1 sm:col-span-2">
                <h4 className="font-bold text-yellow-400 mb-2">Continuous Evaluation</h4>
                <p className="text-sm text-blue-100">Regular feedback loops to ensure no child is left behind in the academic race.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Our Educators</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our teachers are more than instructors; they are mentors who ignite the flame of knowledge in every student.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Pre-Primary Wing",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
                desc: "Our early childhood specialists utilize play-way methodologies and Montessori-inspired techniques. They focus on sensory development, language acquisition, and social bonding, ensuring every child's first step into school is filled with joy."
              },
              {
                title: "Primary School (I-V)",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
                desc: "In the primary years, our faculty emphasizes fundamental skills in Literacy and Numeracy. They create a foundation of conceptual clarity across Mathematics, Environmental Science, and Languages through interactive classroom sessions."
              },
              {
                title: "High School (VI-X)",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2020&auto=format&fit=crop",
                desc: "For our senior students, our expert faculty focuses on analytical thinking and competitive readiness. We provide intensive training for the SSC board exams while integrating foundation concepts for IIT and other competitive paths."
              }
            ].map((faculty, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl h-64 mb-6 shadow-lg">
                  <img 
                    src={faculty.image} 
                    alt={faculty.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors"></div>
                </div>
                <h4 className="text-2xl font-bold text-blue-900 mb-4">{faculty.title}</h4>
                <p className="text-slate-600 leading-relaxed">{faculty.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
