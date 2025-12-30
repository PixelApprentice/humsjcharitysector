import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src="figma:asset/69eb781514de5f027050d1310d0db87dbe3cf736.png" 
              alt="Humsj Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#0097A7]">Humsj</span>
              <span className="text-xs text-gray-600">External Affairs</span>
            </div>
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
                <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-xl py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                        currentLanguage === lang.code ? 'bg-[#004d40]/10' : ''
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
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-[#004d40] transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#004d40] transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-[#004d40] transition-colors">Projects</a>
              <a href="#blog" className="text-gray-700 hover:text-[#004d40] transition-colors">Blog</a>
              <a href="#volunteer" className="text-gray-700 hover:text-[#004d40] transition-colors">Volunteer</a>
              
              {/* Language Switcher Mobile */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                      currentLanguage === lang.code
                        ? 'border-[#004d40] bg-[#004d40]/10'
                        : 'border-gray-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>

              <button className="btn-primary mt-2">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}