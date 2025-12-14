import { BookOpen, Droplet, Building2, Laptop, ArrowRight } from 'lucide-react';

interface ImpactGridProps {
  language: string;
}

export function ImpactGrid({ language }: ImpactGridProps) {
  const content = {
    en: {
      title: "Our Impact Sectors",
      subtitle: "Serving the community through diverse initiatives",
      sectors: [
        {
          icon: BookOpen,
          title: "Education",
          description: "Providing quality Islamic and secular education to Ethiopian youth",
          image: "https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "200+ Students"
        },
        {
          icon: Droplet,
          title: "Water Aid",
          description: "Building wells and providing clean water access to rural communities",
          image: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "25+ Wells Built"
        },
        {
          icon: Building2,
          title: "Mosques",
          description: "Supporting mosque construction and maintenance across Ethiopia",
          image: "https://images.unsplash.com/photo-1685736383398-7f82cea3e919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBtaW5hcmV0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTY5NjU3OXww&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "10+ Mosques"
        },
        {
          icon: Laptop,
          title: "Tech Education",
          description: "Empowering youth with digital skills and technology training",
          image: "https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "150+ Trained"
        }
      ],
      learnMore: "Learn More"
    },
    am: {
      title: "የእኛ ተፅእኖ ዘርፎች",
      subtitle: "ማህበረሰቡን በተለያዩ ተነሳሽነቶች ማገልገል",
      sectors: [
        {
          icon: BookOpen,
          title: "ትምህርት",
          description: "ለኢትዮጵያ ወጣቶች ጥራት ያለው እስላማዊ እና ዓለማዊ ትምህርት መስጠት",
          image: "https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "200+ ተማሪዎች"
        },
        {
          icon: Droplet,
          title: "የውሃ እርዳታ",
          description: "ጉድጓዶችን መገንባት እና ለገጠር ማህበረሰቦች ንጹህ ውሃ መድረስ",
          image: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "25+ ጉድጓዶች"
        },
        {
          icon: Building2,
          title: "መስጂዶች",
          description: "በመላ ኢትዮጵያ መስጊድ ግንባታ እና ጥገና መደገፍ",
          image: "https://images.unsplash.com/photo-1685736383398-7f82cea3e919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBtaW5hcmV0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTY5NjU3OXww&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "10+ መስጂዶች"
        },
        {
          icon: Laptop,
          title: "የቴክኖሎጂ ትምህርት",
          description: "ወጣቶችን በዲጂታል ክህሎቶች እና በቴክኖሎጂ ስልጠና ማብቃት",
          image: "https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "150+ ሰልጥነዋል"
        }
      ],
      learnMore: "ተጨማሪ እወቁ"
    },
    om: {
      title: "Dameewwan Dhiibbaa Keenyaa",
      subtitle: "Hawaasa kana karoora adda addaatiin tajaajiluu",
      sectors: [
        {
          icon: BookOpen,
          title: "Barnoota",
          description: "Dargaggootaa Itoophiyaatiif barnoota Islaamaa fi addunyaa qulqullina qabu kennuu",
          image: "https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "200+ Barattootaa"
        },
        {
          icon: Droplet,
          title: "Gargaarsa Bishaanii",
          description: "Boolla bishaanii ijaaruu fi hawaasa baadiyyaa bishaan qulqulluu argamsiisuu",
          image: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "25+ Boolla"
        },
        {
          icon: Building2,
          title: "Masaajida",
          description: "Itoophiyaa guutuutti ijaarsa fi suphaa masaajida deeggaruu",
          image: "https://images.unsplash.com/photo-1685736383398-7f82cea3e919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBtaW5hcmV0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTY5NjU3OXww&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "10+ Masaajida"
        },
        {
          icon: Laptop,
          title: "Barnoota Teekinooloojii",
          description: "Dargaggootaa ogummaa dijitaalaa fi leenjii teekinooloojiitin humneessuu",
          image: "https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "150+ Leenji'an"
        }
      ],
      learnMore: "Dabalataan Baraa"
    },
    ar: {
      title: "قطاعات تأثيرنا",
      subtitle: "خدمة المجتمع من خلال مبادرات متنوعة",
      sectors: [
        {
          icon: BookOpen,
          title: "التعليم",
          description: "توفير تعليم إسلامي وعلماني عالي الجودة للشباب الإثيوبي",
          image: "https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "200+ طالب"
        },
        {
          icon: Droplet,
          title: "مساعدات المياه",
          description: "بناء الآبار وتوفير الوصول إلى المياه النظيفة للمجتمعات الريفية",
          image: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "25+ بئر"
        },
        {
          icon: Building2,
          title: "المساجد",
          description: "دعم بناء وصيانة المساجد في جميع أنحاء إثيوبيا",
          image: "https://images.unsplash.com/photo-1685736383398-7f82cea3e919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBtaW5hcmV0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTY5NjU3OXww&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "10+ مساجد"
        },
        {
          icon: Laptop,
          title: "التعليم التقني",
          description: "تمكين الشباب بمهارات رقمية وتدريب تقني",
          image: "https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          stats: "150+ متدرب"
        }
      ],
      learnMore: "اعرف المزيد"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#004d40] mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#004d40] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004d40]/90 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-[#ffd700] rounded-full">
                    <span className="text-sm font-bold text-gray-900">{sector.stats}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#004d40] mb-3">{sector.title}</h3>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  
                  <button className="flex items-center gap-2 text-[#004d40] font-semibold group-hover:gap-3 transition-all">
                    {t.learnMore}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
