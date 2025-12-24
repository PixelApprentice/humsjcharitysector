import { Users, BookOpen, MessageCircle, Heart } from 'lucide-react';
import { useState } from 'react';

interface DawaSectionProps {
    language: string;
}

export function DawaSection({ language }: DawaSectionProps) {
    const [showRegistration, setShowRegistration] = useState(false);

    const content = {
        en: {
            title: "Dawa Sector",
            subtitle: "Spreading Knowledge and Faith",
            description: "The Dawa Sector focuses on Islamic education, community outreach, and spreading the message of Islam. We organize educational programs, lectures, and community events to strengthen faith and knowledge among the Ethiopian Muslim community.",
            amir: "Sector Amir: Ramadan Aliyii",
            phone: "+251 975 309 779",
            programs: {
                title: "Our Programs",
                items: [
                    {
                        title: "Islamic Education",
                        description: "Comprehensive Islamic studies programs covering Aqeedah, Fiqh, and Seerah"
                    },
                    {
                        title: "Community Lectures",
                        description: "Regular lectures and seminars by qualified scholars on various Islamic topics"
                    },
                    {
                        title: "Youth Mentorship",
                        description: "Guidance and mentorship programs for Muslim youth to strengthen their faith"
                    },
                    {
                        title: "Interfaith Dialogue",
                        description: "Building bridges through respectful dialogue and community engagement"
                    }
                ]
            },
            stats: {
                participants: "Active Participants",
                events: "Monthly Events",
                volunteers: "Volunteers",
                reach: "Community Reach"
            },
            register: "Join Us",
            contact: "Contact Amir"
        },
        am: {
            title: "የዳዋ ዘርፍ",
            subtitle: "እውቀትን እና እምነትን ማሰራጨት",
            description: "የዳዋ ዘርፍ በእስላማዊ ትምህርት፣ በማህበረሰብ ተደራሽነት እና የእስልምና መልእክት በማሰራጨት ላይ ያተኩራል። በኢትዮጵያ የሙስሊም ማህበረሰብ መካከል እምነትን እና እውቀትን ለማጠናከር ትምህርታዊ ፕሮግራሞችን፣ ንግግሮችን እና የማህበረሰብ ዝግጅቶችን እናዘጋጃለን።",
            amir: "የዘርፍ አሚር፡ ረመዳን አሊዪ",
            phone: "+251 975 309 779",
            programs: {
                title: "የእኛ ፕሮግራሞች",
                items: [
                    {
                        title: "እስላማዊ ትምህርት",
                        description: "አቂዳ፣ ፊቅህ እና ሲራን የሚሸፍኑ አጠቃላይ የእስልምና ጥናት ፕሮግራሞች"
                    },
                    {
                        title: "የማህበረሰብ ንግግሮች",
                        description: "በተለያዩ የእስልምና ርዕሶች ላይ በብቁ ምሁራን መደበኛ ንግግሮች እና ሴሚናሮች"
                    },
                    {
                        title: "የወጣቶች መምህርነት",
                        description: "ለሙስሊም ወጣቶች እምነታቸውን ለማጠናከር መመሪያ እና የመምህርነት ፕሮግራሞች"
                    },
                    {
                        title: "የሃይማኖት ውይይት",
                        description: "በአክብሮት ውይይት እና በማህበረሰብ ተሳትፎ ድልድይ መገንባት"
                    }
                ]
            },
            stats: {
                participants: "ንቁ ተሳታፊዎች",
                events: "ወርሃዊ ዝግጅቶች",
                volunteers: "በጎ ፈቃደኞች",
                reach: "የማህበረሰብ ተደራሽነት"
            },
            register: "ይቀላቀሉን",
            contact: "አሚርን ያግኙ"
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <section id="dawa" className="py-20 bg-gray-50 islamic-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block p-4 bg-[#004d40] rounded-2xl mb-6">
                        <Users size={48} className="text-white" />
                    </div>
                    <h2 className="text-[#004d40] mb-4">{t.title}</h2>
                    <p className="text-2xl text-[#ffd700] font-semibold mb-4">{t.subtitle}</p>
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                        {t.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-gray-600">
                        <p className="font-semibold">{t.amir}</p>
                        <span className="hidden sm:inline">•</span>
                        <a href={`tel:${t.phone}`} className="text-[#004d40] hover:underline">{t.phone}</a>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="glass-card rounded-xl p-6 text-center bg-white">
                        <div className="text-4xl font-bold text-[#004d40] mb-2">150+</div>
                        <div className="text-gray-600">{t.stats.participants}</div>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center bg-white">
                        <div className="text-4xl font-bold text-[#004d40] mb-2">8+</div>
                        <div className="text-gray-600">{t.stats.events}</div>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center bg-white">
                        <div className="text-4xl font-bold text-[#004d40] mb-2">30+</div>
                        <div className="text-gray-600">{t.stats.volunteers}</div>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center bg-white">
                        <div className="text-4xl font-bold text-[#004d40] mb-2">1000+</div>
                        <div className="text-gray-600">{t.stats.reach}</div>
                    </div>
                </div>

                {/* Programs */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-[#004d40] text-center mb-12">{t.programs.title}</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {t.programs.items.map((program, index) => (
                            <div key={index} className="glass-card rounded-xl p-6 hover:shadow-lg transition-all bg-white">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#004d40] rounded-lg flex items-center justify-center flex-shrink-0">
                                        {index === 0 && <BookOpen size={24} className="text-white" />}
                                        {index === 1 && <MessageCircle size={24} className="text-white" />}
                                        {index === 2 && <Heart size={24} className="text-white" />}
                                        {index === 3 && <Users size={24} className="text-white" />}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#004d40] mb-2">{program.title}</h4>
                                        <p className="text-gray-700">{program.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={() => setShowRegistration(true)}
                        className="px-8 py-4 bg-gradient-to-r from-[#004d40] to-[#00695c] text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 text-lg"
                    >
                        {t.register}
                    </button>
                </div>

                {/* Registration Modal */}
                {showRegistration && (
                    <DawaRegistrationModal
                        language={language}
                        onClose={() => setShowRegistration(false)}
                    />
                )}
            </div>
        </section>
    );
}

// Registration Modal Component
function DawaRegistrationModal({ language, onClose }: { language: string; onClose: () => void }) {
    const content = {
        en: {
            title: "Dawa Program Registration",
            fullName: "Full Name",
            age: "Age",
            phone: "Phone Number",
            email: "Email (Optional)",
            interest: "Area of Interest",
            volunteer: "Volunteer Preference",
            skills: "Skills & Experience",
            message: "Why do you want to join?",
            submit: "Submit Registration",
            cancel: "Cancel",
            interests: ["Islamic Education", "Community Outreach", "Youth Programs", "Interfaith Dialogue", "General Support"],
            volunteerOptions: ["Event Organization", "Teaching", "Mentorship", "Social Media", "Other"]
        },
        am: {
            title: "የዳዋ ፕሮግራም ምዝገባ",
            fullName: "ሙሉ ስም",
            age: "ዕድሜ",
            phone: "ስልክ ቁጥር",
            email: "ኢሜይል (አማራጭ)",
            interest: "የፍላጎት አካባቢ",
            volunteer: "የበጎ ፈቃደኝነት ምርጫ",
            skills: "ክህሎቶች እና ልምድ",
            message: "ለምን መቀላቀል ይፈልጋሉ?",
            submit: "ምዝገባ ያስገቡ",
            cancel: "ይቅር",
            interests: ["እስላማዊ ትምህርት", "የማህበረሰብ ተደራሽነት", "የወጣቶች ፕሮግራሞች", "የሃይማኖት ውይይት", "አጠቃላይ ድጋፍ"],
            volunteerOptions: ["የዝግጅት ማደራጀት", "ማስተማር", "መምህርነት", "ማህበራዊ ሚዲያ", "ሌላ"]
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
                <h3 className="text-2xl font-bold text-[#004d40] mb-6">{t.title}</h3>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">{t.fullName}</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">{t.age}</label>
                            <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">{t.phone}</label>
                            <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">{t.email}</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">{t.interest}</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" required>
                            {t.interests.map((interest, idx) => (
                                <option key={idx} value={interest}>{interest}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">{t.volunteer}</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" required>
                            {t.volunteerOptions.map((option, idx) => (
                                <option key={idx} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">{t.skills}</label>
                        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" rows={3}></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">{t.message}</label>
                        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" rows={4}></textarea>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-[#004d40] to-[#00695c] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                            {t.submit}
                        </button>
                        <button type="button" onClick={onClose} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                            {t.cancel}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
