import { Shield, TrendingUp, Users, Quote, Heart, Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

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
      paymentTitle: "Payment Methods",
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
      paymentTitle: "የክፈት የመክፈል ደረጃዎች",
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
      paymentTitle: "Fudhannada",
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
      paymentTitle: "طرق الدفع",
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
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#004d40] mb-6">{t.paymentTitle}</h3>
              
              {/* CBE Account */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#004d40] to-[#00695c] rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm opacity-90">Commercial Bank of Ethiopia</span>
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-[#004d40] font-bold text-xs">CBE</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold tracking-wider mb-2">1000614307599</div>
                  <div className="text-sm opacity-90">Account Number</div>
                </div>

                {/* E-Birr */}
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm opacity-90">E-Birr Payment</span>
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-amber-600 font-bold text-xs">EB</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold tracking-wider mb-2">0985736451</div>
                  <div className="text-sm opacity-90">Phone Number</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Important:</strong> After making your donation, please send a screenshot of the transaction receipt to Muhajir Mohammed (Charity Sector Amir) at <strong>+251964544620</strong> via phone or Telegram for confirmation and receipt.
                </p>
              </div>
            </div>

            {/* Contact Info for Donations */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#004d40] mb-6">Donation Confirmation</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-4">
                    After making your donation, send the transaction screenshot to:
                  </p>
                  
                  <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6 border border-rose-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full flex items-center justify-center">
                        <Heart className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Muhajir Mohammed</p>
                        <p className="text-sm text-gray-600">Charity Sector Amir</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <a href="tel:+251964544620" className="flex items-center gap-2 text-gray-700 hover:text-rose-700 transition-colors">
                        <Phone size={20} />
                        <span className="text-xl font-bold">+251964544620</span>
                      </a>
                      <div className="flex items-center gap-2 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                        </svg>
                        <span className="font-semibold">@MuhajirMohammed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="16" x2="12" y2="12"/>
                      <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                    Website Status Notice
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>humsj.org</strong> is currently under maintenance. For inquiries and updates, please:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Join our Telegram channel: <a href="https://t.me/humsj_charity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">@humsj_charity</a></li>
                    <li>• Contact sector Amirs directly via phone</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h4 className="font-bold text-gray-900 mb-3">Why Your Donation Matters</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>100% transparency - every birr is tracked and reported</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Direct impact on Ethiopian communities in need</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Regular updates on project progress via Telegram</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Barakah in helping the Ummah grow stronger</span>
                    </li>
                  </ul>
                </div>
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