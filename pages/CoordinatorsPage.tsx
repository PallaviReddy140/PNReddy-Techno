
import React, { useState, useEffect } from 'react';

interface CoordinatorsPageProps {
  onNavigate: (page: 'home' | 'about' | 'academics' | 'facilities' | 'contact' | 'coordinators') => void;
}

const CoordinatorsPage: React.FC<CoordinatorsPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('coordinators');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['coordinators', 'specialized', 'committees', 'awards'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const staffCard = (name: string, role: string, icon: string = "👤") => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group flex items-center gap-5">
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-blue-900 mb-1">{name}</h4>
        <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">{role}</p>
      </div>
    </div>
  );

  const committeeCard = (subject: string, hsStaff: string, psStaff: string) => (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all h-full flex flex-col">
      <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
        <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
        {subject}
      </h4>
      <div className="space-y-6 flex-grow">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-bold shrink-0 mt-1">H.S.</div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">High School</p>
            <p className="text-slate-800 font-semibold">{hsStaff}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 text-xs font-bold shrink-0 mt-1">P.S.</div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Primary School</p>
            <p className="text-slate-800 font-semibold">{psStaff}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-blue-900 pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full translate-x-1/2 -translate-y-1/2 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">Co-ordinators</h1>
            <p className="text-xl text-blue-200 mb-8 font-medium">
              Dedicated Professionals Shaping Future Leaders through strategic academic oversight and holistic development programs.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2"
            >
              Contact Our Office
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Sidebar & Content Layout */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 ml-4">Staff Directory</h3>
              {[
                { id: 'coordinators', label: 'School Co-ordinators', icon: '🎓' },
                { id: 'specialized', label: 'Specialized Heads', icon: '🎨' },
                { id: 'committees', label: 'Academic Committee', icon: '📋' },
                { id: 'awards', label: 'Staff Awards', icon: '🏆' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-4 ${
                    activeSection === item.id 
                    ? 'bg-blue-900 text-white shadow-xl shadow-blue-900/20' 
                    : 'bg-white text-slate-600 hover:bg-white hover:text-blue-900 shadow-sm border border-slate-100'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-grow space-y-24 pb-20">
            
            {/* General Co-ordinators */}
            <section id="coordinators">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">School Co-ordinators</h2>
                <p className="text-slate-500 text-lg">Overseeing the comprehensive academic and behavioral progress of our students across different wings.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffCard("Mrs. S. Radhika", "High School Co-ordinator", "🏛️")}
                {staffCard("Mr. V. Krishna", "Primary School Co-ordinator", "🏫")}
                {staffCard("Mrs. P. Lakshmi", "Pre-Primary Co-ordinator", "🧸")}
              </div>
            </section>

            {/* Specialized Co-ordinators */}
            <section id="specialized">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Specialized Co-ordinators</h2>
                <div className="h-1 w-20 bg-yellow-500 rounded-full mb-6"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                    <span className="text-blue-600">📖</span> Literary Co-ordinators
                  </h3>
                  <div className="grid gap-4">
                    {staffCard("Mr. James Watson", "Head - High School Literary")}
                    {staffCard("Mrs. Anita Desai", "Head - Primary School Literary")}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                    <span className="text-pink-600">🎨</span> Cultural Co-ordinators
                  </h3>
                  <div className="grid gap-4">
                    {staffCard("Ms. Kavitha Rao", "Head - High School Cultural")}
                    {staffCard("Mr. Shiva Kumar", "Head - Primary School Cultural")}
                  </div>
                </div>
              </div>
            </section>

            {/* Academic Committee */}
            <section id="committees" className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Academic Committee</h2>
                <p className="text-slate-600 text-lg">Our core subject specialists who design the curriculum flow, assessment strategies, and teaching methodologies.</p>
              </div>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {committeeCard("English", "Mr. A. Samuel", "Mrs. G. Mary")}
                {committeeCard("Mathematics", "Mr. T. Srinivas", "Mrs. K. Vani")}
                {committeeCard("Science", "Mrs. D. Revathi", "Mr. P. Ramesh")}
                {committeeCard("Social Studies", "Mr. B. Mallesh", "Mrs. S. Aruna")}
                {committeeCard("Hindi", "Mrs. R. Sunitha", "Mr. H. Prem")}
                {committeeCard("Telugu", "Mr. G. Venkat", "Mrs. J. Satyavathi")}
                {committeeCard("Computer Science", "Mr. L. Rahul", "Ms. M. Priya")}
              </div>
            </section>

            {/* Staff Awards Section */}
            <section id="awards" className="relative">
              <div className="absolute inset-0 bg-blue-900 rounded-[3rem] -rotate-1 opacity-5"></div>
              <div className="relative p-10 md:p-16 text-center space-y-8">
                <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">🏅</div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Excellence in Education Awards</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  Every year, PNREDDY Techno School recognizes outstanding dedication through our Staff Excellence Program. We celebrate educators who go beyond the call of duty to inspire their students.
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                   <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-blue-900 text-xl mb-2">Teacher of the Year 2023</h4>
                      <p className="text-yellow-600 font-bold uppercase tracking-widest text-xs mb-4">Academic Brilliance</p>
                      <p className="text-slate-500 font-medium">Awarded to <span className="text-slate-800 font-bold">Mr. T. Srinivas</span> for record-breaking results in SSC Mathematics.</p>
                   </div>
                   <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-blue-900 text-xl mb-2">The Innovator Award</h4>
                      <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Creative Teaching</p>
                      <p className="text-slate-500 font-medium">Awarded to <span className="text-slate-800 font-bold">Mrs. D. Revathi</span> for integrating virtual labs in Science curriculum.</p>
                   </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-blue-900 py-16 text-white text-center">
         <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 italic">"A teacher takes a hand, opens a mind, and touches a heart."</h3>
            <p className="text-blue-200">Our team is committed to the success of every child.</p>
         </div>
      </section>
    </div>
  );
};

export default CoordinatorsPage;
