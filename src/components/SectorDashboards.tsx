import { useState } from 'react';
import { BookOpen, Heart, Users, X, Save, Calendar, MapPin, Phone, Mail, User, Hash } from 'lucide-react';

interface SectorDashboardsProps {
  language: string;
}

interface RegistrationData {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  address: string;
  sector: 'qirat' | 'charity' | 'dawa';
  // Qirat specific
  juzProgress?: string;
  memorizedSuras?: string;
  previousExperience?: string;
  // Charity specific
  donationType?: string;
  donationAmount?: string;
  beneficiaryInfo?: string;
  // Dawa specific
  volunteerType?: string;
  availability?: string;
  skills?: string;
}

export function SectorDashboards({ language }: SectorDashboardsProps) {
  const [activeSector, setActiveSector] = useState<'qirat' | 'charity' | 'dawa' | null>(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    address: '',
    sector: 'qirat'
  });

  const sectors = {
    qirat: {
      icon: BookOpen,
      color: 'from-green-500 to-green-700',
      amir: {
        name: 'Mohammed Ahmadu',
        phone: '+251929230120',
        email: 'mohammed@humsjea.org'
      },
      content: {
        en: {
          title: 'Qirat Sector',
          subtitle: 'Islamic Education & Quran Memorization',
          description: 'The Qirat Sector is dedicated to preserving and propagating the sacred knowledge of the Holy Quran. We provide comprehensive Hifz (memorization) programs, Tajweed training, and Islamic studies for students of all ages. Our mission is to nurture a generation of Huffaz (Quran memorizers) who embody both knowledge and character.',
          goals: [
            'Train qualified Quran teachers and reciters',
            'Establish structured Hifz programs across Ethiopia',
            'Provide Tajweed and recitation excellence',
            'Create a supportive learning community',
            'Organize Quran competitions and events'
          ],
          activities: [
            'Daily Hifz classes and revision sessions',
            'Weekly Tajweed workshops',
            'Monthly progress assessments',
            'Annual Quran recitation competitions',
            'Teacher training programs'
          ],
          register: 'Register for Qirat Program',
          dashboard: 'Qirat Dashboard'
        },
        am: {
          title: 'የቅራት ሴክተር',
          subtitle: 'እስላማዊ ትምህርት እና የቁርአን ማስታወሻ',
          description: 'የቅራት ሴክተር የቅዱስ ቁርአንን ቅዱስ እውቀት ለመጠበቅ እና ለማሰራጨት የተቀደሰ ነው።',
          goals: ['የተመረቁ የቁርአን መምህራን ማሰልጠን', 'የሂፍዝ ፕሮግራሞችን ማቋቋም', 'የታጀዊድ ብቃትን መስጠት', 'የትምህርት ማህበረሰብ መፍጠር', 'የቁርአን ውድድሮችን ማዘጋጀት'],
          activities: ['የዕለት ሂፍዝ ክፍሎች', 'ሳምንታዊ የታጀዊድ ወርክሾፖች', 'ወርሃዊ ግምገማዎች', 'ዓመታዊ ውድድሮች', 'የመምህራን ስልጠና'],
          register: 'ለቅራት ፕሮግራም ይመዝገቡ',
          dashboard: 'የቅራት ዳሽቦርድ'
        }
      }
    },
    charity: {
      icon: Heart,
      color: 'from-rose-500 to-rose-700',
      amir: {
        name: 'Muhajir Mohammed',
        phone: '+251964544620',
        email: 'muhajir@humsjea.org'
      },
      content: {
        en: {
          title: 'Charity Sector',
          subtitle: 'Humanitarian Aid & Development',
          description: 'The Charity Sector embodies the Islamic principle of compassion and social responsibility. We manage comprehensive charitable programs including food distribution, clean water projects, educational support, medical assistance, and emergency relief. Our commitment is to serve those in need with dignity and efficiency.',
          goals: [
            'Provide sustainable humanitarian aid',
            'Implement clean water and sanitation projects',
            'Support education for underprivileged children',
            'Deliver emergency relief during crises',
            'Maintain 100% transparency in all operations'
          ],
          activities: [
            'Monthly food distribution programs',
            'Water well construction and maintenance',
            'Educational scholarship programs',
            'Medical camps and health services',
            'Seasonal Zakat and Sadaqah distribution',
            'Emergency disaster relief'
          ],
          register: 'Register for Charity Programs',
          dashboard: 'Charity Dashboard'
        },
        am: {
          title: 'የበጎ አድራጎት ሴክተር',
          subtitle: 'ሰብአዊ እርዳታ እና ልማት',
          description: 'የበጎ አድራጎት ሴክተር የእስላማዊ ርህራሄ እና ማህበራዊ ኃላፊነት መርህን ያሳያል።',
          goals: ['ዘላቂ ሰብአዊ እርዳታ መስጠት', 'የውሃ ፕሮጀክቶችን መተግበር', 'የትምህርት ድጋፍ', 'የድንገተኛ እርዳታ', 'ግልጽነትን መጠበቅ'],
          activities: ['ወርሃዊ የምግብ ስርጭት', 'የውሃ ጉድጓዶች', 'የትምህርት እርዳታ', 'የህክምና አገልግሎቶች', 'የዘካት ስርጭት', 'የአደጋ እርዳታ'],
          register: 'ለበጎ አድራጎት ይመዝገቡ',
          dashboard: 'የበጎ አድራጎት ዳሽቦርድ'
        }
      }
    },
    dawa: {
      icon: Users,
      color: 'from-amber-500 to-amber-700',
      amir: {
        name: 'Ramadan Aliyii',
        phone: '+251975309779',
        email: 'ramadan@humsjea.org'
      },
      content: {
        en: {
          title: 'Dawa Sector',
          subtitle: 'Islamic Outreach & Community Engagement',
          description: 'The Dawa Sector is committed to spreading the message of Islam with wisdom and beautiful preaching. We engage in community outreach, organize Islamic lectures and seminars, coordinate interfaith dialogues, and support new Muslims. Our approach emphasizes knowledge, compassion, and building bridges within and beyond the Muslim community.',
          goals: [
            'Spread authentic Islamic knowledge',
            'Engage youth in Islamic activities',
            'Support new Muslims (reverts)',
            'Organize educational seminars and lectures',
            'Foster interfaith understanding and cooperation'
          ],
          activities: [
            'Weekly Islamic lectures and study circles',
            'Youth engagement programs',
            'New Muslim support and education',
            'Community Iftar and social events',
            'Interfaith dialogue sessions',
            'Islamic awareness campaigns'
          ],
          register: 'Join Dawa Programs',
          dashboard: 'Dawa Dashboard'
        },
        am: {
          title: 'የዳዋ ሴክተር',
          subtitle: 'እስላማዊ ተደራሽነት እና የማህበረሰብ ተሳትፎ',
          description: 'የዳዋ ሴክተር የእስልምናን መልእክት በጥበብ እና በውብ ስብከት ለማሰራጨት ቁርጠኛ ነው።',
          goals: ['ትክክለኛ እስላማዊ እውቀትን ማሰራጨት', 'ወጣቶችን ማሳተፍ', 'አዳዲስ ሙስሊሞችን መደገፍ', 'ሴሚናሮችን ማዘጋጀት', 'የሃይማኖት መግባባትን ማጎልበት'],
          activities: ['ሳምንታዊ ትምህርቶች', 'የወጣቶች ፕሮግራሞች', 'የአዳዲስ ሙስሊሞች ድጋፍ', 'የማህበረሰብ እፍጠር', 'የሃይማኖት ውይይቶች', 'የግንዛቤ ማስጨበጫ'],
          register: 'ለዳዋ ይመዝገቡ',
          dashboard: 'የዳዋ ዳሽቦርድ'
        }
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert(`Registration submitted for ${formData.sector} sector!`);
    setShowRegistration(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      age: '',
      address: '',
      sector: 'qirat'
    });
  };

  const openRegistration = (sector: 'qirat' | 'charity' | 'dawa') => {
    setFormData({ ...formData, sector });
    setShowRegistration(true);
  };

  return (
    <section id="sectors" className="py-20 bg-gradient-to-br from-gray-50 to-white islamic-pattern-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">Our Sectors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our three core sectors and register to participate in our programs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004d40] to-[#ffd700] mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(sectors).map(([key, sector]) => {
            const Icon = sector.icon;
            const content = sector.content[language as keyof typeof sector.content] || sector.content.en;
            
            return (
              <div key={key} className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-[#004d40] mb-2">{content.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{content.subtitle}</p>

                {/* Amir Info */}
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Sector Amir</p>
                  <p className="font-bold text-gray-900">{sector.amir.name}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <Phone size={14} />
                    <span>{sector.amir.phone}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">{content.description}</p>

                {/* Goals */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Key Goals:</h4>
                  <ul className="space-y-2">
                    {content.goals.slice(0, 3).map((goal, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-[#ffd700] mt-1">●</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => openRegistration(key as 'qirat' | 'charity' | 'dawa')}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${sector.color} text-white rounded-lg hover:shadow-lg transition-all font-semibold`}
                  >
                    {content.register}
                  </button>
                  <button
                    onClick={() => setActiveSector(key as 'qirat' | 'charity' | 'dawa')}
                    className="w-full px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:border-[#004d40] hover:text-[#004d40] transition-all font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Registration Modal */}
        {showRegistration && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full my-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#0097A7]">
                  Register for {formData.sector.charAt(0).toUpperCase() + formData.sector.slice(1)} Sector
                </h3>
                <button
                  onClick={() => setShowRegistration(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Common Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                      placeholder="+251..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                      placeholder="Enter age"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                    placeholder="City, District"
                  />
                </div>

                {/* Sector Specific Fields */}
                {formData.sector === 'qirat' && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Juz Progress
                      </label>
                      <select
                        value={formData.juzProgress || ''}
                        onChange={(e) => setFormData({ ...formData, juzProgress: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                      >
                        <option value="">Select...</option>
                        {Array.from({ length: 30 }, (_, i) => (
                          <option key={i} value={i + 1}>Juz {i + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Previous Quran Experience
                      </label>
                      <textarea
                        value={formData.previousExperience || ''}
                        onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-24"
                        placeholder="Describe your Quran learning experience..."
                      />
                    </div>
                  </>
                )}

                {formData.sector === 'charity' && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        I am registering as:
                      </label>
                      <select
                        value={formData.donationType || ''}
                        onChange={(e) => setFormData({ ...formData, donationType: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                      >
                        <option value="">Select...</option>
                        <option value="donor">Donor</option>
                        <option value="beneficiary">Beneficiary</option>
                        <option value="volunteer">Volunteer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        value={formData.beneficiaryInfo || ''}
                        onChange={(e) => setFormData({ ...formData, beneficiaryInfo: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-24"
                        placeholder="Tell us more about your situation or how you'd like to help..."
                      />
                    </div>
                  </>
                )}

                {formData.sector === 'dawa' && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Volunteer Type
                      </label>
                      <select
                        value={formData.volunteerType || ''}
                        onChange={(e) => setFormData({ ...formData, volunteerType: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                      >
                        <option value="">Select...</option>
                        <option value="speaker">Speaker/Lecturer</option>
                        <option value="organizer">Event Organizer</option>
                        <option value="social-media">Social Media</option>
                        <option value="general">General Volunteer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Skills & Availability
                      </label>
                      <textarea
                        value={formData.skills || ''}
                        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-24"
                        placeholder="Describe your skills and when you're available..."
                      />
                    </div>
                  </>
                )}

                <div className="flex gap-3 mt-6">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#0097A7] text-white rounded-lg hover:bg-[#00ACC1] transition-colors font-semibold"
                  >
                    <Save size={20} />
                    Submit Registration
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRegistration(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Sector Details Modal */}
        {activeSector && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full my-8 border border-gray-200 relative z-[10000]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  {(() => {
                    const Icon = sectors[activeSector].icon;
                    return (
                      <div className={`w-14 h-14 bg-gradient-to-br ${sectors[activeSector].color} rounded-2xl flex items-center justify-center`}>
                        <Icon className="text-white" size={28} />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="text-3xl font-bold text-[#0097A7]">
                      {(sectors[activeSector].content[language as keyof typeof sectors[typeof activeSector]['content']] || sectors[activeSector].content.en).title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {(sectors[activeSector].content[language as keyof typeof sectors[typeof activeSector]['content']] || sectors[activeSector].content.en).subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveSector(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {(() => {
                const content = sectors[activeSector].content[language as keyof typeof sectors[typeof activeSector]['content']] || sectors[activeSector].content.en;
                
                return (
                  <div className="space-y-6">
                    {/* Description */}
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-3">About This Sector</h4>
                      <p className="text-gray-700 leading-relaxed">{content.description}</p>
                    </div>

                    {/* Amir Information */}
                    <div className={`bg-gradient-to-r ${sectors[activeSector].color} rounded-xl p-6 text-white`}>
                      <h4 className="font-bold mb-3">Sector Leadership</h4>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <User size={32} />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{sectors[activeSector].amir.name}</p>
                          <p className="text-sm opacity-90">Sector Amir</p>
                          <div className="flex items-center gap-4 mt-2">
                            <a href={`tel:${sectors[activeSector].amir.phone}`} className="flex items-center gap-2 text-sm hover:underline">
                              <Phone size={14} />
                              <span>{sectors[activeSector].amir.phone}</span>
                            </a>
                            <a href={`mailto:${sectors[activeSector].amir.email}`} className="flex items-center gap-2 text-sm hover:underline">
                              <Mail size={14} />
                              <span>{sectors[activeSector].amir.email}</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Goals and Activities Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Goals */}
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm">🎯</span>
                          Our Goals
                        </h4>
                        <ul className="space-y-3">
                          {content.goals.map((goal, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">✓</span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Activities */}
                      <div className="bg-green-50 rounded-xl p-6">
                        <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white text-sm">📋</span>
                          Activities
                        </h4>
                        <ul className="space-y-3">
                          {content.activities.map((activity, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-green-500 mt-1">●</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setActiveSector(null);
                          openRegistration(activeSector);
                        }}
                        className={`flex-1 px-6 py-4 bg-gradient-to-r ${sectors[activeSector].color} text-white rounded-lg hover:shadow-lg transition-all font-bold`}
                      >
                        {content.register}
                      </button>
                      <button
                        onClick={() => setActiveSector(null)}
                        className="px-6 py-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}