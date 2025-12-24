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

  const currentLang = languages.find(l => l.code === currentLanguage) || languages[0];

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
            <a href="#home" className="text-gray-700 hover:text-[#004d40] transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#004d40] transition-colors font-medium">About</a>
            <a href="#projects" className="text-gray-700 hover:text-[#004d40] transition-colors font-medium">Projects</a>
            <a href="#blog" className="text-gray-700 hover:text-[#004d40] transition-colors font-medium">Blog</a>
            <a href="#volunteer" className="text-gray-700 hover:text-[#004d40] transition-colors font-medium">Volunteer</a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:border-[#004d40] transition-colors"
              >
                <span>{currentLang.flag}</span>
                <span className="text-sm">{currentLang.name}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-xl py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${currentLanguage === lang.code ? 'bg-[#004d40]/10' : ''
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
            <a href="#donate">
              <button className="btn-primary">
                Donate Now
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 border-t border-[#004d40]/10 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {['Home', 'About', 'Projects', 'Blog', 'Volunteer'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-[#004d40] px-2 py-1 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Language Switcher Mobile */}
            <div className="pt-6 border-t border-[#004d40]/10">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 px-2">Select Language</p>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${currentLanguage === lang.code
                      ? 'border-[#004d40] bg-[#004d40]/5 text-[#004d40] font-semibold'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-[#FFD700] text-[#002B24] rounded-xl font-bold shadow-lg mt-2">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}