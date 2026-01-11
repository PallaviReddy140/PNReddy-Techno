
import React from 'react';

const AcademicsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-blue-900 pt-32 pb-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500 rounded-full translate-x-1/2 -translate-y-1/2 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">Academic Excellence</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto font-medium">
            Empowering students with a structured SSC curriculum and innovative techno-learning strategies.
          </p>
        </div>
      </section>

      {/* SSC Curriculum Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">SSC Curriculum Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                PNREDDY Techno School strictly adheres to the State Board (SSC) syllabus while integrating advanced academic tools. Our curriculum is designed to ensure mastery of subjects and prepare students for both state examinations and future competitive landscapes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">📚</span> Languages
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>First Language: Telugu / Hindi</li>
                  <li>Second Language: Hindi / Telugu</li>
                  <li>Third Language: English (Special Focus)</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span className="text-yellow-600">🔬</span> Core Subjects
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>Mathematics (Conceptual approach)</li>
                  <li>General Science (Physics & Biology)</li>
                  <li>Social Studies</li>
                  <li>Information Technology (Techno Program)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Offered */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Academic Wings</h2>
            <p className="text-slate-600 text-lg">Structured learning paths for every growth milestone.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: "Pre-Primary",
                grades: "Nursery - UKG",
                icon: "🎨",
                desc: "Focus on motor skills, cognitive development, and social interaction through the Play-Way method.",
                color: "bg-emerald-100 text-emerald-700"
              },
              {
                level: "Primary School",
                grades: "Classes I - V",
                icon: "📖",
                desc: "Strengthening fundamentals in Literacy, Numeracy, and Environmental Awareness with interactive tools.",
                color: "bg-blue-100 text-blue-700"
              },
              {
                level: "High School",
                grades: "Classes VI - X",
                icon: "🚀",
                desc: "Advanced analytical training, SSC board preparation, and IIT-Foundation integration.",
                color: "bg-purple-100 text-purple-700"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-slate-100 group text-center">
                <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.level}</h3>
                <p className={`font-bold uppercase tracking-widest text-xs mb-4 ${item.color.split(' ')[1]}`}>{item.grades}</p>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2020&auto=format&fit=crop" className="rounded-2xl h-64 w-full object-cover" alt="Digital Classroom" />
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl h-64 w-full object-cover mt-8" alt="Teaching" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">Our "Techno" Methodology</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center font-bold">01</div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-2">Concept Mapping</h4>
                    <p className="text-slate-600">Visual breakdown of complex syllabus topics into easy-to-understand logical maps.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">02</div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-2">Smart Classroom Integration</h4>
                    <p className="text-slate-600">Interactive multimedia resources that bring textbook lessons to life through 3D visuals and animations.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold">03</div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-2">Rote-Free Learning</h4>
                    <p className="text-slate-600">Moving away from memorization to application-based learning where students solve real-world problems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Exams */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Evaluation Strategy</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">Tracking progress through continuous and comprehensive evaluation.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Weekly Micro-Tests", desc: "Short weekend assessments to ensure topics taught during the week are mastered.", icon: "📅" },
              { title: "Formative Exams", desc: "Classroom activities, projects, and oral tests conducted 4 times a year.", icon: "✏️" },
              { title: "Summative Exams", desc: "Terminal examinations (Term 1 & Term 2) aligned with SSC board patterns.", icon: "🎓" },
              { title: "Parent-Teacher Meets", desc: "Regular performance reviews with parents to discuss and plan improvement paths.", icon: "🤝" }
            ].map((test, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 text-center">
                <div className="text-4xl mb-6">{test.icon}</div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">{test.title}</h4>
                <p className="text-blue-100 text-sm">{test.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support System */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-slate-50 p-10 md:p-16 rounded-[3rem]">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Holistic Student Support</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We understand that every student learns at their own pace. Our support system is designed to provide extra care to those who need it and challenge those who excel.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-blue-900 font-semibold">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-[10px] text-blue-900">✓</div>
                  Remedial Classes for slow learners
                </div>
                <div className="flex items-center gap-4 text-blue-900 font-semibold">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-[10px] text-blue-900">✓</div>
                  Career Guidance for High School students
                </div>
                <div className="flex items-center gap-4 text-blue-900 font-semibold">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-[10px] text-blue-900">✓</div>
                  Emotional Counseling & Peer support
                </div>
                <div className="flex items-center gap-4 text-blue-900 font-semibold">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-[10px] text-blue-900">✓</div>
                  Language Lab for communication skills
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
               <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-2xl" alt="Student Support" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
