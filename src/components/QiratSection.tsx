import { BookOpen, Award, Users, Calendar } from 'lucide-react';
import { useState } from 'react';

interface QiratSectionProps {
    language: string;
}

export function QiratSection({ language }: QiratSectionProps) {
    const [showRegistration, setShowRegistration] = useState(false);

    const content = {
        en: {
            title: "Qirat Sector",
            subtitle: "Nurturing Quranic Excellence",
            description: "The Qirat Sector is dedicated to promoting Quranic education, memorization, and proper recitation (tajweed) among Ethiopian Muslim students. We provide structured programs, competitions, and resources to support learners at all levels.",
            amir: "Sector Amir: Mohammed Ahmadu",
            phone: "+251 929 230 120",
            programs: {
                title: "Our Programs",
                items: [
                    {
                        title: "Quran Memorization (Hifz)",
                        description: "Structured memorization program with qualified teachers and regular assessments"
                    },
                    {
                        title: "Tajweed Training",
                        description: "Learn proper Quranic recitation rules and pronunciation techniques"
                    },
                    {
                        title: "Annual Competitions",
                        description: "Participate in local and national Qirat competitions with prizes and recognition"
                    },
                    {
                        title: "Student Support",
                        description: "Mentorship, resources, and guidance for all Quranic students"
                    }
                ]
            },
            stats: {
                students: "Active Students",
                competitions: "Annual Competitions",
                teachers: "Qualified Teachers",
                completion: "Completion Rate"
            },
            register: "Register Now",
            contact: "Contact Amir"
        },
        am: {
            title: "የቂራት ዘርፍ",
            subtitle: "የቁርአን ብቃትን ማሳደግ",
            description: "የቂራት ዘርፍ በኢትዮጵያ የሙስሊም ተማሪዎች መካከል የቁርአን ትምህርትን፣ ማስታወስን እና ትክክለኛ ንባብን (ታጅዊድ) ለማስተዋወቅ ቁርጠኛ ነው። በሁሉም ደረጃዎች ላሉ ተማሪዎች የተዋቀሩ ፕሮግራሞችን፣ ውድድሮችን እና ግብዓቶችን እናቀርባለን።",
            amir: "የዘርፍ አሚር፡ መሀመድ አህማዱ",
            phone: "+251 929 230 120",
            programs: {
                title: "የእኛ ፕሮግራሞች",
                items: [
                    {
                        title: "የቁርአን ማስታወስ (ሂፍዝ)",
                        description: "ከብቁ መምህራን እና መደበኛ ግምገማዎች ጋር የተዋቀረ የማስታወስ ፕሮግራም"
                    },
                    {
                        title: "የታጅዊድ ስልጠና",
                        description: "ትክክለኛ የቁርአን ንባብ ደንቦችን እና የአጠራር ቴክኒኮችን ይማሩ"
                    },
                    {
                        title: "ዓመታዊ ውድድሮች",
                        description: "በሽልማቶች እና እውቅና በአገር ውስጥ እና በአገር አቀፍ የቂራት ውድድሮች ይሳተፉ"
                    },
                    {
                        title: "የተማሪ ድጋፍ",
                        description: "ለሁሉም የቁርአን ተማሪዎች መመሪያ፣ ግብዓቶች እና መመሪያ"
                    }
                ]
            },
            stats: {
                students: "ንቁ ተማሪዎች",
                competitions: "ዓመታዊ ውድድሮች",
                teachers: "ብቁ መምህራን",
                completion: "የማጠናቀቂያ መጠን"
            },
            register: "አሁን ይመዝገቡ",
            contact: "አሚርን ያግኙ"
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <section id="qirat" className="py-20 bg-white islamic-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block p-4 bg-[#004d40] rounded-2xl mb-6">
                        <BookOpen size={48} className="text-white" />
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
                    <div className="glass-card rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-[#004d40] mb-2">200+</div>
                        <div className="text-gray-600">{t.stats.students}</div>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-[#004d40] mb-2">5</div>
                        <div className="text-gray-600">{t.stats.competitions}</div>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-[#004d40] mb-2">15+</div>
                        <div className="text-gray-600">{t.stats.teachers}</div>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-[#004d40] mb-2">85%</div>
                        <div className="text-gray-600">{t.stats.completion}</div>
                    </div>
                </div>

                {/* Programs */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-[#004d40] text-center mb-12">{t.programs.title}</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {t.programs.items.map((program, index) => (
                            <div key={index} className="glass-card rounded-xl p-6 hover:shadow-lg transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#004d40] rounded-lg flex items-center justify-center flex-shrink-0">
                                        {index === 0 && <BookOpen size={24} className="text-white" />}
                                        {index === 1 && <Award size={24} className="text-white" />}
                                        {index === 2 && <Calendar size={24} className="text-white" />}
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
                    <QiratRegistrationModal
                        language={language}
                        onClose={() => setShowRegistration(false)}
                    />
                )}
            </div>
        </section>
    );
}

// Registration Modal Component
function QiratRegistrationModal({ language, onClose }: { language: string; onClose: () => void }) {
    const content = {
        en: {
            title: "Qirat Program Registration",
            fullName: "Full Name",
            age: "Age",
            phone: "Phone Number",
            email: "Email (Optional)",
            level: "Current Memorization Level",
            tajweed: "Tajweed Proficiency",
            program: "Program Interest",
            message: "Additional Information",
            submit: "Submit Registration",
            cancel: "Cancel",
            levels: ["Beginner", "Juz 1-10", "Juz 11-20", "Juz 21-30", "Completed Hifz"],
            tajweedLevels: ["Beginner", "Intermediate", "Advanced"],
            programs: ["Hifz Program", "Tajweed Training", "Competition Prep", "General Support"]
        },
        am: {
            title: "የቂራት ፕሮግራም ምዝገባ",
            fullName: "ሙሉ ስም",
            age: "ዕድሜ",
            phone: "ስልክ ቁጥር",
            email: "ኢሜይል (አማራጭ)",
            level: "የአሁኑ የማስታወስ ደረጃ",
            tajweed: "የታጅዊድ ብቃት",
            program: "የፕሮግራም ፍላጎት",
            message: "ተጨማሪ መረጃ",
            submit: "ምዝገባ ያስገቡ",
            cancel: "ይቅር",
            levels: ["ጀማሪ", "ጁዝ 1-10", "ጁዝ 11-20", "ጁዝ 21-30", "ሂፍዝ ተጠናቋል"],
            tajweedLevels: ["ጀማሪ", "መካከለኛ", "ከፍተኛ"],
            programs: ["የሂፍዝ ፕሮግራም", "የታጅዊድ ስልጠና", "የውድድር ዝግጅት", "አጠቃላይ ድጋፍ"]
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
                        <label className="block text-gray-700 font-semibold mb-2">{t.level}</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" required>
                            {t.levels.map((level, idx) => (
                                <option key={idx} value={level}>{level}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">{t.tajweed}</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" required>
                            {t.tajweedLevels.map((level, idx) => (
                                <option key={idx} value={level}>{level}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">{t.program}</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]" required>
                            {t.programs.map((program, idx) => (
                                <option key={idx} value={program}>{program}</option>
                            ))}
                        </select>
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
