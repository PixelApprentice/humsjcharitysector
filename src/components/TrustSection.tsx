import { Shield, TrendingUp, Users, Quote } from 'lucide-react';

interface TrustSectionProps {
  language: string;
}

export function TrustSection({ language }: TrustSectionProps) {
  const content = {
    en: {
      title: "Trust & Transparency",
      subtitle: "Every donation is tracked and reported with complete transparency",
      donationTracker: "Monthly Donation Goal",
      raised: "Raised",
      goal: "Goal",
      paymentMethods: "We Accept",
      testimonialsTitle: "Community Voices",
      testimonials: [
        {
          name: "Ahmed Hassan",
          nameAm: "አህመድ ሀሰን",
          role: "Community Elder",
          quote: "Humsj has transformed our community. Their transparency and dedication to serving the Ummah is unmatched.",
          quoteAm: "ሁምስጅ ማህበረሰባችንን ቀይሯል። ግልጽነታቸው እና ኡማህን ለማገልገል ያላቸው ቁርጠኝነት ተወዳዳሪ የሌለው ነው።"
        },
        {
          name: "Fatima Mohammed",
          nameAm: "ፋጢማ መሀመድ",
          role: "Volunteer",
          quote: "Being part of Humsj's mission has been a blessing. We're making real impact in people's lives.",
          quoteAm: "የሁምስጅ ተልእኮ አካል መሆን በረከት ነበር። በሰዎች ህይወት ላይ እውነተኛ ተጽእኖ እያደረግን ነው።"
        },
        {
          name: "Ibrahim Yusuf",
          nameAm: "ኢብራሂም ዩሱፍ",
          role: "Beneficiary",
          quote: "The water well project brought clean water to our village. May Allah bless Humsj's work.",
          quoteAm: "የውሃ ጉድጓድ ፕሮጀክቱ ለመንደራችን ንጹህ ውሃ አመጣ። አላህ የሁምስጅን ስራ ይባርክ።"
        }
      ]
    },
    am: {
      title: "እምነት እና ግልጽነት",
      subtitle: "እያንዳንዱ ልገሳ በሙሉ ግልጽነት ይከታተላል እና ይዘገባል",
      donationTracker: "ወርሃዊ የልገሳ ግብ",
      raised: "ተሰብስቧል",
      goal: "ግብ",
      paymentMethods: "እንቀበላለን",
      testimonialsTitle: "የማህበረሰብ ድምጾች",
      testimonials: [
        {
          name: "Ahmed Hassan",
          nameAm: "አህመድ ሀሰን",
          role: "የማህበረሰብ ሽማግሌ",
          quote: "Humsj has transformed our community. Their transparency and dedication to serving the Ummah is unmatched.",
          quoteAm: "ሁምስጅ ማህበረሰባችንን ቀይሯል። ግልጽነታቸው እና ኡማህን ለማገልገል ያላቸው ቁርጠኝነት ተወዳዳሪ የሌለው ነው።"
        },
        {
          name: "Fatima Mohammed",
          nameAm: "ፋጢማ መሀመድ",
          role: "በጎ ፈቃደኛ",
          quote: "Being part of Humsj's mission has been a blessing. We're making real impact in people's lives.",
          quoteAm: "የሁምስጅ ተልእኮ አካል መሆን በረከት ነበር። በሰዎች ህይወት ላይ እውነተኛ ተጽእኖ እያደረግን ነው።"
        },
        {
          name: "Ibrahim Yusuf",
          nameAm: "ኢብራሂም ዩሱፍ",
          role: "ተጠቃሚ",
          quote: "The water well project brought clean water to our village. May Allah bless Humsj's work.",
          quoteAm: "የውሃ ጉድጓድ ፕሮጀክቱ ለመንደራችን ንጹህ ውሃ አመጣ። አላህ የሁምስጅን ስራ ይባርክ።"
        }
      ]
    },
    om: {
      title: "Amanamummaa fi Ifa Ta'uu",
      subtitle: "Arjoomi hundi ifaa ta'een hordofamee gabaafama",
      donationTracker: "Galma Arjoomii Ji'aa",
      raised: "Walitti Qabame",
      goal: "Galma",
      paymentMethods: "Ni Fudhanna",
      testimonialsTitle: "Sagalee Hawaasaa",
      testimonials: [
        {
          name: "Ahmed Hassan",
          nameAm: "አህመድ ሀሰን",
          role: "Jaarsa Hawaasaa",
          quote: "Humsj has transformed our community. Their transparency and dedication to serving the Ummah is unmatched.",
          quoteAm: "ሁምስጅ ማህበረሰባችንን ቀይሯል። ግልጽነታቸው እና ኡማህን ለማገልገል ያላቸው ቁርጠኝነት ተወዳዳሪ የሌለው ነው።"
        },
        {
          name: "Fatima Mohammed",
          nameAm: "ፋጢማ መሀመድ",
          role: "Arjooma",
          quote: "Being part of Humsj's mission has been a blessing. We're making real impact in people's lives.",
          quoteAm: "የሁምስጅ ተልእኮ አካል መሆን በረከት ነበር። በሰዎች ህይወት ላይ እውነተኛ ተጽእኖ እያደረግን ነው።"
        },
        {
          name: "Ibrahim Yusuf",
          nameAm: "ኢብራሂም ዩሱፍ",
          role: "Fayyadamaa",
          quote: "The water well project brought clean water to our village. May Allah bless Humsj's work.",
          quoteAm: "የውሃ ጉድጓድ ፕሮጀክቱ ለመንደራችን ንጹህ ውሃ አመጣ። አላህ የሁምስጅን ስራ ይባርክ።"
        }
      ]
    },
    ar: {
      title: "الثقة والشفافية",
      subtitle: "يتم تتبع كل تبرع والإبلاغ عنه بشفافية كاملة",
      donationTracker: "هدف التبرع الشهري",
      raised: "تم جمع",
      goal: "الهدف",
      paymentMethods: "نقبل",
      testimonialsTitle: "أصوات المجتمع",
      testimonials: [
        {
          name: "Ahmed Hassan",
          nameAm: "أحمد حسن",
          role: "شيخ المجتمع",
          quote: "Humsj has transformed our community. Their transparency and dedication to serving the Ummah is unmatched.",
          quoteAm: "لقد غيرت Humsj مجتمعنا. شفافيتهم وتفانيهم في خدمة الأمة لا مثيل لها."
        },
        {
          name: "Fatima Mohammed",
          nameAm: "فاطمة محمد",
          role: "متطوعة",
          quote: "Being part of Humsj's mission has been a blessing. We're making real impact in people's lives.",
          quoteAm: "كان كوني جزءًا من مهمة Humsj نعمة. نحن نحدث تأثيرًا حقيقيًا في حياة الناس."
        },
        {
          name: "Ibrahim Yusuf",
          nameAm: "إبراهيم يوسف",
          role: "مستفيد",
          quote: "The water well project brought clean water to our village. May Allah bless Humsj's work.",
          quoteAm: "جلب مشروع بئر الماء المياه النظيفة لقريتنا. بارك الله في عمل Humsj."
        }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  // Mock donation progress
  const raised = 75000;
  const goal = 100000;
  const percentage = (raised / goal) * 100;

  return (
    <section id="donate" className="py-20 bg-white islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#004d40] mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#004d40] to-[#00695c] rounded-2xl p-8 text-white text-center">
            <Shield size={48} className="mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">100%</div>
            <div>Verified & Transparent</div>
          </div>
          <div className="bg-gradient-to-br from-[#ffd700] to-[#daa520] rounded-2xl p-8 text-gray-900 text-center">
            <TrendingUp size={48} className="mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">500+</div>
            <div>Families Impacted</div>
          </div>
          <div className="bg-gradient-to-br from-[#004d40] to-[#00695c] rounded-2xl p-8 text-white text-center">
            <Users size={48} className="mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">50+</div>
            <div>Active Volunteers</div>
          </div>
        </div>

        {/* Donation Tracker */}
        <div className="glass-card rounded-2xl p-8 mb-16">
          <h3 className="text-[#004d40] mb-6 text-center">{t.donationTracker}</h3>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">{t.raised}: {raised.toLocaleString()} ETB</span>
              <span className="text-gray-600">{t.goal}: {goal.toLocaleString()} ETB</span>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#004d40] to-[#00695c] transition-all duration-500 relative overflow-hidden"
                style={{ width: `${percentage}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-2xl font-bold text-[#004d40]">{percentage.toFixed(0)}%</span>
              <span className="text-gray-600 ml-2">Complete</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-8">
            <h4 className="text-center mb-4 text-gray-700">{t.paymentMethods}</h4>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <div className="px-6 py-3 bg-white rounded-lg border-2 border-[#004d40] font-semibold text-[#004d40]">
                Telebirr
              </div>
              <div className="px-6 py-3 bg-white rounded-lg border-2 border-[#004d40] font-semibold text-[#004d40]">
                CBE Birr
              </div>
              <div className="px-6 py-3 bg-white rounded-lg border-2 border-[#004d40] font-semibold text-[#004d40]">
                PayPal
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-[#004d40] mb-8 text-center">{t.testimonialsTitle}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:border-[#004d40] transition-all hover:shadow-lg"
              >
                <Quote className="text-[#ffd700] mb-4" size={32} />
                <p className="text-gray-700 mb-6 italic">
                  "{language === 'am' ? testimonial.quoteAm : testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#004d40] to-[#00695c] rounded-full flex items-center justify-center text-white">
                    {(language === 'am' ? testimonial.nameAm : testimonial.name).charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#004d40]">
                      {language === 'am' ? testimonial.nameAm : testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}