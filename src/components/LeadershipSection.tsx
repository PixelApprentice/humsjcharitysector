import { Phone, Mail, Award, Shield, Heart, BookOpen, Users } from 'lucide-react';

interface LeadershipSectionProps {
  language: string;
}

export function LeadershipSection({ language }: LeadershipSectionProps) {
  const leaders = [
    {
      name: "Musab Abdurahman",
      position: {
        en: "General Amir",
        am: "ጠቅላላ አሚር",
        om: "Amiira Waliigalaa",
        ar: "الأمير العام"
      },
      phone: "+251925237453",
      icon: Shield,
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "Mehadi Jemal",
      position: {
        en: "External Affairs Amir",
        am: "የውጭ ጉዳይ አሚር",
        om: "Amiira Dhimma Alaa",
        ar: "أمير الشؤون الخارجية"
      },
      phone: "+251938979492",
      icon: Users,
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Mohammed Ahmadu",
      position: {
        en: "Qirat Sector Amir",
        am: "የቅራት ሴክተር አሚር",
        om: "Amiira Murna Qirat",
        ar: "أمير قطاع القراءة"
      },
      phone: "+251929230120",
      icon: BookOpen,
      color: "from-green-500 to-green-700"
    },
    {
      name: "Muhajir Mohammed",
      position: {
        en: "Charity Sector Amir",
        am: "የበጎ አድራጎት ሴክተር አሚር",
        om: "Amiira Murna Arjooma",
        ar: "أمير قطاع الخيرية"
      },
      phone: "+251964544620",
      icon: Heart,
      color: "from-rose-500 to-rose-700"
    },
    {
      name: "Ramadan Aliyii",
      position: {
        en: "Dawa Sector Amir",
        am: "የዳዋ ሴክተር አሚር",
        om: "Amiira Murna Dawa",
        ar: "أمير قطاع الدعوة"
      },
      phone: "+251975309779",
      icon: Award,
      color: "from-amber-500 to-amber-700"
    }
  ];

  const content = {
    en: {
      title: "Our Leadership",
      subtitle: "Meet the dedicated leaders guiding Humsj External Affairs",
      contact: "Contact"
    },
    am: {
      title: "የእኛ አመራር",
      subtitle: "የሁምስጅ ውጭ ጉዳይን የሚመሩ ቁርጠኛ መሪዎችን ያግኙ",
      contact: "ያግኙ"
    },
    om: {
      title: "Hoggantoota Keenyaa",
      subtitle: "Hoggantoota Humsj External Affairs qajeelchaa jiran beekaa",
      contact: "Quunnamaa"
    },
    ar: {
      title: "قيادتنا",
      subtitle: "تعرف على القادة المتفانين الذين يقودون الشؤون الخارجية",
      contact: "اتصل"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white islamic-pattern-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004d40] to-[#ffd700] mx-auto mt-6"></div>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => {
            const Icon = leader.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icon Header */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${leader.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-[#ffd700] rounded-full shadow-md">
                      <span className="text-xs font-bold text-gray-900">Amir</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-sm font-semibold text-[#004d40] mb-4">
                    {leader.position[language as keyof typeof leader.position] || leader.position.en}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 mt-6">
                    <a
                      href={`tel:${leader.phone}`}
                      className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-[#004d40] transition-colors group/link"
                    >
                      <Phone size={16} className="group-hover/link:scale-110 transition-transform" />
                      <span>{leader.phone}</span>
                    </a>
                  </div>

                  {/* Contact Button */}
                  <a href={`tel:${leader.phone}`}>
                    <button className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-[#004d40] to-[#00695c] text-white rounded-lg hover:shadow-lg transition-all">
                      {t.contact}
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}