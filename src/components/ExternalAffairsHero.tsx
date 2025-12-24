import { ArrowRight, Users, Heart, GraduationCap, ShieldCheck } from 'lucide-react';

interface ExternalAffairsHeroProps {
    language: string;
}

export function ExternalAffairsHero({ language }: ExternalAffairsHeroProps) {
    const content = {
        en: {
            title: "HUMSJ External Affairs",
            subtitle: "Empowering the Ethiopian Ummah Through Organized Service",
            description: "The External Affairs sector of HUMSJ (Haramaya Muslim Student Jema'a) coordinates three vital initiatives: Qirat, Charity, and Dawa. We leverage technology and modern organizational methods while staying true to Islamic values.",
            stats: {
                sectors: "Active Sectors",
                families: "Families Helped",
                students: "Students Enrolled",
                transparency: "Transparency"
            },
            learnMore: "Learn More",
            contactUs: "Contact Us"
        },
        am: {
            title: "የሁምስጅ የውጭ ጉዳይ",
            subtitle: "የኢትዮጵያ ኡማህን በተደራጀ አገልግሎት ማብቃት",
            description: "የሁምስጅ (የሐረማያ የሙስሊም ተማሪዎች ጀማዓ) የውጭ ጉዳይ ዘርፍ ሦስት ወሳኝ ተነሳሽነቶችን ያስተባብራል፡ ቂራት፣ በጎ አድራጎት እና ዳዋ። ለእስላማዊ እሴቶች ታማኝ እያለን ቴክኖሎጂን እና ዘመናዊ የአደረጃጀት ዘዴዎችን እንጠቀማለን።",
            stats: {
                sectors: "ንቁ ዘርፎች",
                families: "የተረዱ ቤተሰቦች",
                students: "የተመዘገቡ ተማሪዎች",
                transparency: "ግልጽነት"
            },
            learnMore: "ተጨማሪ ይወቁ",
            contactUs: "ያግኙን"
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <section className="relative py-28 bg-[#002B24] text-white overflow-hidden islamic-pattern">
            {/* Elegant Gradient Orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#004d40] rounded-full blur-[120px] opacity-30"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C5A021] rounded-full blur-[120px] opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white drop-shadow-sm">
                        {t.title}
                    </h1>
                    <p className="text-2xl md:text-3xl font-semibold mb-8 text-[#FFD700] tracking-wide uppercase">
                        {t.subtitle}
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        {t.description}
                    </p>
                </div>

                {/* Modern Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        { icon: ShieldCheck, value: "3", label: t.stats.sectors },
                        { icon: Heart, value: "500+", label: t.stats.families },
                        { icon: GraduationCap, value: "200+", label: t.stats.students },
                        { icon: Users, value: "100%", label: t.stats.transparency }
                    ].map((stat, idx) => (
                        <div key={idx} className="glass-card hover:bg-white/20 transition-all duration-300 rounded-3xl p-8 group flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 group-hover:bg-[#FFD700]/20 transition-all duration-300">
                                <stat.icon className="text-[#FFD700] w-7 h-7" />
                            </div>
                            <div className="text-5xl font-bold text-white mb-2 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="#sectors" className="w-full sm:w-auto">
                        <button className="w-full sm:min-w-[240px] px-10 py-5 bg-[#FFD700] text-[#002B24] rounded-2xl font-bold hover:bg-[#E6C300] transition-all hover:scale-[1.02] shadow-xl shadow-[#FFD700]/10 flex items-center justify-center gap-3">
                            {t.learnMore}
                            <ArrowRight size={20} />
                        </button>
                    </a>
                    <a href="#leadership" className="w-full sm:w-auto">
                        <button className="w-full sm:min-w-[240px] px-10 py-5 bg-white/5 backdrop-blur-md text-white rounded-2xl font-bold hover:bg-white/10 transition-all hover:scale-[1.02] border border-white/20">
                            {t.contactUs}
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
