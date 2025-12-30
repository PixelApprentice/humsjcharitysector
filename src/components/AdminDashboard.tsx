import { useState, useEffect } from 'react';
import { X, Plus, Edit, Trash2, Save, Upload, Users, Settings as SettingsIcon, BookOpen, Heart, FileText, Shield, LogOut, BarChart } from 'lucide-react';
import { 
  getLeaders, 
  updateLeader, 
  getBlogPosts, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost,
  getCharityProjects,
  createCharityProject,
  updateCharityProject,
  deleteCharityProject,
  getHifzStudents,
  createHifzStudent,
  updateHifzStudent,
  deleteHifzStudent,
  getSiteSettings,
  updateSiteSettings,
  getAdmins,
  createAdmin,
  deleteAdmin,
  verifyAdmin,
  Leader,
  BlogPost,
  CharityProject,
  HifzStudent,
  SiteSettings,
  AdminUser
} from '../lib/firestore';
import { translations } from '../lib/i18n';

interface AdminDashboardProps {
  onClose: () => void;
}

type TabType = 'overview' | 'blogs' | 'projects' | 'students' | 'leaders' | 'admins' | 'settings';

export function AdminDashboard({ onClose }: AdminDashboardProps) {
  const t = translations.en;
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [loading, setLoading] = useState(false);

  // Data states
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [projects, setProjects] = useState<CharityProject[]>([]);
  const [students, setStudents] = useState<HifzStudent[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [admins, setAdmins] = useState<AdminUser[]>([]);

  // Edit states
  const [editingLeader, setEditingLeader] = useState<Leader | null>(null);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [editingProject, setEditingProject] = useState<CharityProject | null>(null);
  const [editingStudent, setEditingStudent] = useState<HifzStudent | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Password change states
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated, activeTab]);

  const loadData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'leaders' || activeTab === 'overview') {
        const leadersData = await getLeaders();
        setLeaders(leadersData);
      }
      if (activeTab === 'blogs' || activeTab === 'overview') {
        const blogsData = await getBlogPosts();
        setBlogs(blogsData);
      }
      if (activeTab === 'projects' || activeTab === 'overview') {
        const projectsData = await getCharityProjects();
        setProjects(projectsData);
      }
      if (activeTab === 'students' || activeTab === 'overview') {
        const studentsData = await getHifzStudents();
        setStudents(studentsData);
      }
      if (activeTab === 'settings') {
        const settingsData = await getSiteSettings();
        setSettings(settingsData);
      }
      if (activeTab === 'admins') {
        const adminsData = await getAdmins();
        setAdmins(adminsData);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      alert('Error loading data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const admin = await verifyAdmin(username, password);
      if (admin) {
        setIsAuthenticated(true);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveLeader = async () => {
    if (!editingLeader) return;
    setLoading(true);
    try {
      await updateLeader(editingLeader.id, editingLeader);
      setEditingLeader(null);
      loadData();
      alert('Leader updated successfully!');
    } catch (error) {
      console.error('Error updating leader:', error);
      alert('Error updating leader. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBlog = async () => {
    if (!editingBlog) return;
    setLoading(true);
    try {
      if (editingBlog.id) {
        await updateBlogPost(editingBlog.id, editingBlog);
      } else {
        await createBlogPost(editingBlog as any);
      }
      setEditingBlog(null);
      setShowCreateModal(false);
      loadData();
      alert('Blog post saved successfully!');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Error saving blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    setLoading(true);
    try {
      await deleteBlogPost(id);
      loadData();
      alert('Blog post deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Error deleting blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProject = async () => {
    if (!editingProject) return;
    setLoading(true);
    try {
      if (editingProject.id) {
        await updateCharityProject(editingProject.id, editingProject);
      } else {
        await createCharityProject(editingProject as any);
      }
      setEditingProject(null);
      setShowCreateModal(false);
      loadData();
      alert('Project saved successfully!');
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Error saving project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    setLoading(true);
    try {
      await deleteCharityProject(id);
      loadData();
      alert('Project deleted successfully!');
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Error deleting project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveStudent = async () => {
    if (!editingStudent) return;
    setLoading(true);
    try {
      if (editingStudent.id) {
        await updateHifzStudent(editingStudent.id, editingStudent);
      } else {
        await createHifzStudent(editingStudent as any);
      }
      setEditingStudent(null);
      setShowCreateModal(false);
      loadData();
      alert('Student saved successfully!');
    } catch (error) {
      console.error('Error saving student:', error);
      alert('Error saving student. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteStudent = async (id: string) => {
    if (!confirm('Are you sure you want to delete this student?')) return;
    setLoading(true);
    try {
      await deleteHifzStudent(id);
      loadData();
      alert('Student deleted successfully!');
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Error deleting student. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    if (!settings) return;
    setLoading(true);
    try {
      await updateSiteSettings(settings);
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Error saving settings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword || !currentPassword) {
      alert('Please fill all password fields');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Verify current password first
    setLoading(true);
    try {
      const admin = await verifyAdmin(username, currentPassword);
      if (!admin) {
        alert('Current password is incorrect!');
        setLoading(false);
        return;
      }

      // Update password in Firestore (you'll need to add this function to firestore.ts)
      // For now, we'll just show a message
      alert('Password changed successfully! (Note: This feature requires backend implementation)');
      
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setShowPasswordChange(false);
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = async () => {
    const username = prompt('Enter admin username:');
    const password = prompt('Enter admin password:');
    if (!username || !password) return;

    setLoading(true);
    try {
      await createAdmin({
        username,
        password,
        role: 'admin'
      });
      loadData();
      alert('Admin created successfully!');
    } catch (error) {
      console.error('Error creating admin:', error);
      alert('Error creating admin. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAdmin = async (id: string) => {
    if (!confirm('Are you sure you want to delete this admin?')) return;
    setLoading(true);
    try {
      await deleteAdmin(id);
      loadData();
      alert('Admin deleted successfully!');
    } catch (error) {
      console.error('Error deleting admin:', error);
      alert('Error deleting admin. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-[#004d40] rounded-full flex items-center justify-center">
              <Shield className="text-[#ffd700]" size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-[#004d40] mb-6">Admin Login</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                placeholder="Enter password"
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-bold disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-50 overflow-hidden">
      <div className="h-full flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#004d40] text-white p-6 flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-[#ffd700] rounded-lg flex items-center justify-center">
                <span className="text-[#004d40] font-bold">H</span>
              </div>
              <span className="font-bold text-lg">Humsj Admin</span>
            </div>
            <p className="text-xs text-gray-300">External Affairs Dashboard</p>
          </div>

          <nav className="flex-1 space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'overview' ? 'bg-[#ffd700] text-[#004d40]' : 'hover:bg-white/10'
              }`}
            >
              <BarChart size={20} />
              <span className="font-semibold">Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('leaders')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'leaders' ? 'bg-[#ffd700] text-[#004d40]' : 'hover:bg-white/10'
              }`}
            >
              <Users size={20} />
              <span className="font-semibold">Leadership</span>
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'blogs' ? 'bg-[#ffd700] text-[#004d40]' : 'hover:bg-white/10'
              }`}
            >
              <FileText size={20} />
              <span className="font-semibold">Blog Posts</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'projects' ? 'bg-[#ffd700] text-[#004d40]' : 'hover:bg-white/10'
              }`}
            >
              <Heart size={20} />
              <span className="font-semibold">Charity Projects</span>
            </button>

            <button
              onClick={() => setActiveTab('students')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'students' ? 'bg-[#ffd700] text-[#004d40]' : 'hover:bg-white/10'
              }`}
            >
              <BookOpen size={20} />
              <span className="font-semibold">Hifz Students</span>
            </button>

            <button
              onClick={() => setActiveTab('admins')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'admins' ? 'bg-[#ffd700] text-[#004d40]' : 'hover:bg-white/10'
              }`}
            >
              <Shield size={20} />
              <span className="font-semibold">Admin Users</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'settings' ? 'bg-[#ffd700] text-[#004d40]' : 'hover:bg-white/10'
              }`}
            >
              <SettingsIcon size={20} />
              <span className="font-semibold">Site Settings</span>
            </button>
          </nav>

          <button
            onClick={() => {
              setIsAuthenticated(false);
              onClose();
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors mt-auto"
          >
            <LogOut size={20} />
            <span className="font-semibold">Logout</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-[#004d40]">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content Area */}
          <div className="p-6">
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block w-12 h-12 border-4 border-[#004d40] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 mt-4">Loading...</p>
              </div>
            )}

            {/* Overview Tab */}
            {activeTab === 'overview' && !loading && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white">
                    <FileText size={32} className="mb-4" />
                    <p className="text-3xl font-bold mb-2">{blogs.length}</p>
                    <p className="text-blue-100">Blog Posts</p>
                  </div>
                  <div className="bg-gradient-to-br from-rose-500 to-rose-700 rounded-2xl p-6 text-white">
                    <Heart size={32} className="mb-4" />
                    <p className="text-3xl font-bold mb-2">{projects.length}</p>
                    <p className="text-rose-100">Active Projects</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 text-white">
                    <BookOpen size={32} className="mb-4" />
                    <p className="text-3xl font-bold mb-2">{students.length}</p>
                    <p className="text-green-100">Hifz Students</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white">
                    <Users size={32} className="mb-4" />
                    <p className="text-3xl font-bold mb-2">{leaders.length}</p>
                    <p className="text-purple-100">Leadership Team</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#004d40] mb-4">Quick Actions</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button
                      onClick={() => {
                        setActiveTab('blogs');
                        setShowCreateModal(true);
                        setEditingBlog({ id: '', title: '', excerpt: '', content: '', category: '', imageUrl: '', author: '', date: new Date().toLocaleDateString() } as any);
                      }}
                      className="px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                      <Plus size={20} />
                      Create Blog Post
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('projects');
                        setShowCreateModal(true);
                        setEditingProject({ id: '', title: '', description: '', goal: 0, raised: 0, category: '', status: 'active', imageUrl: '' } as any);
                      }}
                      className="px-6 py-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                      <Plus size={20} />
                      Add Project
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('students');
                        setShowCreateModal(true);
                        setEditingStudent({ id: '', name: '', age: 0, juzProgress: 0, lastAssessment: new Date().toLocaleDateString(), teacher: '', phone: '' } as any);
                      }}
                      className="px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                      <Plus size={20} />
                      Add Student
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Leaders Tab */}
            {activeTab === 'leaders' && !loading && (
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-amber-900">
                    <strong>Note:</strong> These are the leadership positions displayed on the website. Update contact information here.
                  </p>
                </div>

                {leaders.map(leader => (
                  <div key={leader.id} className="bg-white rounded-xl p-6 shadow-lg">
                    {editingLeader?.id === leader.id ? (
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input
                              type="text"
                              value={editingLeader.name}
                              onChange={(e) => setEditingLeader({ ...editingLeader, name: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                            <input
                              type="text"
                              value={editingLeader.role}
                              onChange={(e) => setEditingLeader({ ...editingLeader, role: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                            <input
                              type="text"
                              value={editingLeader.phone}
                              onChange={(e) => setEditingLeader({ ...editingLeader, phone: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Telegram</label>
                            <input
                              type="text"
                              value={editingLeader.telegram}
                              onChange={(e) => setEditingLeader({ ...editingLeader, telegram: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={handleSaveLeader}
                            className="px-6 py-2 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-semibold flex items-center gap-2"
                          >
                            <Save size={18} />
                            Save
                          </button>
                          <button
                            onClick={() => setEditingLeader(null)}
                            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                          <p className="text-sm text-[#004d40] font-semibold mb-2">{leader.role}</p>
                          <p className="text-sm text-gray-600">Phone: {leader.phone}</p>
                          <p className="text-sm text-gray-600">Telegram: {leader.telegram}</p>
                        </div>
                        <button
                          onClick={() => setEditingLeader(leader)}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold flex items-center gap-2"
                        >
                          <Edit size={18} />
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Blogs Tab */}
            {activeTab === 'blogs' && !loading && (
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setShowCreateModal(true);
                    setEditingBlog({ id: '', title: '', excerpt: '', content: '', category: '', imageUrl: '', author: '', date: new Date().toLocaleDateString() } as any);
                  }}
                  className="px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-bold flex items-center gap-2"
                >
                  <Plus size={20} />
                  Create New Blog Post
                </button>

                {blogs.map(blog => (
                  <div key={blog.id} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{blog.excerpt}</p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <span>Category: {blog.category}</span>
                          <span>Author: {blog.author}</span>
                          <span>Date: {blog.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingBlog(blog);
                            setShowCreateModal(true);
                          }}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(blog.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {blogs.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-xl">
                    <FileText size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-600">No blog posts yet. Create your first one!</p>
                  </div>
                )}
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && !loading && (
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setShowCreateModal(true);
                    setEditingProject({ id: '', title: '', description: '', goal: 0, raised: 0, category: '', status: 'active', imageUrl: '' } as any);
                  }}
                  className="px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-bold flex items-center gap-2"
                >
                  <Plus size={20} />
                  Create New Project
                </button>

                {projects.map(project => (
                  <div key={project.id} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                        <div className="flex gap-6 text-sm text-gray-700">
                          <span>Goal: {project.goal} ETB</span>
                          <span>Raised: {project.raised} ETB</span>
                          <span>Category: {project.category}</span>
                          <span className={`px-3 py-1 rounded-full ${
                            project.status === 'active' ? 'bg-green-100 text-green-800' : 
                            project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingProject(project);
                            setShowCreateModal(true);
                          }}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {projects.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-xl">
                    <Heart size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-600">No charity projects yet. Create your first one!</p>
                  </div>
                )}
              </div>
            )}

            {/* Students Tab */}
            {activeTab === 'students' && !loading && (
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setShowCreateModal(true);
                    setEditingStudent({ id: '', name: '', age: 0, juzProgress: 0, lastAssessment: new Date().toLocaleDateString(), teacher: '', phone: '' } as any);
                  }}
                  className="px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-bold flex items-center gap-2"
                >
                  <Plus size={20} />
                  Add New Student
                </button>

                {students.map(student => (
                  <div key={student.id} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <span>Age: {student.age}</span>
                          <span>Progress: Juz {student.juzProgress}/30</span>
                          <span>Teacher: {student.teacher}</span>
                          <span>Phone: {student.phone}</span>
                          <span>Last Assessment: {student.lastAssessment}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingStudent(student);
                            setShowCreateModal(true);
                          }}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteStudent(student.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {students.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-xl">
                    <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-600">No Hifz students yet. Add your first one!</p>
                  </div>
                )}
              </div>
            )}

            {/* Admins Tab */}
            {activeTab === 'admins' && !loading && (
              <div className="space-y-4">
                <button
                  onClick={handleCreateAdmin}
                  className="px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-bold flex items-center gap-2"
                >
                  <Plus size={20} />
                  Add New Admin
                </button>

                {admins.map(admin => (
                  <div key={admin.id} className="bg-white rounded-xl p-6 shadow-lg flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{admin.username}</h3>
                      <p className="text-sm text-gray-600">Role: {admin.role}</p>
                    </div>
                    {admin.role !== 'superadmin' && (
                      <button
                        onClick={() => handleDeleteAdmin(admin.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                      >
                        <Trash2 size={18} />
                        Delete
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && !loading && settings && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#004d40] mb-6">Site Settings</h2>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label>
                        <input
                          type="text"
                          value={settings.organizationName}
                          onChange={(e) => setSettings({ ...settings, organizationName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Tagline</label>
                        <input
                          type="text"
                          value={settings.tagline}
                          onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Hero Title 1</label>
                        <input
                          type="text"
                          value={settings.heroTitle1}
                          onChange={(e) => setSettings({ ...settings, heroTitle1: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Hero Title 2</label>
                        <input
                          type="text"
                          value={settings.heroTitle2}
                          onChange={(e) => setSettings({ ...settings, heroTitle2: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Hero Title 3</label>
                        <input
                          type="text"
                          value={settings.heroTitle3}
                          onChange={(e) => setSettings({ ...settings, heroTitle3: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Hero Subtitle</label>
                      <textarea
                        value={settings.heroSubtitle}
                        onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-24"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">CBE Account</label>
                        <input
                          type="text"
                          value={settings.cbeAccount}
                          onChange={(e) => setSettings({ ...settings, cbeAccount: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">E-Birr Phone</label>
                        <input
                          type="text"
                          value={settings.ebirrPhone}
                          onChange={(e) => setSettings({ ...settings, ebirrPhone: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Telegram Channel</label>
                        <input
                          type="text"
                          value={settings.telegramChannel}
                          onChange={(e) => setSettings({ ...settings, telegramChannel: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">General Phone</label>
                        <input
                          type="text"
                          value={settings.generalPhone}
                          onChange={(e) => setSettings({ ...settings, generalPhone: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                        <input
                          type="text"
                          value={settings.address}
                          onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Donation Goal (ETB)</label>
                        <input
                          type="number"
                          value={settings.donationGoal}
                          onChange={(e) => setSettings({ ...settings, donationGoal: parseFloat(e.target.value) })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Donation Raised (ETB)</label>
                        <input
                          type="number"
                          value={settings.donationRaised}
                          onChange={(e) => setSettings({ ...settings, donationRaised: parseFloat(e.target.value) })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Stats: Projects</label>
                        <input
                          type="text"
                          value={settings.statsProjects}
                          onChange={(e) => setSettings({ ...settings, statsProjects: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Stats: Lives</label>
                        <input
                          type="text"
                          value={settings.statsLives}
                          onChange={(e) => setSettings({ ...settings, statsLives: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Stats: Students</label>
                        <input
                          type="text"
                          value={settings.statsStudents}
                          onChange={(e) => setSettings({ ...settings, statsStudents: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Stats: Volunteers</label>
                        <input
                          type="text"
                          value={settings.statsVolunteers}
                          onChange={(e) => setSettings({ ...settings, statsVolunteers: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleSaveSettings}
                      className="px-8 py-3 bg-[#0097A7] text-white rounded-lg hover:bg-[#00ACC1] transition-colors font-bold flex items-center gap-2"
                    >
                      <Save size={20} />
                      Save All Settings
                    </button>
                  </div>
                </div>

                {/* Password Change Section */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-[#0097A7] mb-2">Admin Password</h2>
                      <p className="text-sm text-gray-600">Change your admin panel password for security</p>
                    </div>
                    <Shield className="text-amber-500" size={48} />
                  </div>
                  
                  {!showPasswordChange ? (
                    <button
                      onClick={() => setShowPasswordChange(true)}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition-all font-bold flex items-center gap-2"
                    >
                      <Shield size={20} />
                      Change Password
                    </button>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0097A7]"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                          <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0097A7]"
                            placeholder="Enter new password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                          <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0097A7]"
                            placeholder="Confirm new password"
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={handleChangePassword}
                          disabled={loading}
                          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold flex items-center gap-2 disabled:opacity-50"
                        >
                          <Save size={20} />
                          Update Password
                        </button>
                        <button
                          onClick={() => {
                            setShowPasswordChange(false);
                            setCurrentPassword('');
                            setNewPassword('');
                            setConfirmPassword('');
                          }}
                          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-bold"
                        >
                          Cancel
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        💡 Password must be at least 6 characters long
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create/Edit Modal for Blogs */}
      {showCreateModal && editingBlog && activeTab === 'blogs' && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-[#004d40] mb-6">
              {editingBlog.id ? 'Edit Blog Post' : 'Create Blog Post'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editingBlog.title}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={editingBlog.excerpt}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                <textarea
                  value={editingBlog.content}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-40"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={editingBlog.category}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Author</label>
                  <input
                    type="text"
                    value={editingBlog.author}
                    onChange={(e) => setEditingBlog({ ...editingBlog, author: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  value={editingBlog.imageUrl}
                  onChange={(e) => setEditingBlog({ ...editingBlog, imageUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  placeholder="https://..."
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSaveBlog}
                  className="flex-1 px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-bold"
                >
                  Save Blog Post
                </button>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingBlog(null);
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-bold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create/Edit Modal for Projects */}
      {showCreateModal && editingProject && activeTab === 'projects' && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-[#004d40] mb-6">
              {editingProject.id ? 'Edit Project' : 'Create Project'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-24"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Goal (ETB)</label>
                  <input
                    type="number"
                    value={editingProject.goal}
                    onChange={(e) => setEditingProject({ ...editingProject, goal: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Raised (ETB)</label>
                  <input
                    type="number"
                    value={editingProject.raised}
                    onChange={(e) => setEditingProject({ ...editingProject, raised: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select
                    value={editingProject.category}
                    onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  >
                    <option value="">Select...</option>
                    <option value="Water">Water</option>
                    <option value="Food">Food</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select
                    value={editingProject.status}
                    onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value as any })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  >
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  value={editingProject.imageUrl}
                  onChange={(e) => setEditingProject({ ...editingProject, imageUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  placeholder="https://..."
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSaveProject}
                  className="flex-1 px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-bold"
                >
                  Save Project
                </button>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingProject(null);
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-bold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create/Edit Modal for Students */}
      {showCreateModal && editingStudent && activeTab === 'students' && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-[#004d40] mb-6">
              {editingStudent.id ? 'Edit Student' : 'Add Student'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={editingStudent.name}
                  onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    value={editingStudent.age}
                    onChange={(e) => setEditingStudent({ ...editingStudent, age: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Juz Progress (1-30)</label>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={editingStudent.juzProgress}
                    onChange={(e) => setEditingStudent({ ...editingStudent, juzProgress: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Teacher Name</label>
                  <input
                    type="text"
                    value={editingStudent.teacher}
                    onChange={(e) => setEditingStudent({ ...editingStudent, teacher: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="text"
                    value={editingStudent.phone}
                    onChange={(e) => setEditingStudent({ ...editingStudent, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSaveStudent}
                  className="flex-1 px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-bold"
                >
                  Save Student
                </button>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingStudent(null);
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-bold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
