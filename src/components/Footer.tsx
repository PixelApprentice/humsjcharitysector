import { Facebook, Twitter, Instagram, Youtube, Send, Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FooterProps {
  language: string;
}

export function Footer({ language }: FooterProps) {
  const content = {
    en: {
      mission: "Humsj External Affairs is a tech-enabled Islamic non-profit organization committed to serving the Ethiopian Ummah through education, humanitarian aid, and community development. We operate under Haramaya Muslim Student Jema'a, managing charity projects, Hifz programs, and community initiatives.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      social: "Connect With Us",
      newsletter: "Stay Connected",
      newsletterText: "Join our Telegram channel for updates",
      joinTelegram: "Join Telegram",
      address: "Addis Ababa, Ethiopia",
      generalPhone: "+251 925 237 453",
      websiteNotice: "humsj.org under maintenance",
      telegramInfo: "Contact us via Telegram for inquiries",
      copyright: "© 2025 Humsj External Affairs. All rights reserved.",
      trademark: "A Project of Haramaya Muslim Student Jema'a",
      links: {
        about: "About Us",
        sectors: "Our Sectors",
        volunteer: "Volunteer",
        donate: "Donate",
        blog: "Blog & News",
        leadership: "Leadership"
      }
    },
    am: {
      mission: "የሁምስጅ ውጭ ጉዳይ በቴክኖሎጂ የተደገፈ እስላማዊ ለትርፍ ያልተቋቋመ ድርጅት ሲሆን የኢትዮጵያ ኡማህን በትምህርት፣ በሰብአዊ እርዳታ እና በማህበረሰብ ልማት ለማገልገል ቁርጠኛ ነው።",
      quickLinks: "ፈጣን አገናኞች",
      contact: "ያግኙን",
      social: "ካለን ይገናኙ",
      newsletter: "ተገናኙ",
      newsletterText: "ለዝመናዎች የቴሌግራም ቻናላችንን ይቀላቀሉ",
      joinTelegram: "ቴሌግራም ይቀላቀሉ",
      address: "አዲስ አበባ፣ ኢትዮጵያ",
      generalPhone: "+251 925 237 453",
      websiteNotice: "humsj.org በጥገና ላይ",
      telegramInfo: "ለጥያቄዎች በቴሌግራም ያግኙን",
      copyright: "© 2025 የሁምስጅ ውጭ ጉዳይ። ሁሉም መብቶች የተጠበቁ ናቸው።",
      trademark: "የሐረማያ የሙስሊም ተማሪዎች ጀማዓ ፕሮጀክት",
      links: {
        about: "ስለእኛ",
        sectors: "የእኛ ዘርፎች",
        volunteer: "በጎ ፈቃደኛ",
        donate: "ይለግሱ",
        blog: "ብሎግ እና ዜና",
        leadership: "አመራር"
      }
    },
    om: {
      mission: "Humsj External Affairs dhaabbata teekinooloojiin deeggarame kan Islaamaa bu'aa hin barbaachiisne Ummaata Itoophiyaa barnoota, gargaarsa namoomaa fi misoomaa hawaasaan tajaajiluuf kutannoo qabuudha.",
      quickLinks: "Geessituu Saffisaa",
      contact: "Nu Quunnamaa",
      social: "Nu Waliin Wal Qunnami",
      newsletter: "Wal Qunnami",
      newsletterText: "Fooyya'iinsa argachuuf Telegram keenyatti makamaa",
      joinTelegram: "Telegram Seeni",
      address: "Finfinnee, Itoophiyaa",
      generalPhone: "+251 925 237 453",
      websiteNotice: "humsj.org hojii suphaa jalatti",
      telegramInfo: "Gaaffii Telegramiin nu quunnamaa",
      copyright: "© 2025 Humsj External Affairs. Mirgi hundi kan eegamedha.",
      trademark: "Pirojektii Haramaya Muslim Student Jema'a",
      links: {
        about: "Waa'ee Keenyaa",
        sectors: "Murnoota Keenyaa",
        volunteer: "Arjooma",
        donate: "Arjoomi",
        blog: "Biloogii fi Oduu",
        leadership: "Hoggansa"
      }
    },
    ar: {
      mission: "الشؤون الخارجية منظمة إسلامية غير ربحية تعتمد على التكنولوجيا وملتزمة بخدمة الأمة الإثيوبية من خلال التعليم والمساعدات الإنسانية وتنمية المجتمع.",
      quickLinks: "روابط سريعة",
      contact: "اتصل بنا",
      social: "تواصل معنا",
      newsletter: "ابق على اتصال",
      newsletterText: "انضم إلى قناة Telegram الخاصة بنا للحصول على التحديثات",
      joinTelegram: "انضم إلى Telegram",
      address: "أديس أبابا، إثيوبيا",
      generalPhone: "+251 925 237 453",
      websiteNotice: "humsj.org قيد الصيانة",
      telegramInfo: "اتصل بنا عبر Telegram للاستفسارات",
      copyright: "© 2025 الشؤون الخارجية. جميع الحقوق محفوظة.",
      trademark: "مشروع جمعة طلاب هرر المسلمين",
      links: {
        about: "معلومات عنا",
        sectors: "قطاعاتنا",
        volunteer: "تطوع",
        donate: "تبرع",
        blog: "المدونة والأخبار",
        leadership: "القيادة"
      }
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <footer className="bg-gradient-to-br from-[#0097A7] to-[#006064] text-white islamic-pattern-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback 
                src="figma:asset/69eb781514de5f027050d1310d0db87dbe3cf736.png"
                alt="Humsj Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Humsj</span>
                <span className="text-sm text-gray-300">External Affairs</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t.mission}
            </p>
            
            {/* Important Notice */}
            <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-4">
              <p className="text-sm text-amber-200 mb-2">
                <strong>⚠️ {t.websiteNotice}</strong>
              </p>
              <p className="text-xs text-gray-300">{t.telegramInfo}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm flex items-center gap-2">
                  <span className="text-[#ffd700]">→</span>
                  {t.links.about}
                </a>
              </li>
              <li>
                <a href="#sectors" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm flex items-center gap-2">
                  <span className="text-[#ffd700]">→</span>
                  {t.links.sectors}
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm flex items-center gap-2">
                  <span className="text-[#ffd700]">→</span>
                  {t.links.leadership}
                </a>
              </li>
              <li>
                <a href="#donate" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm flex items-center gap-2">
                  <span className="text-[#ffd700]">→</span>
                  {t.links.donate}
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm flex items-center gap-2">
                  <span className="text-[#ffd700]">→</span>
                  {t.links.blog}
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm flex items-center gap-2">
                  <span className="text-[#ffd700]">→</span>
                  {t.links.volunteer}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.contact}</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ffd700] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#ffd700] mt-1 flex-shrink-0" />
                <a href={`tel:${t.generalPhone}`} className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm">
                  {t.generalPhone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Send size={18} className="text-[#ffd700] mt-1 flex-shrink-0" />
                <a 
                  href="https://t.me/humsj_charity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ffd700] transition-colors text-sm"
                >
                  @humsj_charity
                </a>
              </li>
            </ul>

            <div>
              <h4 className="text-lg font-bold mb-3">{t.newsletter}</h4>
              <p className="text-gray-300 text-xs mb-4">{t.newsletterText}</p>
              <a 
                href="https://t.me/humsj_charity" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="w-full px-6 py-3 bg-[#ffd700] text-[#004d40] rounded-lg hover:bg-[#daa520] transition-all font-bold flex items-center justify-center gap-2">
                  <Send size={18} />
                  {t.joinTelegram}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">{t.copyright}</p>
            <p className="text-gray-500 text-xs">{t.trademark}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}