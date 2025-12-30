import { BookOpen, Heart, Users, ArrowRight } from 'lucide-react';
import { leadershipData } from '../data/leadershipData';

interface SectorCardsProps {
    language: string;
}

export function SectorCards({ language }: SectorCardsProps) {
    const content = {
        en: {
            title: "Our Three Sectors",
            subtitle: "Organized service through specialized initiatives",
            amirLabel: "Amir",
            cta: {
                learnMore: "Learn More",
                donateNow: "Donate Now",
                getInvolved: "Get Involved"
            }
        },
        am: {
            title: "የእኛ ሦስት ዘርፎች",
            subtitle: "በልዩ ተነሳሽነቶች የተደራጀ አገልግሎት",
            amirLabel: "አሚር",
            cta: {
                learnMore: "ተጨማሪ ይወቁ",
                donateNow: "አሁን ይለግሱ",
                getInvolved: "ይሳተፉ"
            }
        },
        om: {
            title: "Dameewwan Keenya Sadan",
            subtitle: "Hojii qindaa'aa kutaalee dhimma addaa irratti xiyyeeffataniin",
            amirLabel: "Amira",
            cta: {
                learnMore: "Bal'inaan Baradhu",
                donateNow: "Amma Arjoomi",
                getInvolved: "Hirmaadhu"
            }
        },
        ar: {
            title: "قطاعاتنا الثلاثة",
            subtitle: "خدمة منظمة من خلال مبادرات متخصصة",
            amirLabel: "الأمير",
            cta: {
                learnMore: "تعلم المزيد",
                donateNow: "تبرع الآن",
                getInvolved: "شارك معنا"
            }
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    const getLocalizedValue = (obj: any, key: string) => {
        const langValue = obj[language];
        if (langValue) return langValue;

        const langKey = language === 'en' ? key :
            language === 'am' ? `${key}Am` :
                language === 'om' ? `${key}Om` :
                    language === 'ar' ? `${key}Ar` : key;
        return obj[langKey] || obj[key];
    };

    const sectors = [
        {
            name: getLocalizedValue(leadershipData.sectors.qirat, 'name'),
            description: getLocalizedValue(leadershipData.sectors.qirat.description, language),
            amir: `${t.amirLabel}: ${getLocalizedValue(leadershipData.sectors.qirat.amir, 'name')}`,
            activities: leadershipData.sectors.qirat.activities[language as keyof typeof leadershipData.sectors.qirat.activities] || leadershipData.sectors.qirat.activities.en,
            cta: t.cta.learnMore,
            icon: BookOpen,
            color: "from-[#004d40] to-[#00695c]",
            textColor: "text-white",
            iconBg: "bg-[#004d40]",
            link: "#qirat"
        },
        {
            name: getLocalizedValue(leadershipData.sectors.charity, 'name'),
            description: getLocalizedValue(leadershipData.sectors.charity.description, language),
            amir: `${t.amirLabel}: ${getLocalizedValue(leadershipData.sectors.charity.amir, 'name')}`,
            activities: leadershipData.sectors.charity.activities[language as keyof typeof leadershipData.sectors.charity.activities] || leadershipData.sectors.charity.activities.en,
            cta: t.cta.donateNow,
            icon: Heart,
            color: "from-[#FFD700] to-[#E6C300]",
            textColor: "text-[#002B24]",
            iconBg: "bg-[#FFD700]",
            link: "#charity"
        },
        {
            name: getLocalizedValue(leadershipData.sectors.dawa, 'name'),
            description: getLocalizedValue(leadershipData.sectors.dawa.description, language),
            amir: `${t.amirLabel}: ${getLocalizedValue(leadershipData.sectors.dawa.amir, 'name')}`,
            activities: leadershipData.sectors.dawa.activities[language as keyof typeof leadershipData.sectors.dawa.activities] || leadershipData.sectors.dawa.activities.en,
            cta: t.cta.getInvolved,
            icon: Users,
            color: "from-[#004d40] to-[#00695c]",
            textColor: "text-white",
            iconBg: "bg-[#004d40]",
            link: "#dawa"
        }
    ];

    return (
        <section id="sectors" className="py-20 bg-gray-50 islamic-pattern scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[#004d40] mb-4">{t.title}</h2>
                    <p className="text-xl text-gray-600">{t.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all hover:scale-105 group"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 ${sector.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <sector.icon size={32} className={sector.iconBg === 'bg-[#FFD700]' ? 'text-gray-900' : 'text-white'} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-[#004d40] mb-3">
                                {sector.name}
                            </h3>

                            {/* Amir */}
                            <p className="text-sm text-gray-500 mb-4 font-semibold">{sector.amir}</p>

                            {/* Description */}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {sector.description}
                            </p>

                            {/* Activities */}
                            <div className="mb-6">
                                <ul className="space-y-2">
                                    {sector.activities.map((activity, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-[#004d40] rounded-full"></div>
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <a href={sector.link}>
                                <button className={`w-full px-6 py-4 bg-gradient-to-r ${sector.color} ${sector.textColor} rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 group-hover:gap-4 active:scale-95`}>
                                    {sector.cta}
                                    <ArrowRight size={20} />
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
