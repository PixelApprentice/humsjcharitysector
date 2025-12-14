import { ArrowRight, Send } from 'lucide-react';

interface HeroSectionProps {
  language: string;
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      headline: "Empowering the Ummah Through Technology & Faith",
      subtext: "Serving Ethiopia with transparency and care.",
      primaryBtn: "Support a Project",
      secondaryBtn: "Join Telegram Channel"
    },
    am: {
      headline: "ኡማህን በቴክኖሎጂ እና እምነት ማብቃት",
      subtext: "ኢትዮጵያን በግልጽነት እና እንክብካቤ ማገልገል።",
      primaryBtn: "ፕሮጀክት ይደግፉ",
      secondaryBtn: "ቴሌግራም ይቀላቀሉ"
    },
    om: {
      headline: "Ummaata Keenyaa Teekinoolojiifi Amantiitiin Humneessuu",
      subtext: "Itoophiyaa ifaafi yaadaaniin tajaajiluu.",
      primaryBtn: "Pirojektii Deggeraa",
      secondaryBtn: "Telegram Itti Makaa"
    },
    ar: {
      headline: "تمكين الأمة من خلال التكنولوجيا والإيمان",
      subtext: "خدمة إثيوبيا بشفافية ورعاية.",
      primaryBtn: "ادعم مشروعاً",
      secondaryBtn: "انضم لقناة تيليجرام"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section id="home" className="relative islamic-pattern-overlay bg-gradient-to-br from-[#faf8f5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="inline-block px-4 py-2 bg-[#004d40]/10 rounded-full mb-6">
              <span className="text-[#004d40]">A Project of Haramaya Muslim Student Jema'a</span>
            </div>
            
            <h1 className="text-[#004d40] mb-6">
              {t.headline}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {t.subtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                {t.primaryBtn}
                <ArrowRight size={20} />
              </button>
              
              <button 
                onClick={() => window.open('https://t.me/humsj_charity', '_blank')}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {t.secondaryBtn}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8">
              <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-[#004d40]">500+</div>
                <div className="text-sm text-gray-600">Families Helped</div>
              </div>
              <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-[#004d40]">15+</div>
                <div className="text-sm text-gray-600">Active Projects</div>
              </div>
              <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-[#004d40]">100%</div>
                <div className="text-sm text-gray-600">Transparency</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1612298968918-daae41e26d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjB5b3V0aCUyMHRlY2hub2xvZ3klMjB0YWJsZXRzJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NTY5NjU3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ethiopian youth using technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004d40]/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Tech for Ummah</div>
                  <div className="font-bold text-[#004d40]">Verified Charity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}