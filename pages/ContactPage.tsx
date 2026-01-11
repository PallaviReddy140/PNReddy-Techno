
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-blue-900 pt-32 pb-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500 rounded-full translate-x-1/2 -translate-y-1/2 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">Connect With Us</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto font-medium">
            We are here to assist you. Reach out to our team for any academic or administrative queries.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Contact Details & Office Hours */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-blue-900 mb-8 border-l-4 border-yellow-500 pl-6">
                  School Headquarters
                </h2>
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-6">
                    <div className="w-14 h-14 shrink-0 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                      📍
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">Our Address</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Plot No 123, Techno Avenue, Banjara Hills,<br />
                        Hyderabad, Telangana 500034, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-6">
                    <div className="w-14 h-14 shrink-0 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                      📞
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">Phone Numbers</h4>
                      <div className="space-y-1">
                        <p className="text-slate-600">
                          <span className="font-semibold text-slate-800">General:</span> +91 40 1234 5678
                        </p>
                        <p className="text-slate-600">
                          <span className="font-semibold text-slate-800">Admissions:</span> +91 98765 43210
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-6">
                    <div className="w-14 h-14 shrink-0 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                      ✉️
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">Email Addresses</h4>
                      <div className="space-y-1">
                        <p className="text-slate-600">
                          <span className="font-semibold text-slate-800">Inquiry:</span> info@pnreddyschool.edu.in
                        </p>
                        <p className="text-slate-600">
                          <span className="font-semibold text-slate-800">Admissions:</span> admissions@pnreddyschool.edu.in
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <span className="text-blue-600">🕒</span> Office Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">Monday — Friday</span>
                    <span className="text-blue-900 font-bold">8:30 AM - 4:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">Saturday</span>
                    <span className="text-blue-900 font-bold">8:30 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">Sunday</span>
                    <span className="text-red-500 font-bold uppercase tracking-wider">Closed</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-blue-900 text-white rounded-2xl text-sm italic">
                  <strong>Note:</strong> Admissions and campus visits are handled exclusively by school staff on-site. We do not accept online admission applications.
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-slate-100">
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Send us a Message</h3>
                <p className="text-slate-500 font-medium">
                  Have a question? Fill out the form below and we'll get back to you shortly.
                </p>
                <p className="text-blue-700 font-semibold mt-4 italic font-display">
                  "మాకు సందేశం పంపండి, మేము 24-48 గంటల్లో స్పందిస్తాము."
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center animate-bounceIn">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-2xl font-bold text-emerald-800 mb-2">Message Received!</h4>
                  <p className="text-emerald-700">Thank you for contacting PNREDDY Techno School. Our team will review your message and respond within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-blue-900 mb-2 ml-1 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">👤</span>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: Rajesh Kumar"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 transition-all outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-blue-900 mb-2 ml-1 uppercase tracking-wider">Email Address</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">✉️</span>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Ex: rajesh@email.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-blue-900 mb-2 ml-1 uppercase tracking-wider">Phone Number</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">📞</span>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ex: +91 98XXX XXX10"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-blue-900 mb-2 ml-1 uppercase tracking-wider">Your Query / Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you today?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-4 text-slate-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-extrabold py-5 rounded-2xl text-xl shadow-xl shadow-blue-900/20 transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Submit Query
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-50 pt-24">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Find Us on the Map</h2>
              <p className="text-slate-600">Located in a peaceful, accessible neighborhood of Banjara Hills.</p>
           </div>
           <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0326463990716!2d78.43851537516548!3d17.410313583481236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb972e340e4f85%3A0x6a378248983f4f88!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709456345678!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
           <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">
              Emergency Contact? Call: <span className="text-blue-900 ml-2">+91 40 1234 5678</span>
           </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
