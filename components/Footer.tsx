import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'academics' | 'facilities' | 'contact' | 'staff') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
              <span className="font-bold text-2xl text-white">
                PNREDDY <span className="text-yellow-500">Techno</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Serving the community since 2001. We are committed to providing 
              excellent education through the SSC curriculum and concept-based 
              techno programs.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-30"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('about')} className="hover:text-yellow-400 transition-colors text-left">About Our School</button></li>
              <li><button onClick={() => onNavigate('academics')} className="hover:text-yellow-400 transition-colors text-left">Academics</button></li>
              <li><button onClick={() => onNavigate('staff')} className="hover:text-yellow-400 transition-colors text-left">School Staff</button></li>
              <li><button onClick={() => onNavigate('facilities')} className="hover:text-yellow-400 transition-colors text-left">Facilities</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-yellow-400 transition-colors text-left">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Office Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-white font-semibold">8:30 AM - 4:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-semibold">8:30 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between border-t border-slate-900 pt-2">
                <span>Sunday:</span>
                <span className="text-red-400 font-semibold uppercase">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Reach Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Plot No 123, Techno Avenue, Banjara Hills, Hyderabad, 500034</span>
              </li>
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 40 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} PNREDDY Techno School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;