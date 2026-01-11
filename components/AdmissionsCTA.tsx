
import React from 'react';

const AdmissionsCTA: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Ready to give your child a 
            <span className="text-yellow-400 block">Stronger Foundation?</span>
          </h2>
          <p className="text-xl text-blue-100 font-medium">
            Admissions for the Academic Year 2024-25 are now open. 
            Join the PNREDDY family and secure your child's future today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <button className="bg-white text-blue-900 hover:bg-yellow-400 hover:text-blue-900 font-bold py-5 px-10 rounded-full text-xl shadow-2xl transition-all transform hover:scale-105">
              Apply for Admission
            </button>
            <button className="bg-blue-900/30 text-white border border-white/30 hover:bg-blue-900/50 backdrop-blur-md font-bold py-5 px-10 rounded-full text-xl transition-all">
              Request a Prospectus
            </button>
          </div>
          <p className="text-blue-200 text-sm">
            Or call us directly at: <a href="tel:+919876543210" className="text-white font-bold underline">+91 98765 43210</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;
