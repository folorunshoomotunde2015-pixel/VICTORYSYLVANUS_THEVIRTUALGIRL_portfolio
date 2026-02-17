

import React, { useEffect } from 'react';
import { Award, BookOpen, User, Star, ShieldCheck, CheckCircle2, Mail, Linkedin } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const victoryImageUrl = "https://lh3.googleusercontent.com/d/1jBywPLFssZ97QO0DPRxhmK3MLQ1wbARw";
  const linkedInUrl = "https://www.linkedin.com/in/osuake-slyvanus-598120391";

  return (
    <div className="bg-white overflow-hidden animate-in fade-in duration-700">
      {/* Hero Section - Matching Home Design */}
      <section className="relative hero-bg py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 animate-fade-up">
            {/* Left side: Text content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-block px-3 py-1 rounded bg-white/10 text-white/80 font-bold text-xs uppercase tracking-widest">
                Victory Sylvanus Ekpo
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold tracking-tight leading-tight text-white uppercase">
                Dedicated to <span className="block accent-color">Your Growth</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                A dependable and results-oriented Virtual Assistant with a rich background across hospitality, technology, and real estate sectors.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start text-white">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="accent-color" />
                  <span className="font-bold text-sm">8+ Years Exp.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="accent-color" />
                  <span className="font-bold text-sm">Remote Specialist</span>
                </div>
              </div>

              {/* Added Social Icons for Hero Consistency */}
              <div className="flex gap-4 pt-2 justify-center lg:justify-start">
                <a 
                  href="mailto:osuaks94@gmail.com" 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300" 
                  style={{ backgroundColor: '#8D5F8C' }}
                >
                  <Mail size={18} />
                </a>
                <a 
                  href={linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300" 
                  style={{ backgroundColor: '#6B3F69' }}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Right side: Portrait with Refined Animations */}
            <div className="flex-1 relative animate-scale-in">
              <div className="relative group max-w-sm mx-auto">
                <div className="absolute -inset-4 border-2 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0 duration-700 opacity-20" style={{ borderColor: '#A376A2' }}></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-[4/5] border border-white/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(107,63,105,0.4)]">
                  <img 
                    src={victoryImageUrl} 
                    alt="Victory Sylvanus Ekpo" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6B3F69]/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Grid Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border-y border-white/30 space-y-4 flex flex-col justify-center">
            {[...Array(12)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white/10"></div>)}
          </div>
        </div>
      </section>

      {/* Biography Detail Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#6B3F69] font-bold text-xs uppercase tracking-widest mb-8">
            <User size={14} /> My Approach
          </div>
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light italic">
            <p>
              "My approach is rooted in reliability and proactive problem-solving. I don't just complete tasks; I look for ways to optimize them, always keeping my client's vision and business objectives at the forefront of my mind."
            </p>
            <p className="not-italic text-lg text-gray-500">
              Specializing in turning chaotic workflows into organized systems, I ensure that every detail is handled with the highest level of care, allowing you to focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold uppercase tracking-widest mb-4 primary-color">Core Strengths</h2>
            <div className="w-16 h-1 accent-bg mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:flex flex-wrap justify-center gap-8">
            {[
              { title: "Communication", desc: "Articulate and empathetic communicator across all digital channels.", icon: <Star size={24} /> },
              { title: "Organization", desc: "Meticulous attention to detail and natural talent for structuring data.", icon: <ShieldCheck size={24} /> },
              { title: "Problem Solving", desc: "Analytical thinker focused on finding efficient solutions.", icon: <Award size={24} /> },
              { title: "Professionalism", desc: "Upholding high standards of ethics and confidentiality.", icon: <User size={24} /> }
            ].map((strength, i) => (
              <div key={i} className="reveal p-8 bg-white rounded-3xl hover-lift text-center space-y-4 flex-1 min-w-[280px] max-w-sm">
                <div className="inline-flex p-4 rounded-2xl bg-purple-50 text-[#6B3F69] mx-auto group-hover:bg-[#6B3F69] group-hover:text-white transition-colors duration-300">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold primary-color">{strength.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Training Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 reveal">
              <h2 className="text-3xl font-bold flex items-center gap-3 primary-color">
                <BookOpen className="accent-color" /> Academic Background
              </h2>
              <div className="p-10 rounded-[32px] border border-gray-100 bg-white shadow-sm space-y-6 hover-lift">
                <div>
                  <p className="accent-color font-bold text-sm tracking-widest uppercase">2019 – 2023</p>
                  <h3 className="text-2xl font-bold mt-2 primary-color">BSc in Education Guidance and Counseling</h3>
                  <p className="text-gray-500 font-medium italic mt-1">Cross River State University of Technology</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Deep insights into human psychology, communication strategies, and organizational behavior—essential for managing complex client relations.
                </p>
              </div>
            </div>
            
            <div className="space-y-8 reveal">
              <h2 className="text-3xl font-bold flex items-center gap-3 primary-color">
                <Award className="accent-color" /> Certifications
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Diploma in Desktop Publishing", institute: "C-Tech Computer Institute" },
                  { title: "CRM Training", institute: "Software Proficiency" },
                  { title: "Front Desk & Hospitality Management", institute: "Service Excellence" },
                  { title: "Digital Marketing & Sales Strategies", institute: "Growth Strategy" }
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white transition-all hover:shadow-md cursor-default">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white accent-color shrink-0 shadow-sm border border-gray-100">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{cert.title}</h4>
                      <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">{cert.institute}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
