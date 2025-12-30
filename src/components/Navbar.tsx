import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function Navbar({ currentLanguage, onLanguageChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
    { code: 'om', name: 'Afaan Oromoo', flag: '🇪🇹' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        sectors: "Sectors",
        leadership: "Leadership",
        volunteer: "Volunteer"
      },
      donate: "Donate Now",
      selectLang: "Select Language"
    },
    am: {
      nav: {
        home: "መነሻ",
        about: "ስለ እኛ",
        sectors: "ዘርፎች",
        leadership: "አመራር",
        volunteer: "በጎ ፈቃደኝነት"
      },
      donate: "አሁን ይለግሱ",
      selectLang: "ቋንቋ ይምረጡ"
    },
    om: {
      nav: {
        home: "Fuula Dura",
        about: "Waa'ee Keenya",
        sectors: "Dameewwan",
        leadership: "Hogganinsa",
        volunteer: "Arjooma"
      },
      donate: "Amma Arjoomi",
      selectLang: "Afaan Filadhu"
    },
    ar: {
      nav: {
        home: "الرئيسية",
        about: "عننا",
        sectors: "القطاعات",
        leadership: "القيادة",
        volunteer: "تطوع"
      },
      donate: "تبرع الآن",
      selectLang: "اختر اللغة"
    }
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;
  const currentLang = languages.find(l => l.code === currentLanguage) || languages[0];

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.sectors, href: "#sectors" },
    { label: t.nav.leadership, href: "#leadership" },
    { label: t.nav.volunteer, href: "#volunteer" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#004d40] to-[#00695c] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">ح</span>
            </div>
            <span className="text-2xl font-bold text-[#004d40]">Humsj</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#004d40] transition-colors font-medium px-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:border-[#004d40] transition-colors"
                title={t.selectLang}
              >
                <span>{currentLang.flag}</span>
                <span className="text-sm font-medium">{currentLang.name}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 glass-card rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-[#004d40]/5 transition-colors ${currentLanguage === lang.code ? 'bg-[#004d40]/10 text-[#004d40] font-semibold' : 'text-gray-700'
                        }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Donate Button */}
            <a href="#charity">
              <button className="btn-primary px-6 py-2.5 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all">
                {t.donate}
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 border-t border-[#004d40]/10 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-[#004d40] px-2 py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Language Switcher Mobile */}
            <div className="pt-6 border-t border-[#004d40]/10">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 px-2">{t.selectLang}</p>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${currentLanguage === lang.code
                      ? 'border-[#004d40] bg-[#004d40]/5 text-[#004d40] font-semibold shadow-sm'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <a href="#charity" className="block w-full">
              <button className="w-full py-4 bg-[#FFD700] text-[#002B24] rounded-xl font-bold shadow-lg mt-2 active:scale-[0.98] transition-all">
                {t.donate}
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}