import { History, Target, Eye, Award, Sparkles, Users, Heart } from 'lucide-react';

interface AboutSectionProps {
  language: string;
}

export function AboutSection({ language }: AboutSectionProps) {
  const content = {
    en: {
      title: "About Humsj External Affairs",
      subtitle: "Bridging Tradition with Innovation",
      history: {
        title: "Our Story",
        content: "Humsj External Affairs was established as a pioneering initiative under the Haramaya Muslim Student Jema'a, representing a new era of tech-enabled Islamic community service in Ethiopia. Founded on the principles of compassion, innovation, and unity, our organization has grown from a small student-led initiative into a comprehensive external affairs department managing multiple vital sectors.\n\nSince our inception, we have been committed to serving the Ethiopian Ummah through three core sectors: Qirat (Islamic Education & Memorization), Charity (Humanitarian Aid & Development), and Dawa (Islamic Outreach & Community Engagement). Our journey has been marked by continuous growth, innovation, and an unwavering commitment to excellence in serving our community."
      },
      mission: {
        title: "Our Mission",
        content: "To empower the Ethiopian Muslim community through integrated Islamic education, charitable initiatives, and community outreach programs, leveraging technology and modern management practices while staying rooted in Islamic values and traditions."
      },
      vision: {
        title: "Our Vision",
        content: "To become the leading model of tech-enabled Islamic community service in Ethiopia, known for transparency, effectiveness, and transformative impact across education, charity, and spiritual development."
      },
      values: {
        title: "Core Values",
        items: [
          { icon: Sparkles, text: "Islamic Excellence: Upholding the highest standards" },
          { icon: Eye, text: "Transparency: Open and accountable operations" },
          { icon: Target, text: "Innovation: Embracing technology for impact" },
          { icon: Users, text: "Unity: Fostering brotherhood and cohesion" },
          { icon: Heart, text: "Compassion: Serving with empathy" }
        ]
      },
      stats: {
        years: "5+",
        yearsLabel: "Years of Service",
        sectors: "3",
        sectorsLabel: "Core Sectors",
        community: "5000+",
        communityLabel: "Lives Impacted"
      }
    },
    am: {
      title: "ስለ ሁምስጅ ውጭ ጉዳይ",
      subtitle: "ባህልን ከፈጠራ ጋር በማገናኘት",
      history: {
        title: "የእኛ ታሪክ",
        content: "የሁምስጅ ውጭ ጉዳይ በሐረማያ የሙስሊም ተማሪዎች ጀማዓ ስር እንደ አቅኚ ተነሳሽነት ተቋቁሟል። ይህም በኢትዮጵያ ውስጥ በቴክኖሎጂ የተደገፈ እስላማዊ ማህበረሰብ አገልግሎት አዲስ ዘመንን ይወክላል።"
      },
      mission: {
        title: "የእኛ ተልዕኮ",
        content: "የኢትዮጵያ የሙስሊም ማህበረሰብን በተዋሃደ እስላማዊ ትምህርት፣ በበጎ አድራጎት ተነሳሽነቶች እና በማህበረሰብ ተደራሽነት ፕሮግራሞች ማብቃት።"
      },
      vision: {
        title: "የእኛ ራዕይ",
        content: "በኢትዮጵያ ውስጥ በቴክኖሎጂ የተደገፈ እስላማዊ ማህበረሰብ አገልግሎት መሪ ሞዴል መሆን።"
      },
      values: {
        title: "ዋና እሴቶች",
        items: [
          { icon: Sparkles, text: "እስላማዊ ብልጸት" },
          { icon: Eye, text: "ግልጽነት" },
          { icon: Target, text: "ፈጠራ" },
          { icon: Users, text: "አንድነት" },
          { icon: Heart, text: "ርህራሄ" }
        ]
      },
      stats: {
        years: "5+",
        yearsLabel: "የአገልግሎት ዓመታት",
        sectors: "3",
        sectorsLabel: "ዋና ዘርፎች",
        community: "5000+",
        communityLabel: "የተጠቀሙ ሰዎች"
      }
    },
    om: {
      title: "Waa'ee Humsj External Affairs",
      subtitle: "Aadaa fi Kalaqa Walitti Fiduun",
      history: {
        title: "Seenaa Keenyaa",
        content: "Humsj External Affairs akka karoora haaraa Haramaya Muslim Student Jema'a jalatti hundeeffame."
      },
      mission: {
        title: "Kaayyoo Keenyaa",
        content: "Hawaasa Musliimaa Itoophiyaa karaa barnoota Islaamaa fi gargaarsa hawaasaan cimsuu."
      },
      vision: {
        title: "Mul'ata Keenyaa",
        content: "Itoophiyaa keessatti fakkeenya tajaajila hawaasaa Islaamaa teekinooloojiin deeggaran ta'uu."
      },
      values: {
        title: "Gatii Ijoo",
        items: [
          { icon: Sparkles, text: "Gaariina Islaamaa" },
          { icon: Eye, text: "Ifa ta'uu" },
          { icon: Target, text: "Kalaqa" },
          { icon: Users, text: "Tokkummaa" },
          { icon: Heart, text: "Garaa laafinaa" }
        ]
      },
      stats: {
        years: "5+",
        yearsLabel: "Waggoota Tajaajilaa",
        sectors: "3",
        sectorsLabel: "Dameewwan Ijoo",
        community: "5000+",
        communityLabel: "Jireenyaaf Dhiibbaa Uume"
      }
    },
    ar: {
      title: "حول الشؤون الخارجية",
      subtitle: "ربط التقاليد بالابتكار",
      history: {
        title: "قصتنا",
        content: "تأسست الشؤون الخارجية كمبادرة رائدة تحت جماعة طلاب هرر المسلمين."
      },
      mission: {
        title: "مهمتنا",
        content: "تمكين المجتمع الإسلامي الإثيوبي من خلال التعليم الإسلامي المتكامل والمبادرات الخيرية."
      },
      vision: {
        title: "رؤيتنا",
        content: "أن نصبح النموذج الرائد لخدمة المجتمع الإسلامي المدعومة بالتكنولوجيا في إثيوبيا."
      },
      values: {
        title: "القيم الأساسية",
        items: [
          { icon: Sparkles, text: "التميز الإسلامي" },
          { icon: Eye, text: "الشفافية" },
          { icon: Target, text: "الابتكار" },
          { icon: Users, text: "الوحدة" },
          { icon: Heart, text: "الرحمة" }
        ]
      },
      stats: {
        years: "5+",
        yearsLabel: "سنوات من الخدمة",
        sectors: "3",
        sectorsLabel: "القطاعات الأساسية",
        community: "5000+",
        communityLabel: "حياة متأثرة"
      }
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0097A7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffd700]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#0097A7]/10 to-[#ffd700]/10 rounded-full text-sm font-semibold text-[#0097A7] border border-[#0097A7]/20">
              {t.subtitle}
            </span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#0097A7] to-[#006064] bg-clip-text text-transparent mb-6">
            {t.title}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#0097A7]"></div>
            <div className="w-3 h-3 bg-[#ffd700] rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#0097A7]"></div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { value: t.stats.years, label: t.stats.yearsLabel, gradient: "from-blue-500 to-blue-700" },
            { value: t.stats.sectors, label: t.stats.sectorsLabel, gradient: "from-[#0097A7] to-[#00ACC1]" },
            { value: t.stats.community, label: t.stats.communityLabel, gradient: "from-purple-500 to-purple-700" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* History - Full Width Hero */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0097A7]/5 to-[#00ACC1]/5 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ffd700]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0097A7] to-[#00ACC1] rounded-2xl flex items-center justify-center shadow-lg">
                  <History className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{t.history.title}</h3>
              </div>
              <div className="max-w-4xl">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {t.history.content}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.mission.title}</h3>
              <p className="text-gray-700 leading-relaxed">{t.mission.content}</p>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-full"></div>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/10 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.vision.title}</h3>
              <p className="text-gray-700 leading-relaxed">{t.vision.content}</p>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-tl-full"></div>
            </div>
          </div>
        </div>

        {/* Core Values - Creative Card Layout */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t.values.title}</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0097A7] to-[#ffd700] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.values.items.map((value, index) => {
              const Icon = value.icon;
              const colors = [
                "from-rose-500 to-rose-700",
                "from-amber-500 to-amber-700",
                "from-green-500 to-green-700",
                "from-blue-500 to-blue-700",
                "from-purple-500 to-purple-700"
              ];
              return (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
