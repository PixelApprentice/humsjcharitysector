import { BookOpen, Heart, Users, ArrowRight } from 'lucide-react';

interface SectorCardsProps {
    language: string;
}

export function SectorCards({ language }: SectorCardsProps) {
    const content = {
        en: {
            title: "Our Three Sectors",
            subtitle: "Organized service through specialized initiatives",
            qirat: {
                name: "Qirat Sector",
                description: "Quranic education, memorization programs, and tajweed training. We organize competitions and support Quranic learning initiatives.",
                amir: "Amir: Mohammed Ahmadu",
                activities: ["Quran Memorization", "Tajweed Training", "Annual Competitions", "Student Support"],
                cta: "Learn More"
            },
            charity: {
                name: "Charity Sector",
                description: "Donation management, aid distribution, and humanitarian projects. We ensure transparency in all financial transactions.",
                amir: "Amir: Muhajir Mohammed",
                activities: ["Donation Tracking", "Aid Distribution", "Water Projects", "Emergency Relief"],
                cta: "Donate Now"
            },
            dawa: {
                name: "Dawa Sector",
                description: "Islamic education, community outreach, and spreading the message of Islam through organized programs and events.",
                amir: "Amir: Ramadan Aliyii",
                activities: ["Islamic Education", "Community Lectures", "Youth Mentorship", "Interfaith Dialogue"],
                cta: "Get Involved"
            }
        },
        am: {
            title: "የእኛ ሦስት ዘርፎች",
            subtitle: "በልዩ ተነሳሽነቶች የተደራጀ አገልግሎት",
            qirat: {
                name: "የቂራት ዘርፍ",
                description: "የቁርአን ትምህርት፣ የማስታወስ ፕሮግራሞች እና የታጅዊድ ስልጠና። ውድድሮችን እናዘጋጃለን እና የቁርአን ትምህርት ተነሳሽነቶችን እንደግፋለን።",
                amir: "አሚር፡ መሀመድ አህማዱ",
                activities: ["የቁርአን ማስታወስ", "የታጅዊድ ስልጠና", "ዓመታዊ ውድድሮች", "የተማሪ ድጋፍ"],
                cta: "ተጨማሪ ይወቁ"
            },
            charity: {
                name: "የበጎ አድራጎት ዘርፍ",
                description: "የልገሳ አስተዳደር፣ የእርዳታ ስርጭት እና የሰብአዊ ፕሮጀክቶች። በሁሉም የገንዘብ ግብይቶች ውስጥ ግልጽነትን እናረጋግጣለን።",
                amir: "አሚር፡ ሙሃጂር መሀመድ",
                activities: ["የልገሳ ክትትል", "የእርዳታ ስርጭት", "የውሃ ፕሮጀክቶች", "የአደጋ ጊዜ እርዳታ"],
                cta: "አሁን ይለግሱ"
            },
            dawa: {
                name: "የዳዋ ዘርፍ",
                description: "እስላማዊ ትምህርት፣ የማህበረሰብ ተደራሽነት እና የእስልምና መልእክት በተደራጁ ፕሮግራሞች እና ዝግጅቶች ማሰራጨት።",
                amir: "አሚር፡ ረመዳን አሊዪ",
                activities: ["እስላማዊ ትምህርት", "የማህበረሰብ ንግግሮች", "የወጣቶች መምህርነት", "የሃይማኖት ውይይት"],
                cta: "ይሳተፉ"
            }
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    const sectors = [
        {
            ...t.qirat,
            icon: BookOpen,
            color: "from-[#004d40] to-[#00695c]",
            textColor: "text-white",
            iconBg: "bg-[#004d40]",
            link: "#qirat"
        },
        {
            ...t.charity,
            icon: Heart,
            color: "from-[#FFD700] to-[#E6C300]",
            textColor: "text-[#002B24]",
            iconBg: "bg-[#FFD700]",
            link: "#charity"
        },
        {
            ...t.dawa,
            icon: Users,
            color: "from-[#004d40] to-[#00695c]",
            textColor: "text-white",
            iconBg: "bg-[#004d40]",
            link: "#dawa"
        }
    ];

    return (
        <section id="sectors" className="py-20 bg-gray-50 islamic-pattern">
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
                                <sector.icon size={32} className={sector.iconBg === 'bg-[#ffd700]' ? 'text-gray-900' : 'text-white'} />
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
