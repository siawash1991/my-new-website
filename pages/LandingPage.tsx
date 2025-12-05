import React from 'react';
import { Brain, Lightbulb, Bot } from 'lucide-react';
import { Page, Language } from '../types';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
  lang: Language;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, lang }) => {
  const t = {
    title: lang === 'en' ? 'Creating the Future' : 'خلق آینده',
    subtitle: lang === 'en' 
      ? 'Designing intelligent experiences where AI and human creativity converge.' 
      : 'طراحی تجربیات هوشمند؛ جایی که هوش مصنوعی و خلاقیت انسان به هم می‌رسند.',
    cta: lang === 'en' ? 'Explore My Work' : 'مشاهده نمونه کارها'
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnw7zdPvGp0rT8Oec3MH0IFDjPd_-ZTDrL4bMhcAKR_GC-dHuNJeRQJ87vcbznB4k_6stNFDP2ZBOtZO7v-Qtw2chgnjW3f-Kx7rh1RT-Q6CA7XhBSgoxei4BSjbVcU1FfMhun4Sz4yemRZdPDJEmAQ31I56PQik0mQmL9BSNTWnWQaGbsHpvrfp9cWBKVMNm4XfMP6RgH4NgKvYdQ_XkbCRNjDPK_ABShwCg2BsB84kEWo1k7mwraU2j75oHC20lC1AymS1QCfbvj" 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        {/* Gradients to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-background-dark"></div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>

      {/* Content Card */}
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden shadow-2xl shadow-primary/5">
            
            {/* Floating Icons - Position adjusted for RTL in CSS if needed, but absolute positioning usually needs flip logic. For simplicity, we keep them visual decoration. */}
            <div className="absolute top-12 left-12 md:left-24 w-16 h-16 bg-white/5 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-3xl animate-bounce delay-100 shadow-lg">
                <Brain className="text-pink-400" size={32} />
            </div>
            <div className="absolute bottom-12 right-12 md:right-24 w-20 h-20 bg-white/5 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-4xl animate-bounce delay-300 shadow-lg">
                <Lightbulb className="text-yellow-400" size={40} />
            </div>
            <div className="absolute top-1/2 right-4 md:-right-6 w-14 h-14 bg-white/5 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-2xl animate-bounce delay-700 shadow-lg">
                <Bot className="text-cyan-400" size={28} />
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
                {t.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                {t.subtitle}
            </p>

            <button 
                onClick={() => onNavigate('courses')}
                className="bg-primary text-background-dark font-bold text-lg px-8 py-4 rounded-full hover:shadow-[0_0_20px_rgba(13,242,242,0.5)] transition-all duration-300 flex items-center gap-2 mx-auto"
            >
                {t.cta}
            </button>
        </div>
      </div>
    </div>
  );
};