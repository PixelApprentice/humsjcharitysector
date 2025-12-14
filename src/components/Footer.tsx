import { Send, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  language: string;
}

export function Footer({ language }: FooterProps) {
  const content = {
    en: {
      mission: "Humsj Charity is a tech-enabled Islamic non-profit organization committed to serving the Ethiopian Ummah through education, humanitarian aid, and community development. We are a project under Haramaya Muslim Student Jema'a.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      social: "Connect With Us",
      newsletter: "Newsletter",
      newsletterText: "Subscribe to receive updates and news",
      subscribe: "Subscribe",
      address: "Addis Ababa, Ethiopia",
      phone: "+251 912 345 678",
      email: "info@humsjcharity.org",
      copyright: "© 2025 Humsj Charity. All rights reserved.",
      links: {
        about: "About Us",
        projects: "Our Projects",
        volunteer: "Volunteer",
        donate: "Donate",
        blog: "Blog",
        contact: "Contact"
      }
    },
    am: {
      mission: "የሁምስጅ በጎ አድራጎት በቴክኖሎጂ የተደገፈ እስላማዊ ለትርፍ ያልተቋቋመ ድርጅት ሲሆን የኢትዮጵያ ኡማህን በትምህርት፣ በሰብአዊ እርዳታ እና በማህበረሰብ ልማት ለማገልገል ቁርጠኛ ነው። እኛ በሐረማያ የሙስሊም ተማሪዎች ጀማዓ ስር ያለ ፕሮጀክት ነን።",
      quickLinks: "ፈጣን አገናኞች",
      contact: "ያግኙን",
      social: "ያግኙን",
      newsletter: "የዜና መልዕክት",
      newsletterText: "ዝመናዎችን እና ዜናዎችን ለመቀበል ይመዝገቡ",
      subscribe: "ይመዝገቡ",
      address: "አዲስ አበባ፣ ኢትዮጵያ",
      phone: "+251 912 345 678",
      email: "info@humsjcharity.org",
      copyright: "© 2025 የሁምስጅ በጎ አድራጎት። ሁሉም መብቶች የተጠበቁ ናቸው።",
      links: {
        about: "ስለእኛ",
        projects: "የእኛ ፕሮጀክቶች",
        volunteer: "በጎ ፈቃደኛ",
        donate: "ይለግሱ",
        blog: "ብሎግ",
        contact: "ያግኙን"
      }
    },
    om: {
      mission: "Humsj Charity dhaabbata teekinooloojiin deeggarame kan Islaamaa bu'aa hin barbaachiisne Ummaata Itoophiyaa barnoota, gargaarsa namoomaa fi misoomaa hawaasaan tajaajiluuf kutannoo qabuudha. Nuyi pirojektii Haramaya Muslim Student Jema'a jalatti argamnudha.",
      quickLinks: "Geessituu Saffisaa",
      contact: "Nu Quunnamaa",
      social: "Nu Waliin Wal Qunnami",
      newsletter: "Xalayaa Oduu",
      newsletterText: "Fooyya'iinsaa fi oduu fudhachuuf galmaa'aa",
      subscribe: "Galmaa'aa",
      address: "Finfinnee, Itoophiyaa",
      phone: "+251 912 345 678",
      email: "info@humsjcharity.org",
      copyright: "© 2025 Humsj Charity. Mirgi hundi kan eegamedha.",
      links: {
        about: "Waa'ee Keenyaa",
        projects: "Pirojektoota Keenyaa",
        volunteer: "Arjooma",
        donate: "Arjoomi",
        blog: "Biloogii",
        contact: "Quunnamtii"
      }
    },
    ar: {
      mission: "Humsj Charity هي منظمة إسلامية غير ربحية تعتمد على التكنولوجيا وملتزمة بخدمة الأمة الإثيوبية من خلال التعليم والمساعدات الإنسانية وتنمية المجتمع. نحن مشروع تحت جمعة طلاب هرر المسلمين.",
      quickLinks: "روابط سريعة",
      contact: "اتصل بنا",
      social: "تواصل معنا",
      newsletter: "النشرة الإخبارية",
      newsletterText: "اشترك لتلقي التحديثات والأخبار",
      subscribe: "اشترك",
      address: "أديس أبابا، إثيوبيا",
      phone: "+251 912 345 678",
      email: "info@humsjcharity.org",
      copyright: "© 2025 Humsj Charity. جميع الحقوق محفوظة.",
      links: {
        about: "معلومات عنا",
        projects: "مشاريعنا",
        volunteer: "تطوع",
        donate: "تبرع",
        blog: "مدونة",
        contact: "اتصل"
      }
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <footer className="bg-gradient-to-br from-[#004d40] to-[#00332a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Mission */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#ffd700] rounded-lg flex items-center justify-center">
                <span className="text-[#004d40] text-lg font-bold">ح</span>
              </div>
              <span className="text-xl font-bold">Humsj</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.mission}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm">
                  {t.links.about}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm">
                  {t.links.projects}
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm">
                  {t.links.volunteer}
                </a>
              </li>
              <li>
                <a href="#donate" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm">
                  {t.links.donate}
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm">
                  {t.links.blog}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm">
                  {t.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="mb-4">{t.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ffd700] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#ffd700] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#ffd700] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t.email}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Newsletter */}
          <div>
            <h4 className="mb-4">{t.social}</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://t.me/humsj_charity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ffd700] hover:text-[#004d40] transition-all"
              >
                <Send size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ffd700] hover:text-[#004d40] transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ffd700] hover:text-[#004d40] transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ffd700] hover:text-[#004d40] transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>

            <div>
              <h4 className="mb-2 text-sm">{t.newsletter}</h4>
              <p className="text-gray-300 text-xs mb-3">{t.newsletterText}</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t.email}
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:border-[#ffd700] text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-[#ffd700] text-[#004d40] rounded-lg hover:bg-[#daa520] transition-colors text-sm font-semibold">
                  {t.subscribe}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">{t.copyright}</p>
          <p className="text-gray-500 text-xs mt-2">
            A Project of Haramaya Muslim Student Jema'a
          </p>
        </div>
      </div>
    </footer>
  );
}