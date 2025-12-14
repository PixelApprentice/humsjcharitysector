import { Clock, ArrowRight, Languages } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  titleAm: string;
  excerpt: string;
  excerptAm: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

interface BlogSectionProps {
  language: string;
  posts: BlogPost[];
}

export function BlogSection({ language, posts }: BlogSectionProps) {
  const [readInAmharic, setReadInAmharic] = useState<{ [key: number]: boolean }>({});

  const content = {
    en: {
      title: "Latest from Humsj Official",
      subtitle: "Stay updated with our community news and stories",
      readMore: "Read More",
      categories: {
        charity: "Charity",
        tech: "Tech",
        education: "Education",
        community: "Community"
      }
    },
    am: {
      title: "ከሁምስጅ ኦፊሴላል የቅርብ ጊዜ",
      subtitle: "የማህበረሰብ ዜናዎቻችንን እና ታሪኮቻችንን እንከታተሉ",
      readMore: "ተጨማሪ አንብብ",
      categories: {
        charity: "በጎ አድራጎት",
        tech: "ቴክኖሎጂ",
        education: "ትምህርት",
        community: "ማህበረሰብ"
      }
    },
    om: {
      title: "Kan Humsj Ofiishaala Dhiyeenya",
      subtitle: "Oduu fi seenaa hawaasa keenyaa hordofaa",
      readMore: "Dabalataan Dubbisaa",
      categories: {
        charity: "Araaraa",
        tech: "Teekinooloojii",
        education: "Barnoota",
        community: "Hawaasa"
      }
    },
    ar: {
      title: "أحدث من Humsj الرسمي",
      subtitle: "ابق على اطلاع بأخبار وقصص مجتمعنا",
      readMore: "اقرأ المزيد",
      categories: {
        charity: "خيرية",
        tech: "تقنية",
        education: "تعليم",
        community: "مجتمع"
      }
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  const toggleLanguage = (postId: number) => {
    setReadInAmharic(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-[#faf8f5] to-white islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#004d40] mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4">
          <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-3 lg:min-w-0">
            {posts.map((post) => {
              const showAmharic = readInAmharic[post.id];
              return (
                <div
                  key={post.id}
                  className="w-80 lg:w-auto bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#004d40] rounded-full">
                      <span className="text-sm text-white">
                        {t.categories[post.category.toLowerCase() as keyof typeof t.categories] || post.category}
                      </span>
                    </div>

                    {/* Language Toggle */}
                    <button
                      onClick={() => toggleLanguage(post.id)}
                      className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      title="Toggle Language"
                    >
                      <Languages size={18} className="text-[#004d40]" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-[#004d40] mb-3 line-clamp-2">
                      {showAmharic ? post.titleAm : post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {showAmharic ? post.excerptAm : post.excerpt}
                    </p>

                    <button className="flex items-center gap-2 text-[#004d40] font-semibold hover:gap-3 transition-all">
                      {t.readMore}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
