import React from 'react';
import { Menu, X, Command, Twitter, Linkedin, Youtube, Globe } from 'lucide-react';
import { Page, Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fa' : 'en');
  };

  const t = {
    home: lang === 'en' ? 'Home' : 'خانه',
    projects: lang === 'en' ? 'Projects (Courses)' : 'پروژه‌ها (دوره‌ها)',
    about: lang === 'en' ? 'About' : 'درباره من',
    blog: lang === 'en' ? 'Blog' : 'بلاگ',
    dashboard: lang === 'en' ? 'Dashboard' : 'داشبورد',
    contact: lang === 'en' ? 'Contact' : 'تماس',
    privacy: lang === 'en' ? 'Privacy Policy' : 'سیاست حفظ حریم خصوصی',
    rights: lang === 'en' ? '© 2024 AI Creator. All rights reserved.' : '© ۲۰۲۴ AI Creator. تمامی حقوق محفوظ است.',
    resources: lang === 'en' ? 'Resources' : 'منابع',
  };

  // Adjust body direction and font based on language
  React.useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  if (activePage === 'resources') {
    return <div className={lang === 'fa' ? 'font-persian' : 'font-sans'} dir={lang === 'fa' ? 'rtl' : 'ltr'}>{children}</div>;
  }

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden text-white ${lang === 'fa' ? 'font-persian' : 'font-sans'}`} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <nav className="z-50 w-full px-6 py-4 md:px-12 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-md fixed top-0 left-0 right-0">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
           <div className="text-primary">
            <Command size={32} />
           </div>
           <span className="font-bold text-xl tracking-tight">AI Creator</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavigate('courses')} 
            className={`text-sm font-medium hover:text-primary transition-colors ${activePage === 'courses' ? 'text-primary' : 'text-white/80'}`}
          >
            {t.projects}
          </button>
          <button 
            onClick={() => onNavigate('home')} 
            className="text-sm font-medium hover:text-primary transition-colors text-white/80"
          >
            {t.about}
          </button>
          <button 
             onClick={() => onNavigate('blog')}
             className={`text-sm font-medium hover:text-primary transition-colors ${activePage === 'blog' ? 'text-primary' : 'text-white/80'}`}
          >
            {t.blog}
          </button>
          <button 
             onClick={() => onNavigate('resources')}
             className="text-sm font-medium hover:text-primary transition-colors text-white/80"
          >
            {t.dashboard}
          </button>
          
          <button onClick={toggleLang} className="flex items-center gap-1 text-xs bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
            <Globe size={14} />
            <span>{lang === 'en' ? 'FA' : 'EN'}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
             <button onClick={toggleLang} className="flex items-center gap-1 text-xs bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
                <Globe size={14} />
                <span>{lang === 'en' ? 'FA' : 'EN'}</span>
            </button>
            <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          <button onClick={() => { onNavigate('courses'); setIsMenuOpen(false); }} className="text-2xl font-bold">{t.projects}</button>
          <button onClick={() => { onNavigate('blog'); setIsMenuOpen(false); }} className="text-2xl font-bold">{t.blog}</button>
          <button onClick={() => { onNavigate('resources'); setIsMenuOpen(false); }} className="text-2xl font-bold">{t.resources}</button>
          <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-2xl font-bold">{t.contact}</button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 text-white/60 text-sm flex-wrap justify-center">
                <a href="#" className="hover:text-primary transition-colors">{t.projects}</a>
                <a href="#" className="hover:text-primary transition-colors">{t.about}</a>
                <a href="#" className="hover:text-primary transition-colors">{t.blog}</a>
                <a href="#" className="hover:text-primary transition-colors">{t.contact}</a>
                <a href="#" className="hover:text-primary transition-colors">{t.privacy}</a>
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Youtube size={20} /></a>
            </div>

            <div className="text-white/40 text-sm">
                {t.rights}
            </div>
        </div>
      </footer>
    </div>
  );
};