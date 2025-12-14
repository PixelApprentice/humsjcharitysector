import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImpactGrid } from './components/ImpactGrid';
import { BlogSection } from './components/BlogSection';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';
import { Lock } from 'lucide-react';

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

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "New Water Well Project Launched in Haramaya",
      titleAm: "በሐረማያ አዲስ የውሃ ጉድጓድ ፕሮጀክት ተጀመረ",
      excerpt: "We're excited to announce the launch of our latest water well project, bringing clean water to over 200 families in rural Haramaya.",
      excerptAm: "ለ200 በላይ ቤተሰቦች ንጹህ ውሃ የሚያመጣ የቅርብ ጊዜ የውሃ ጉድጓድ ፕሮጀክታችንን ማስጀመራችንን በደስታ እናሳውቃለን።",
      category: "Charity",
      image: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Jan 15, 2025",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Tech Training Program Empowers 50+ Youth",
      titleAm: "የቴክኖሎጂ ስልጠና ፕሮግራም ከ50 በላይ ወጣቶችን አብቃል",
      excerpt: "Our technology education initiative has successfully trained over 50 young people in digital skills, opening doors to new opportunities.",
      excerptAm: "የቴክኖሎጂ ትምህርት ተነሳሽነታችን ከ50 በላይ ወጣቶችን በዲጂታል ክህሎቶች በተሳካ ሁኔታ በማሰልጠን ለአዳዲስ እድሎች በር ከፍቷል።",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Jan 10, 2025",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Community Iftar Brings Together 500+ Families",
      titleAm: "የማህበረሰብ እፍጠር ከ500 በላይ ቤተሰቦችን አሰባስቧል",
      excerpt: "Our annual community Iftar event was a tremendous success, fostering unity and compassion among the Ummah.",
      excerptAm: "ዓመታዊ የማህበረሰብ እፍጠር ዝግጅታችን በኡማህ መካከል አንድነትን እና ርህራሄን በማጎልበት ከፍተኛ ስኬት ነበር።",
      category: "Community",
      image: "https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Jan 5, 2025",
      readTime: "3 min read"
    }
  ]);

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const handleAddPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost = {
      ...post,
      id: Math.max(...blogPosts.map(p => p.id), 0) + 1
    };
    setBlogPosts([newPost, ...blogPosts]);
  };

  const handleEditPost = (id: number, updatedPost: Omit<BlogPost, 'id'>) => {
    setBlogPosts(blogPosts.map(post => 
      post.id === id ? { ...updatedPost, id } : post
    ));
  };

  const handleDeletePost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  const handleAdminLogin = () => {
    // Simple password check - in production, this should be done server-side
    if (adminPassword === 'humsj2025') {
      setIsAuthenticated(true);
      setShowAdminLogin(false);
      setShowAdminPanel(true);
      setAdminPassword('');
    } else {
      alert('Incorrect password!');
      setAdminPassword('');
    }
  };

  const handleAdminAccess = () => {
    if (!isAuthenticated) {
      setShowAdminLogin(true);
    } else {
      setShowAdminPanel(true);
    }
  };

  return (
    <div className="min-h-screen islamic-pattern">
      {/* Admin Access Button */}
      <button
        onClick={handleAdminAccess}
        className="fixed bottom-6 right-6 z-40 p-4 bg-[#004d40] text-white rounded-full shadow-lg hover:bg-[#00695c] transition-all hover:scale-110"
        title="Admin Panel"
        style={{ opacity: 0.3 }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}
      >
        <Lock size={24} />
      </button>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#004d40] mb-6">Admin Login</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleAdminLogin}
                  className="flex-1 px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-semibold"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setShowAdminLogin(false);
                    setAdminPassword('');
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                Hint: Password is humsj2025
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Admin Panel */}
      {showAdminPanel && (
        <AdminPanel
          posts={blogPosts}
          onAddPost={handleAddPost}
          onEditPost={handleEditPost}
          onDeletePost={handleDeletePost}
          onClose={() => setShowAdminPanel(false)}
        />
      )}

      {/* Main Content */}
      <Navbar 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange} 
      />
      
      <main>
        <HeroSection language={currentLanguage} />
        
        <ImpactGrid language={currentLanguage} />
        
        <BlogSection language={currentLanguage} posts={blogPosts} />
        
        <TrustSection language={currentLanguage} />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white islamic-pattern-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[#004d40] mb-6">
                {currentLanguage === 'en' && 'About Humsj Charity'}
                {currentLanguage === 'am' && 'ስለ ሁምስጅ በጎ አድራጎት'}
                {currentLanguage === 'om' && 'Waa\'ee Humsj Charity'}
                {currentLanguage === 'ar' && 'عن Humsj Charity'}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {currentLanguage === 'en' && 'Humsj Charity is a subsector of the Haramaya Muslim Student Jema\'a, dedicated to leveraging technology for the betterment of the Ethiopian Ummah. We combine modern innovation with Islamic values to create sustainable impact in education, humanitarian aid, and community development.'}
                {currentLanguage === 'am' && 'የሁምስጅ በጎ አድራጎት የሐረማያ የሙስሊም ተማሪዎች ጀማዓ ንዑስ ዘርፍ ሲሆን ቴክኖሎጂን ለኢትዮጵያ ኡማህ መሻሻል ለማዋል ቁርጠኛ ነው። ዘላቂ ተጽእኖ ለመፍጠር ዘመናዊ ፈጠራን ከእስላማዊ እሴቶች ጋር እናጣምራለን።'}
                {currentLanguage === 'om' && 'Humsj Charity damee xiqqaa Haramaya Muslim Student Jema\'a ti, teekinooloojii fayyadamuudhaan Ummaata Itoophiyaa fooyessuu irratti xiyyeeffateera. Dhiibbaa itti fufiinsa qabu uumuuf kalaqaa ammayyaa gatiiwwan Islaamaa waliin walitti fiduun hojjenna.'}
                {currentLanguage === 'ar' && 'Humsj Charity هي قطاع فرعي من جمعة طلاب هرر المسلمين، مكرسة للاستفادة من التكنولوجيا لتحسين الأمة الإثيوبية. نجمع بين الابتكار الحديث والقيم الإسلامية لخلق تأثير مستدام في التعليم والمساعدات الإنسانية وتنمية المجتمع.'}
              </p>
              <div className="inline-block px-6 py-3 bg-[#004d40]/10 rounded-lg">
                <p className="text-[#004d40]">
                  <span className="font-semibold">Telegram:</span>{' '}
                  <a 
                    href="https://t.me/humsj_charity" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#00695c] underline"
                  >
                    @humsj_charity
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-20 bg-gradient-to-br from-[#004d40] to-[#00332a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6">
              {currentLanguage === 'en' && 'Join Our Mission'}
              {currentLanguage === 'am' && 'ተልእኳችንን ይቀላቀሉ'}
              {currentLanguage === 'om' && 'Ergama Keenyaatti Makamaa'}
              {currentLanguage === 'ar' && 'انضم إلى مهمتنا'}
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {currentLanguage === 'en' && 'Be part of the change. Volunteer with Humsj and make a real difference in your community.'}
              {currentLanguage === 'am' && 'የለውጡ አካል ይሁኑ። ከሁምስጅ ጋር በጎ ፈቃደኛ ይሁኑ እና በማህበረሰብዎ ላይ እውነተኛ ለውጥ ያድርጉ።'}
              {currentLanguage === 'om' && 'Jijjiirama keessa qooda fuudhaa. Humsj waliin arjooma ta\'aatii hawaasa keessan keessatti jijjiirama dhugaa fiduun.'}
              {currentLanguage === 'ar' && 'كن جزءًا من التغيير. تطوع مع Humsj وأحدث فرقًا حقيقيًا في مجتمعك.'}
            </p>
            <button className="px-8 py-4 bg-[#ffd700] text-gray-900 rounded-full font-semibold hover:bg-[#daa520] transition-all hover:scale-105">
              {currentLanguage === 'en' && 'Become a Volunteer'}
              {currentLanguage === 'am' && 'በጎ ፈቃደኛ ይሁኑ'}
              {currentLanguage === 'om' && 'Arjooma Ta\'aa'}
              {currentLanguage === 'ar' && 'كن متطوعاً'}
            </button>
          </div>
        </section>
      </main>

      <Footer language={currentLanguage} />
    </div>
  );
}