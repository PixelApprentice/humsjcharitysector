import { ArrowRight, Heart, BookOpen, Users, Sparkles, Globe2 } from 'lucide-react';

interface HeroSectionProps {
  language: string;
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      badge: "Serving the Ummah Since 2020",
      title1: "Empowering",
      title2: "Ethiopian Muslims",
      title3: "Through Faith & Innovation",
      subtitle: "Humsj External Affairs bridges Islamic tradition with modern solutions, serving our community through education, charity, and spiritual growth.",
      cta1: "Support Our Mission",
      cta2: "Learn More",
      stats: [
        { label: "Active Projects", value: "15+", icon: Sparkles },
        { label: "Lives Impacted", value: "5000+", icon: Heart },
        { label: "Hifz Students", value: "150+", icon: BookOpen },
        { label: "Volunteers", value: "300+", icon: Users }
      ]
    },
    am: {
      badge: "ከ2020 ጀምሮ ለኡማህ እናገለግላለን",
      title1: "የኢትዮጵያ",
      title2: "ሙስሊሞችን",
      title3: "በእምነትና በፈጠራ ማብቃት",
      subtitle: "የሁምስጅ ውጭ ጉዳይ እስላማዊ ወግን ከዘመናዊ መፍትሄዎች ጋር በማገናኘት ማህበረሰባችንን በትምህርት፣ በበጎ አድራጎት እና በመንፈሳዊ እድገት ያገለግላል።",
      cta1: "ተልዕኳችንን ይደግፉ",
      cta2: "ተጨማሪ ይወቁ",
      stats: [
        { label: "ንቁ ፕሮጀክቶች", value: "15+", icon: Sparkles },
        { label: "የተጠቀሙ ሰዎች", value: "5000+", icon: Heart },
        { label: "የሂፍዝ ተማሪዎች", value: "150+", icon: BookOpen },
        { label: "በጎ ፈቃደኞች", value: "300+", icon: Users }
      ]
    },
    om: {
      badge: "Bara 2020 Eegalee Ummata Tajaajilaa Jirra",
      title1: "Muslimoota",
      title2: "Itoophiyaa",
      title3: "Amantiifi Kalaqaan Cimsuu",
      subtitle: "Humsj External Affairs aadaa Islaamaa furmaata ammayyaa waliin walqabsiisee, barnoota, arjooma fi guddina hafuuraan hawaasa keenya tajaajila.",
      cta1: "Ergama Keenya Deeggaraa",
      cta2: "Dabalataan Beekaa",
      stats: [
        { label: "Pirojektota Sochii", value: "15+", icon: Sparkles },
        { label: "Jireenya Miidhaman", value: "5000+", icon: Heart },
        { label: "Barattota Hifz", value: "150+", icon: BookOpen },
        { label: "Arjooma Ta'oota", value: "300+", icon: Users }
      ]
    },
    ar: {
      badge: "نخدم الأمة منذ 2020",
      title1: "تمكين",
      title2: "المسلمين الإثيوبيين",
      title3: "من خلال الإيمان والابتكار",
      subtitle: "تربط الشؤون الخارجية التقاليد الإسلامية بالحلول الحديثة، لخدمة مجتمعنا من خلال التعليم والخير والنمو الروحي.",
      cta1: "ادعم مهمتنا",
      cta2: "اعرف المزيد",
      stats: [
        { label: "المشاريع النشطة", value: "15+", icon: Sparkles },
        { label: "الأرواح المتأثرة", value: "5000+", icon: Heart },
        { label: "طلاب الحفظ", value: "150+", icon: BookOpen },
        { label: "المتطوعون", value: "300+", icon: Users }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section id="home" className="hero-pattern pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in">
              <Globe2 size={16} />
              <span className="text-sm font-semibold">{t.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-[#ffd700] animate-slide-up">{t.title1}</span>
              <span className="block animate-slide-up" style={{ animationDelay: '0.1s' }}>{t.title2}</span>
              <span className="block text-white/90 text-3xl lg:text-4xl mt-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {t.title3}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#donate">
                <button className="px-8 py-4 bg-[#ffd700] text-gray-900 rounded-full font-bold hover:bg-[#daa520] transition-all hover:scale-105 flex items-center gap-2 shadow-xl">
                  {t.cta1}
                  <ArrowRight size={20} />
                </button>
              </a>
              <a href="#about">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all">
                  {t.cta2}
                </button>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {t.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="glass-dark rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#ffd700] rounded-lg flex items-center justify-center">
                        <Icon className="text-gray-900" size={20} />
                      </div>
                      <span className="text-3xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Decorative Elements */}
          <div className="relative hidden lg:block">
            {/* Floating Cards */}
            <div className="relative h-[600px]">
              {/* Card 1 - Charity */}
              <div className="absolute top-0 right-0 w-72 glass-dark rounded-2xl p-6 border border-white/20 animate-float" style={{ animationDelay: '0s' }}>
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-700 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Charity Sector</h3>
                <p className="text-sm text-white/70 mb-4">Making a difference through humanitarian aid and sustainable development projects.</p>
                <div className="flex items-center gap-2 text-[#ffd700]">
                  <span className="text-2xl font-bold">75,000+</span>
                  <span className="text-xs">ETB Raised</span>
                </div>
              </div>

              {/* Card 2 - Qirat */}
              <div className="absolute top-32 left-0 w-64 glass-dark rounded-2xl p-6 border border-white/20 animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Qirat Sector</h3>
                <p className="text-sm text-white/70 mb-4">Nurturing the next generation of Huffaz and Islamic scholars.</p>
                <div className="flex items-center gap-2 text-[#ffd700]">
                  <span className="text-2xl font-bold">150+</span>
                  <span className="text-xs">Students</span>
                </div>
              </div>

              {/* Card 3 - Dawa */}
              <div className="absolute bottom-0 right-12 w-72 glass-dark rounded-2xl p-6 border border-white/20 animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Dawa Sector</h3>
                <p className="text-sm text-white/70 mb-4">Spreading the message of Islam with wisdom and beautiful preaching.</p>
                <div className="flex items-center gap-2 text-[#ffd700]">
                  <span className="text-2xl font-bold">300+</span>
                  <span className="text-xs">Volunteers</span>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute top-20 right-40 w-32 h-32 bg-[#ffd700]/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-40 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
