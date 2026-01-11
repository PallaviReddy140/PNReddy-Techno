
import React from 'react';

const Activities: React.FC = () => {
  const activities = [
    { title: "Cultural Festivals", icon: "🎭" },
    { title: "Inter-School Sports", icon: "🏆" },
    { title: "Science Exhibitions", icon: "🧪" },
    { title: "Literary Clubs", icon: "📖" },
    { title: "Educational Tours", icon: "🚌" },
    { title: "Art & Craft", icon: "🎨" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8 leading-tight">
              Life at PNREDDY: Beyond the Classroom
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              We believe that education is incomplete without holistic development. 
              Our vibrant student life includes a wide range of extracurricular 
              activities designed to build teamwork, confidence, and passion.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {activities.map((act, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                  <span className="text-2xl">{act.icon}</span>
                  <span className="font-semibold text-slate-700">{act.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop" className="rounded-2xl w-full h-64 object-cover" alt="Art Activity" />
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover" alt="Student Group" />
             </div>
             <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover" alt="Cultural Event" />
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl w-full h-64 object-cover" alt="Sports Day" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
