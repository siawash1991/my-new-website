import React from 'react';
import { Clock, BarChart } from 'lucide-react';
import { Language } from '../types';

interface CoursesPageProps {
  lang: Language;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ lang }) => {
  const t = {
    heroTitle: lang === 'en' ? 'The Inner Circle: Exclusive AI Mastery' : 'حلقه درونی: تسلط انحصاری بر هوش مصنوعی',
    heroDesc: lang === 'en' 
      ? 'Unlock unparalleled expertise with our curated collection of advanced AI courses, designed for the innovators of tomorrow.'
      : 'با مجموعه دوره‌های پیشرفته هوش مصنوعی ما که برای نوآوران فردا طراحی شده است، به تخصص بی‌نظیری دست یابید.',
    apply: lang === 'en' ? 'Apply for Access' : 'درخواست دسترسی',
    joinWaitlist: lang === 'en' ? 'Join Waitlist' : 'عضویت در لیست انتظار',
    course1Title: lang === 'en' ? 'AI Prompt Engineering Nexus' : 'مرکز مهندسی پرامپت هوش مصنوعی',
    course1Desc: lang === 'en'
      ? 'Master the art and science of crafting powerful AI prompts to unlock creative and analytical potential across all major platforms.'
      : 'در هنر و علم ساخت پرامپت‌های قدرتمند هوش مصنوعی تسلط پیدا کنید تا پتانسیل‌های خلاقانه و تحلیلی را در تمام پلتفرم‌های اصلی آزاد کنید.',
    course1Status: lang === 'en' ? 'Registration Open' : 'ثبت‌نام باز است',
    course2Title: lang === 'en' ? 'Advanced Generative Artistry' : 'هنر مولد پیشرفته',
    course2Desc: lang === 'en'
      ? 'Push the boundaries of visual creation. Learn advanced techniques in generative art, from complex algorithms to aesthetic theory.'
      : 'مرزهای خلق بصری را جابجا کنید. تکنیک‌های پیشرفته هنر مولد را از الگوریتم‌های پیچیده تا تئوری زیبایی‌شناسی بیاموزید.',
    course2Status: lang === 'en' ? 'Capacity Full' : 'ظرفیت تکمیل',
    weeks: lang === 'en' ? 'Weeks' : 'هفته',
    advanced: lang === 'en' ? 'Advanced' : 'پیشرفته',
    expert: lang === 'en' ? 'Expert' : 'خبره',
  };

  return (
    <div className="relative min-h-screen pb-20">
      
      {/* Background */}
      <div className="fixed inset-0 z-0">
         <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgUD2U5P3xmPgUzoFUKVxcp7_O_FpC2ehhQJFHT2Xm6CuFBWPceeCxYMr4vmPHiK7CUPMCMxXm7F6rmQBJcpLsvkPNP_OmOweSAjtX1dLz1VOvZsGfA9h49M0hqCNbMD3zcjZVn76Jyh4uaa7Da6OV7QvlcVT0RO4gKS80zThP3sl0ReK4PJM1OmuUC6ohNb1wRbqeLuiHeC9erW_pESbOGX1vXH9M_sgxZu9wtJmDJFhVng1vggwGdKEMqCukAU3qyHk0BomBw7rF"
            alt="Fluid Art"
            className="w-full h-full object-cover opacity-60"
         />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-10">
        
        {/* Hero Card */}
        <div className="w-full max-w-4xl mx-auto mb-12">
             <div className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-12 text-center shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-black mb-4">{t.heroTitle}</h1>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                    {t.heroDesc}
                </p>
                <button className="bg-primary text-background-dark font-bold py-3 px-8 rounded-full hover:bg-white transition-colors">
                    {t.apply}
                </button>
             </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Course 1 */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold w-2/3">{t.course1Title}</h3>
                    <div className="flex items-center gap-2 bg-[#1A4331] border border-[#39FF14]/30 px-3 py-1 rounded-full text-xs text-[#39FF14] font-bold uppercase tracking-wider whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></span>
                        {t.course1Status}
                    </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-8 flex-grow">
                    {t.course1Desc}
                </p>
                <div className="border-t border-white/10 pt-6 flex gap-6 text-sm text-white/60 mb-6">
                     <div className="flex items-center gap-2">
                        <BarChart size={16} /> {t.advanced}
                     </div>
                     <div className="flex items-center gap-2">
                        <Clock size={16} /> 8 {t.weeks}
                     </div>
                </div>
                <button className="w-full py-3 bg-primary text-background-dark font-bold rounded-full hover:bg-white transition-colors">
                    {t.apply}
                </button>
            </div>

            {/* Course 2 */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold w-2/3">{t.course2Title}</h3>
                    <div className="flex items-center gap-2 bg-[#4A3215] border border-[#FFA500]/30 px-3 py-1 rounded-full text-xs text-[#FFA500] font-bold uppercase tracking-wider whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-[#FFA500]"></span>
                        {t.course2Status}
                    </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-8 flex-grow">
                    {t.course2Desc}
                </p>
                <div className="border-t border-white/10 pt-6 flex gap-6 text-sm text-white/60 mb-6">
                     <div className="flex items-center gap-2">
                        <BarChart size={16} /> {t.expert}
                     </div>
                     <div className="flex items-center gap-2">
                        <Clock size={16} /> 12 {t.weeks}
                     </div>
                </div>
                <button className="w-full py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors">
                    {t.joinWaitlist}
                </button>
            </div>

        </div>

      </div>
    </div>
  );
};