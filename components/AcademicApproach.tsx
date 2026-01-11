
import React from 'react';

const AcademicApproach: React.FC = () => {
  const approaches = [
    {
      title: "IIT-Foundation Integration",
      description: "Early preparation for competitive exams starting from middle school to build a strong analytical mindset.",
      icon: "🔬",
      bg: "bg-blue-50"
    },
    {
      title: "Digitally-Enabled Classrooms",
      description: "Smart boards and interactive multimedia resources that make complex concepts easy and engaging to grasp.",
      icon: "💻",
      bg: "bg-purple-50"
    },
    {
      title: "Weekly Assessments",
      description: "Regular micro-tests to track progress and identify areas of improvement without the stress of final exams.",
      icon: "📝",
      bg: "bg-orange-50"
    },
    {
      title: "Language Proficiency",
      description: "Focused programs for Telugu, Hindi, and English to ensure students are articulate and confident communicators.",
      icon: "🗣️",
      bg: "bg-teal-50"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Academic Excellence</h2>
            <p className="text-slate-600 text-lg">
              We follow the SSC curriculum with an added layer of technological 
              innovation and conceptual clarity. Our approach ensures students 
              don't just learn, but truly understand.
            </p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all whitespace-nowrap">
            Explore Curriculum 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((item, index) => (
            <div 
              key={index} 
              className={`${item.bg} p-8 rounded-3xl group hover:shadow-xl transition-all border border-transparent hover:border-white`}
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicApproach;
