

import React from 'react';
import { CheckCircle2, Calendar, ChevronRight } from 'lucide-react';

const WorkPage: React.FC = () => {
  const experiences = [
    {
      role: "Administrative & Operational Coordinator",
      company: "Afaara Digital Resources Limited",
      period: "2025 – Present",
      description: "Driving operational excellence through meticulous administrative coordination, budget tracking, and cross-functional scheduling while ensuring seamless client communication and project delivery."
    },
    {
      role: "Career Break",
      company: "Professional Development Phase",
      period: "2023 – 2024",
      description: "Dedicated period focused on intensive skill enhancement and personal development to refine professional capabilities before resuming high-impact work."
    },
    {
      role: "Sales Executive & Client Relations",
      company: "Oastec Property",
      period: "2021 – 2022",
      description: "Managed client relationships, organized records, assisted with property information, and supported client onboarding in a fast-paced real estate environment."
    },
    {
      role: "Sales Representative & Customer Service",
      company: "Frevik Global Tech",
      period: "2018 – 2021",
      description: "Assisted customers, handled product inquiries, provided after-sales support, and maintained follow-up communication to build lasting customer loyalty."
    },
    {
      role: "Receptionist & Customer Service Representative",
      company: "Pete’s Ville Hotel",
      period: "2016 – 2018",
      description: "Handled front desk operations, guest inquiries, reservations, complaint resolution, and coordination with departments to ensure excellent guest experiences."
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Hero Section - Matching Home Design */}
      <section className="relative hero-bg py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="inline-block px-3 py-1 rounded bg-white/10 text-white/80 font-bold text-xs uppercase tracking-widest">
              My Experience
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white uppercase">
              Professional <span className="block accent-color">Work</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed font-light">
              Improving workflow efficiency, handling complex communication channels, and ensuring reliable administrative operations through a versatile career background.
            </p>
            <div className="w-20 h-1.5 accent-bg mx-auto rounded-full opacity-50"></div>
          </div>
        </div>
        
        {/* Decorative Grid Elements to match Home Hero */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border-y border-white/30 space-y-4 flex flex-col justify-center">
            {[...Array(10)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white/10"></div>)}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start group">
                <div className="md:w-1/4 pt-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 primary-color font-bold">
                    <Calendar size={18} /> {exp.period}
                  </div>
                </div>
                <div className="md:w-3/4 p-10 rounded-[32px] bg-white border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <h3 className="text-3xl font-bold mb-2 primary-color">{exp.role}</h3>
                  <div className="mb-6">
                    <p className="text-xl font-medium secondary-color">{exp.company}</p>
                    {/* @ts-ignore */}
                    {exp.tagline && (
                      <p className="text-sm italic opacity-70 mt-1 accent-color font-medium">{(exp as any).tagline}</p>
                    )}
                  </div>
                  <p className="text-gray-500 text-lg leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Tasks Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-bg rounded-[48px] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A376A2] opacity-10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A376A2] opacity-10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
            
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold">Core Competencies</h2>
              <p className="text-lg opacity-80 leading-relaxed">
                From inbox management and complex scheduling to CRM maintenance and operational reporting, I handle the essential details that keep your business scaling.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full accent-bg flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  Process Optimization & Automation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full accent-bg flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  Stakeholder Relationship Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full accent-bg flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  Comprehensive Data Reporting
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
              {["Email Audit", "CRM Sync", "Scheduling", "Invoicing", "Research", "Reports", "Support", "Strategy"].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl text-center font-bold text-xl hover:bg-[#A376A2] transition-colors duration-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
