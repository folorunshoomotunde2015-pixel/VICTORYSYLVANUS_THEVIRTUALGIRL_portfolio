
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight, CheckCircle2, Linkedin, Calendar, Headphones } from 'lucide-react';

const HomePage: React.FC = () => {
  const [roleText, setRoleText] = useState("");
  const fullRole = "Professional Virtual Assistant";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setRoleText(fullRole.slice(0, i));
      i++;
      if (i > fullRole.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const victoryImageUrl = "https://lh3.googleusercontent.com/d/1jBywPLFssZ97QO0DPRxhmK3MLQ1wbARw";
  const linkedInUrl = "https://www.linkedin.com/in/osuake-slyvanus-598120391";

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section - Dark Theme */}
      <section className="relative hero-bg py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left side: Text content */}
            <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-up">
              <div className="inline-block px-3 py-1 rounded bg-white/10 text-white/80 font-bold text-xs uppercase tracking-widest">
                Victory Sylvanus Ekpo
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold tracking-tight leading-tight text-white uppercase">
                Hello! I’m <span className="block">Victory</span>
              </h1>
              <div className="min-h-[40px] flex items-center justify-center lg:justify-start">
                <span className="text-2xl lg:text-4xl font-bold uppercase" style={{ color: '#A376A2' }}>
                  A <span className="border-r-4 pr-1" style={{ borderColor: '#A376A2' }}>{roleText}</span>
                </span>
              </div>
              <p className="text-lg lg:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Helping businesses stay organized, efficient, and responsive through reliable administrative and customer support.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center lg:justify-start">
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold transition-all duration-300 hover:scale-105 shadow-2xl uppercase tracking-widest text-sm btn-primary"
                >
                  Work With Me <ChevronRight size={18} />
                </Link>

                {/* Social Icons */}
                <div className="flex gap-4">
                  <a href="mailto:osuaks94@gmail.com" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#8D5F8C' }}>
                    <Mail size={18} />
                  </a>
                  <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#6B3F69' }}>
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Image with Enhanced Animations */}
            <div className="flex-1 relative animate-scale-in">
              <div className="relative group max-w-md mx-auto">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border-y border-white/30 space-y-4 flex flex-col justify-center">
                    {[...Array(12)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white/10"></div>)}
                  </div>
                </div>

                <div className="relative z-10 rounded-b-full overflow-hidden aspect-[4/5] bg-gray-900 border-b-8 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(163,118,162,0.4)]" style={{ borderColor: '#A376A2' }}>
                  <img 
                    src={victoryImageUrl} 
                    alt="Victory Sylvanus Ekpo" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute top-10 left-0 w-8 h-8 rounded-full blur-xl opacity-60" style={{ backgroundColor: '#A376A2' }}></div>
                  <div className="absolute bottom-20 right-0 w-12 h-12 rounded-full blur-2xl opacity-40" style={{ backgroundColor: '#DDC3C3' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 accent-bg">
        <div className="max-w-5xl mx-auto px-4 text-center text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading">Streamlining Your Success</h2>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed italic font-light">
            “I support busy professionals by managing emails, schedules, customer communication, and operational tasks to keep workflows structured and stress-free.”
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-white" />
              <span className="font-bold text-lg">Reliable</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-white" />
              <span className="font-bold text-lg">Organized</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-white" />
              <span className="font-bold text-lg">Responsive</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold primary-color">Expert Services</h2>
            <div className="w-20 h-1.5 accent-bg mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg pt-4">Your administrative powerhouse, working behind the scenes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Mail size={32} />, 
                title: "Administrative Support", 
                desc: "Email management, scheduling meetings, and precise preparation of business documents to keep your digital workspace pristine." 
              },
              { 
                icon: <Headphones size={32} />, 
                title: "Customer Support", 
                desc: "Professional handling of inquiries via phone, email, and live chat, ensuring every customer interaction is positive." 
              },
              { 
                icon: <Calendar size={32} />, 
                title: "Personal Assistant", 
                desc: "Coordination of daily tasks, setting reminders, and managing complex stakeholder communications to free up your bandwidth." 
              }
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-3xl border border-gray-100 bg-white hover-lift group relative overflow-hidden text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-8 bg-purple-50 text-[#6B3F69] group-hover:bg-[#6B3F69] group-hover:text-white transition-all duration-500 shadow-sm mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 primary-color">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/work" 
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-white font-bold transition-all duration-300 hover:shadow-xl shadow-lg btn-primary uppercase tracking-widest text-sm"
            >
              View My Work <ChevronRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
