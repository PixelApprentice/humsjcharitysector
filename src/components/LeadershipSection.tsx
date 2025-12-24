import { Phone, Send, Mail, User } from 'lucide-react';

interface LeadershipSectionProps {
    language: string;
}

export function LeadershipSection({ language }: LeadershipSectionProps) {
    const content = {
        en: {
            title: "Our Leadership",
            subtitle: "Meet the dedicated leaders serving the HUMSJ External Affairs",
            generalAmir: "General Amir - HUMSJ",
            externalAffairs: "External Affairs Amir",
            qiratAmir: "Qirat Sector Amir",
            charityAmir: "Charity Sector Amir",
            dawaAmir: "Dawa Sector Amir",
            contact: "Contact",
            telegram: "Telegram",
            phone: "Phone",
            email: "Email"
        },
        am: {
            title: "የእኛ አመራር",
            subtitle: "የሁምስጅ የውጭ ጉዳይ ዘርፍን የሚያገለግሉ ቁርጠኛ መሪዎችን ያግኙ",
            generalAmir: "ጠቅላይ አሚር - ሁምስጅ",
            externalAffairs: "የውጭ ጉዳይ አሚር",
            qiratAmir: "የቂራት ዘርፍ አሚር",
            charityAmir: "የበጎ አድራጎት ዘርፍ አሚር",
            dawaAmir: "የዳዋ ዘርፍ አሚር",
            contact: "ያግኙ",
            telegram: "ቴሌግራም",
            phone: "ስልክ",
            email: "ኢሜይል"
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    const leaders = [
        {
            name: "Musab Abdurahman",
            nameAm: "ሙሳብ አብዱራህማን",
            position: t.generalAmir,
            phone: "+251 925 237 453",
            telegram: "musab_humsj",
            email: "musab@humsjcharity.org",
            color: "from-[#004d40] to-[#00695c]",
            isGeneral: true
        },
        {
            name: "Mehadi Jemal",
            nameAm: "መሃዲ ጀማል",
            position: t.externalAffairs,
            phone: "+251 938 979 492",
            telegram: "mehadi_humsj",
            email: "mehadi@humsjcharity.org",
            color: "from-[#ffd700] to-[#daa520]",
            isGeneral: true
        },
        {
            name: "Mohammed Ahmadu",
            nameAm: "መሀመድ አህማዱ",
            position: t.qiratAmir,
            phone: "+251 929 230 120",
            telegram: "mohammed_qirat",
            email: "qirat@humsjcharity.org",
            color: "from-[#004d40] to-[#00695c]",
            sector: "qirat"
        },
        {
            name: "Muhajir Mohammed",
            nameAm: "ሙሃጂር መሀመድ",
            position: t.charityAmir,
            phone: "+251 964 544 620",
            telegram: "muhajir_charity",
            email: "charity@humsjcharity.org",
            color: "from-[#004d40] to-[#00695c]",
            sector: "charity"
        },
        {
            name: "Ramadan Aliyii",
            nameAm: "ረመዳን አሊዪ",
            position: t.dawaAmir,
            phone: "+251 975 309 779",
            telegram: "ramadan_dawa",
            email: "dawa@humsjcharity.org",
            color: "from-[#004d40] to-[#00695c]",
            sector: "dawa"
        }
    ];

    return (
        <section className="py-20 bg-white islamic-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[#004d40] mb-4">{t.title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
                </div>

                {/* General Leadership */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                    {leaders.filter(l => l.isGeneral).map((leader, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-105"
                        >
                            <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${leader.color} rounded-full flex items-center justify-center`}>
                                <User size={48} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#004d40] text-center mb-2">
                                {language === 'am' ? leader.nameAm : leader.name}
                            </h3>
                            <p className="text-gray-600 text-center mb-6 font-semibold">{leader.position}</p>

                            <div className="space-y-3">
                                <a
                                    href={`tel:${leader.phone}`}
                                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors"
                                >
                                    <Phone size={20} className="text-[#004d40]" />
                                    <span className="text-gray-700">{leader.phone}</span>
                                </a>
                                <a
                                    href={`https://t.me/${leader.telegram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors"
                                >
                                    <Send size={20} className="text-[#004d40]" />
                                    <span className="text-gray-700">@{leader.telegram}</span>
                                </a>
                                <a
                                    href={`mailto:${leader.email}`}
                                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors"
                                >
                                    <Mail size={20} className="text-[#004d40]" />
                                    <span className="text-gray-700">{leader.email}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sector Leadership */}
                <div className="grid md:grid-cols-3 gap-8">
                    {leaders.filter(l => !l.isGeneral).map((leader, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105"
                        >
                            <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${leader.color} rounded-full flex items-center justify-center`}>
                                <User size={40} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#004d40] text-center mb-2">
                                {language === 'am' ? leader.nameAm : leader.name}
                            </h3>
                            <p className="text-gray-600 text-center mb-4 text-sm font-semibold">{leader.position}</p>

                            <div className="space-y-2">
                                <a
                                    href={`tel:${leader.phone}`}
                                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors text-sm"
                                >
                                    <Phone size={16} className="text-[#004d40]" />
                                    <span className="text-gray-700">{leader.phone}</span>
                                </a>
                                <a
                                    href={`https://t.me/${leader.telegram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors text-sm"
                                >
                                    <Send size={16} className="text-[#004d40]" />
                                    <span className="text-gray-700">@{leader.telegram}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
