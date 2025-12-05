import React from 'react';
import { LayoutDashboard, FolderOpen, Blocks, BarChart2, Settings, Copy, Check, Globe } from 'lucide-react';
import { Page, Language } from '../types';

interface ResourcesPageProps {
  onNavigate: (page: Page) => void;
  lang: Language;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate, lang }) => {
  const [copiedId, setCopiedId] = React.useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const t = {
    dashboard: lang === 'en' ? 'Dashboard' : 'داشبورد',
    projects: lang === 'en' ? 'Projects' : 'پروژه‌ها',
    resources: lang === 'en' ? 'Resources' : 'منابع',
    analytics: lang === 'en' ? 'Analytics' : 'آمار',
    settings: lang === 'en' ? 'Settings' : 'تنظیمات',
    n8nWorkflows: lang === 'en' ? 'n8n Workflows' : 'جریان‌های کاری n8n',
    prompts: lang === 'en' ? 'Prompts' : 'پرامپت‌ها',
    backToHome: lang === 'en' ? 'Back to Home' : 'بازگشت به خانه',
    copyCode: lang === 'en' ? 'Copy Code' : 'کپی کد',
    copied: lang === 'en' ? 'Copied' : 'کپی شد',
  };

  const workflows = [
    { 
        title: lang === 'en' ? "Automated Content Syndication" : "سندیکای محتوای خودکار",
        desc: lang === 'en' ? "Distributes your content across multiple platforms automatically." : "محتوای شما را به صورت خودکار در پلتفرم‌های مختلف توزیع می‌کند.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb9uYa16C8w3j6_1pAiXaZF46SU8m2Nz35pjmpdbBUT7j1zHk-WFIfNxVs-NTqPist2WS_l76qKrBhCbqD2RA0Ie_O5QAbgCfJG9NblsCcp82NrlAJMLZ3O8rGUSNGj1t55MZIqelPzP4azQa8C5AfGCSP5Tns8Dk5AjqGUJAZ0Ms6f0Q_kST7COGXLDdcdumrb_uasS7R3tSv197BpQonWE5KEjqUvD_nyq4Iozzco0LD9ROrs-i1qRPfPwqMxLRdKzTOteeqzgKK" 
    },
    { 
        title: lang === 'en' ? "AI Idea Generation Pipeline" : "خط تولید ایده با هوش مصنوعی",
        desc: lang === 'en' ? "Generates and qualifies new content ideas based on trends." : "ایده‌های محتوایی جدید را بر اساس ترندها تولید و ارزیابی می‌کند.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_UUgN_QxKbtCCinSoNgRNHk0rj1d6vOOjKudTIXIYjNw0Hzm2FueGKMxY2Ct3dWPuLhF73sFod0ZOsl9XxELsqmcZAfWxc88h63Mxv_vTPUkO-M3oec6H_e-t-jXjqN6e2eaC9htrrH2kbg6reFGpyBfs_aij_QYW70XS0vQki9I3WC1U_BIQoLIHl-ADbWcK8GfOFnAhabw49Dv7D9e-yh-lBuHVUwjPWuYk5f1g8wW5FLBhfIAH8JJ-Oo65Oo8wGMsUsh_IRqkf" 
    },
    { 
        title: lang === 'en' ? "Social Media Post Scheduler" : "زمان‌بندی پست شبکه‌های اجتماعی",
        desc: lang === 'en' ? "Automates the scheduling and posting of content to social channels." : "زمان‌بندی و ارسال محتوا به کانال‌های اجتماعی را خودکار می‌کند.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX295fLP5BUn1eFys8CsbPxZ87c5SQYLGX_wxSHp21IBsjIj9HbiS2nv0--RlJcN4EJUkc3WEQAfuQmXLZ8A-rm-4qffC8X7aKBWZLvJZvF27s3k8o-NVJSMOtJv1vHpuik2is9BtALGIOxUj-qfyBWFBELo8D7_xxoJRd5FYcAOSY5zzGcG_F4CVIh-yPOE4cLtPo9BpJNdPwHev40KeEbEifOSg3J66zHNbWWz76dO-Dy3xdBPf6CHCu8yb-9YSF7E2fBi5iOPmO" 
    }
  ];

  const promptItems = [
    { id: 101, title: lang === 'en' ? "SEO Article Outline" : "ساختار مقاله سئو شده", desc: lang === 'en' ? "Generate a comprehensive, SEO-optimized outline for a blog post." : "ایجاد یک ساختار جامع و بهینه شده برای سئو برای پست وبلاگ.", code: `Create a detailed, SEO-friendly article outline for the keyword "[Your Keyword]". Include an introduction, H2 and H3 headings, key talking points for each section, and a conclusion.` },
    { id: 102, title: lang === 'en' ? "Creative Ad Copy" : "متن تبلیغاتی خلاقانه", desc: lang === 'en' ? "Generate 5 distinct ad copy variations for a product or service." : "ایجاد ۵ نوع متن تبلیغاتی متمایز برای یک محصول یا خدمت.", code: `Write 5 high-converting ad copy variations for [Product/Service]. Target audience is [Your Audience]. Highlight the key benefit: [Benefit]. Use a [Tone of Voice] tone.` }
  ];

  return (
    <div className={`flex h-screen bg-background-dark text-white overflow-hidden ${lang === 'fa' ? 'font-persian' : 'font-sans'}`} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-spin-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-spin-reverse"></div>
      </div>

      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 z-10 p-4 hidden md:block">
        <div className="h-full bg-white/5 backdrop-blur-xl border border-white/5 rounded-2xl flex flex-col p-4">
            <div className="flex items-center gap-3 px-2 mb-8 mt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-600 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYbe5VhNT22ioACv74HG1uFLLeNFJi9D6tNKoeCpNzA1RI4UxCOyDhyerUWC5ucBnNav8JNXbeXKT2DuqFQ3cd7FiSn5nu3SuwmIm3R0q5eaQ1t7OTHlt_5SkIiUf9rz_2Y-RQf8W3TdOKLssIn3l_Ld__AHnjztddUNXkmFX93EWw9V1sW4wU029wZeqwl0U6Dwjxeg-uqIvU_OZVpeiAWPlEd0vHQCrIl6GNckrvHSAXdeTRN9LbTtCCk5N5xE4WN7ZS74jxB8j6")'}}></div>
                <div>
                    <h2 className="font-bold text-sm">AI Creator</h2>
                    <p className="text-xs text-white/50">Content Engine</p>
                </div>
            </div>

            <nav className="flex flex-col gap-1 flex-grow">
                <button onClick={() => onNavigate('home')} className="flex items-center gap-3 px-4 py-3 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
                    <LayoutDashboard size={20} /> {t.dashboard}
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
                    <FolderOpen size={20} /> {t.projects}
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-full bg-primary/20 text-primary transition-colors text-sm font-medium">
                    <Blocks size={20} /> {t.resources}
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
                    <BarChart2 size={20} /> {t.analytics}
                </button>
            </nav>

            <button className="flex items-center gap-3 px-4 py-3 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium mt-auto">
                <Settings size={20} /> {t.settings}
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-4 z-10 overflow-hidden">
        <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/5 rounded-2xl overflow-y-auto custom-scrollbar p-6 md:p-8">
            
            <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                <h1 className="text-3xl font-bold">{t.resources}</h1>
                <div className="md:hidden">
                    <button onClick={() => onNavigate('home')} className="text-sm text-primary">{t.backToHome}</button>
                </div>
            </header>

            {/* n8n Section */}
            <section className="mb-12">
                <h2 className="text-xl font-bold uppercase tracking-wider mb-6 text-white/90">{t.n8nWorkflows}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workflows.map((item, i) => (
                        <div key={i} className="bg-black/20 border border-white/5 rounded-xl p-4 hover:border-primary/50 transition-colors group">
                            <div className="h-32 w-full rounded-lg bg-cover bg-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url(${item.img})`}}></div>
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-white/60">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Prompts Section */}
            <section>
                <h2 className="text-xl font-bold uppercase tracking-wider mb-6 text-white/90">{t.prompts}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {promptItems.map((prompt) => (
                        <div key={prompt.id} className="bg-black/20 border border-white/5 rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <div className="mb-4">
                                <h3 className="font-bold text-lg">{prompt.title}</h3>
                                <p className="text-sm text-white/60 mt-1">{prompt.desc}</p>
                            </div>
                            <div className="relative bg-black/40 rounded-lg p-4 font-mono text-sm text-white/80 border border-white/5" dir="ltr">
                                <code className="block break-words pe-20">{prompt.code}</code>
                                <button 
                                    onClick={() => handleCopy(prompt.id, prompt.code)}
                                    className="absolute top-2 right-2 flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-primary/20 transition-colors"
                                >
                                    {copiedId === prompt.id ? <Check size={14} /> : <Copy size={14} />}
                                    {t.copyCode}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
      </main>
    </div>
  );
};