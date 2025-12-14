import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, X, Save, ImagePlus, LogOut, Loader } from 'lucide-react';
import { logoutUser } from '../firebase/auth';
import { addBlogPost, updateBlogPost, deleteBlogPost, getAllBlogPosts, BlogPost } from '../firebase/database';

interface AdminPanelFirebaseProps {
  user: any;
  onLogout: () => void;
}

export function AdminPanelFirebase({ user, onLogout }: AdminPanelFirebaseProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    titleAm: '',
    excerpt: '',
    excerptAm: '',
    category: 'Charity',
    image: '',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read'
  });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const allPosts = await getAllBlogPosts();
      setPosts(allPosts);
    } catch (err: any) {
      setError('Failed to load posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verify user is authenticated
    if (!user || !user.uid) {
      setError('You must be logged in to create posts');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (editingId) {
        await updateBlogPost(editingId, formData);
      } else {
        await addBlogPost(formData);
      }
      await loadPosts();
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to save post');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setFormData({
      title: post.title,
      titleAm: post.titleAm,
      excerpt: post.excerpt,
      excerptAm: post.excerptAm,
      category: post.category,
      image: post.image,
      date: post.date,
      readTime: post.readTime
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    setLoading(true);
    setError(null);

    try {
      await deleteBlogPost(id);
      await loadPosts();
    } catch (err: any) {
      setError('Failed to delete post');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      onLogout();
    } catch (err: any) {
      setError('Failed to logout');
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      title: '',
      titleAm: '',
      excerpt: '',
      excerptAm: '',
      category: 'Charity',
      image: '',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#004d40] to-[#00695c] text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Blog Admin Panel</h2>
            <p className="text-sm text-gray-200">Signed in as: {user?.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2"
              title="Logout"
            >
              <LogOut size={20} />
              <span className="text-sm">Logout</span>
            </button>
            <button
              onClick={onLogout}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* Add Post Button */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              disabled={loading}
              className="mb-6 flex items-center gap-2 px-6 py-3 bg-[#ffd700] text-gray-900 rounded-lg hover:bg-[#daa520] disabled:bg-gray-400 transition-colors font-semibold"
            >
              <Plus size={20} />
              Add New Post
            </button>
          )}

          {/* Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 rounded-xl p-6 border-2 border-[#004d40]">
              <h3 className="text-xl font-bold text-[#004d40] mb-4">
                {editingId ? 'Edit Post' : 'Create New Post'}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Title (English) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                    placeholder="Enter English title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Title (አማርኛ) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.titleAm}
                    onChange={(e) => setFormData({ ...formData, titleAm: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                    placeholder="የአማርኛ ርዕስ ያስገቡ"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Excerpt (English) *
                  </label>
                  <textarea
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-24"
                    placeholder="Enter English excerpt"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Excerpt (አማርኛ) *
                  </label>
                  <textarea
                    required
                    value={formData.excerptAm}
                    onChange={(e) => setFormData({ ...formData, excerptAm: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-24"
                    placeholder="የአማርኛ ማጠቃለያ ያስገቡ"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                  >
                    <option value="Charity">Charity</option>
                    <option value="Tech">Tech</option>
                    <option value="Education">Education</option>
                    <option value="Community">Community</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Read Time *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                    placeholder="e.g., 5 min read"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] disabled:bg-gray-400 transition-colors font-semibold"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={20} />
                      {editingId ? 'Update Post' : 'Create Post'}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  disabled={loading}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:bg-gray-300 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Posts List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#004d40] mb-4">
              All Posts ({posts.length})
              {loading && <Loader className="inline w-5 h-5 ml-2 animate-spin" />}
            </h3>
            {posts.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No posts yet. Create your first post!</p>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#004d40] transition-colors"
                >
                  <div className="flex gap-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="inline-block px-3 py-1 bg-[#004d40]/10 text-[#004d40] rounded-full text-sm mb-2">
                            {post.category}
                          </div>
                          <h4 className="font-bold text-gray-900">{post.title}</h4>
                          <p className="text-sm text-gray-600">አማርኛ: {post.titleAm}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(post)}
                            disabled={loading}
                            className="p-2 text-blue-600 hover:bg-blue-50 disabled:text-gray-400 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            disabled={loading}
                            className="p-2 text-red-600 hover:bg-red-50 disabled:text-gray-400 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
