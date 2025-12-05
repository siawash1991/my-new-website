import React from 'react';
import { BlogPost, Language } from '../types';

interface BlogPageProps {
  lang: Language;
}

export const BlogPage: React.FC<BlogPageProps> = ({ lang }) => {
  const POSTS_EN: BlogPost[] = [
    {
      id: 1,
      title: "The Ripple Effect: AI’s Impact on Modern Design",
      excerpt: "Discover how artificial intelligence is not just a tool but a creative partner, reshaping the landscape of user experience and interface design from the ground up.",
      date: "Oct 23, 2023",
      readTime: "5 min read",
      category: "AI Innovation"
    },
    {
      id: 2,
      title: "Crafting Fluid Interfaces: A Deep Dive into Liquid Glassmorphism",
      excerpt: "Explore the techniques behind creating stunning, liquid-like glass effects in UI design, blending translucency, blur, and motion to build immersive digital experiences.",
      date: "Oct 19, 2023",
      readTime: "8 min read",
      category: "UX/UI Insights"
    },
    {
      id: 3,
      title: "Beyond the Screen: Designing for Spatial Computing",
      excerpt: "As we move into an era of augmented and virtual reality, the principles of design must evolve. This article covers the fundamentals of designing for 3D space.",
      date: "Oct 15, 2023",
      readTime: "7 min read",
      category: "Future Tech"
    },
  ];

  const POSTS_FA: BlogPost[] = [
    {
      id: 1,
      title: "اثر موجی: تاثیر هوش مصنوعی بر طراحی مدرن",
      excerpt: "کشف کنید که چگونه هوش مصنوعی تنها یک ابزار نیست، بلکه یک شریک خلاق است که چشم‌انداز تجربه کاربری و طراحی رابط کاربری را از پایه تغییر می‌دهد.",
      date: "۱ آبان ۱۴۰۲",
      readTime: "۵ دقیقه مطالعه",
      category: "نوآوری هوش مصنوعی"
    },
    {
      id: 2,
      title: "ساخت رابط‌های سیال: نگاهی عمیق به گلس‌مورفیسم مایع",
      excerpt: "بررسی تکنیک‌های ایجاد افکت‌های شیشه‌ای مایع و خیره‌کننده در طراحی UI، ترکیب شفافیت، تاری و حرکت برای ساخت تجربه‌های دیجیتال غوطه‌ور.",
      date: "۲۷ مهر ۱۴۰۲",
      readTime: "۸ دقیقه مطالعه",
      category: "بینش UX/UI"
    },
    {
      id: 3,
      title: "فراتر از صفحه نمایش: طراحی برای محاسبات فضایی",
      excerpt: "با ورود به عصر واقعیت افزوده و مجازی، اصول طراحی باید تکامل یابد. این مقاله اصول طراحی برای فضای سه بعدی را پوشش می‌دهد.",
      date: "۲۳ مهر ۱۴۰۲",
      readTime: "۷ دقیقه مطالعه",
      category: "تکنولوژی آینده"
    },
  ];

  const posts = lang === 'en' ? POSTS_EN : POSTS_FA;
  const categories = lang === 'en' 
    ? ["All", "AI Innovation", "UX/UI Insights", "Creative Process", "Future Tech"]
    : ["همه", "نوآوری هوش مصنوعی", "بینش UX/UI", "فرآیند خلاق", "تکنولوژی آینده"];

  const t = {
    title: lang === 'en' ? 'News & Thoughts' : 'اخبار و اندیشه‌ها',
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      
      {/* Header */}
      <div className="text-center py-16 relative">
         <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8" style={{ textShadow: '0 0 30px rgba(13, 242, 242, 0.3)' }}>
            {t.title}
         </h1>
         
         {/* Categories */}
         <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
                <button 
                    key={cat}
                    className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${i === 0 ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'}`}
                >
                    {cat}
                </button>
            ))}
         </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
            <div key={post.id} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                        {post.excerpt}
                    </p>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/40 uppercase tracking-wider font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-16" dir="ltr">
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:bg-white/10 transition-colors">
            &lt;
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary font-bold">1</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:bg-white/10 transition-colors">2</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:bg-white/10 transition-colors">3</button>
        <span className="text-white/50">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:bg-white/10 transition-colors">10</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:bg-white/10 transition-colors">
            &gt;
        </button>
      </div>

    </div>
  );
};