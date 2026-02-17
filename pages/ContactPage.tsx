import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ChevronRight, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Administrative Support',
    description: ''
  });

  const linkedInUrl = "https://www.linkedin.com/in/osuake-slyvanus-598120391";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // 🔥 Start loading

    emailjs.send(
      'service_9wbe577',
      'template_37nyb9w',
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.description,
      },
      'pOPaGrXeD6loE_XtE'
    )
    .then(() => {
      setIsSubmitted(true);
      setIsLoading(false); // 🔥 Stop loading
      setFormData({ name: '', email: '', service: 'Administrative Support', description: '' });
      setTimeout(() => setIsSubmitted(false), 1000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setIsLoading(false); // 🔥 Stop loading if error
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Hero Section - Matching Home Design */}
      <section className="relative hero-bg py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-up space-y-8">
          <div className="inline-block px-3 py-1 rounded bg-white/10 text-white/80 font-bold text-xs uppercase tracking-widest">
            Ready to scale?
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter text-white">
            Get In <span className="accent-color">Touch</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
            Ready to reclaim your time? Send me a message and let's discuss how I can help your business thrive with reliable support.
          </p>
          <div className="w-20 h-2 accent-bg mx-auto rounded-full opacity-50"></div>
        </div>

        {/* Decorative Grid Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border-y border-white/30 space-y-4 flex flex-col justify-center">
            {[...Array(10)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white/10"></div>)}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-10">
              <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-8 accent-color">Connections</h2>
              
              <div className="space-y-8">
                <a href="mailto:osuaks94@gmail.com" className="flex items-start gap-6 group">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-50 text-[#6B3F69] group-hover:bg-[#6B3F69] group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                    <Mail size={32} />
                  </div>
                  <div className="pt-2">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-1">Direct Email</p>
                    <p className="text-xl lg:text-2xl font-bold primary-color break-all">osuaks94@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-50 text-[#6B3F69] shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div className="pt-2">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-1">Location</p>
                    <p className="text-xl lg:text-2xl font-bold primary-color">Lagos, Nigeria</p>
                    <p className="text-gray-500 font-medium">Remote Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Social Channels</h3>
              <div className="flex gap-4">
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#6B3F69] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
              {isSubmitted && (
                <div className="absolute inset-0 accent-bg z-20 flex flex-col items-center justify-center p-12 text-center rounded-[48px] animate-in fade-in slide-in-from-top duration-500">
                  <div className="w-24 h-24 bg-white accent-color rounded-full flex items-center justify-center mb-8 shadow-2xl">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-xl text-white/80 mb-10">Thank you, Victory will receive your message instantly and get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 bg-white accent-color rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-xs font-black primary-color uppercase tracking-[0.2em]">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-6 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#A376A2] focus:ring-0 outline-none transition-all text-lg font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black primary-color uppercase tracking-[0.2em]">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full px-6 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#A376A2] focus:ring-0 outline-none transition-all text-lg font-medium"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black primary-color uppercase tracking-[0.2em]">Service Needed</label>
                  <div className="relative">
                    <select 
                      className="w-full px-6 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#A376A2] outline-none transition-all bg-white appearance-none text-lg font-medium cursor-pointer"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>Administrative Support</option>
                      <option>Customer Support</option>
                      <option>Personal Assistant Support</option>
                      <option>Custom VA Project</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronRight className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black primary-color uppercase tracking-[0.2em]">Message Details</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="Tell me how I can help you stay organized..."
                    className="w-full px-6 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#A376A2] outline-none transition-all resize-none text-lg font-medium"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  ></textarea>
                </div>

                <button 
  type="submit"
  disabled={isLoading}
  className="w-full py-6 rounded-2xl text-white font-bold text-xl flex items-center justify-center gap-4 transition-all duration-500 hover:shadow-2xl btn-primary uppercase tracking-[0.2em] disabled:opacity-70"
>
  {isLoading ? (
    <div className="flex items-center gap-3">
      <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
      Processing...
    </div>
  ) : (
    <div className="flex items-center gap-3">
      <Send size={24} /> Send Message
    </div>
  )}
</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
