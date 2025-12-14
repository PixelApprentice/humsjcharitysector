import { useState } from 'react';
import { Plus, Edit, Trash2, X, Save, ImagePlus } from 'lucide-react';

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

interface AdminPanelProps {
  posts: BlogPost[];
  onAddPost: (post: Omit<BlogPost, 'id'>) => void;
  onEditPost: (id: number, post: Omit<BlogPost, 'id'>) => void;
  onDeletePost: (id: number) => void;
  onClose: () => void;
}

export function AdminPanel({ posts, onAddPost, onEditPost, onDeletePost, onClose }: AdminPanelProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<BlogPost, 'id'>>({
    title: '',
    titleAm: '',
    excerpt: '',
    excerptAm: '',
    category: 'Charity',
    image: '',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null) {
      onEditPost(editingId, formData);
      setEditingId(null);
    } else {
      onAddPost(formData);
    }
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
    setShowForm(false);
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

  const handleCancel = () => {
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
            <p className="text-sm text-gray-200">Manage blog posts in English and Amharic</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Add Post Button */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="mb-6 flex items-center gap-2 px-6 py-3 bg-[#ffd700] text-gray-900 rounded-lg hover:bg-[#daa520] transition-colors font-semibold"
            >
              <Plus size={20} />
              Add New Post
            </button>
          )}

          {/* Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 rounded-xl p-6 border-2 border-[#004d40]">
              <h3 className="text-xl font-bold text-[#004d40] mb-4">
                {editingId !== null ? 'Edit Post' : 'Create New Post'}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* English Title */}
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

                {/* Amharic Title */}
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

                {/* English Excerpt */}
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

                {/* Amharic Excerpt */}
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

                {/* Category */}
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

                {/* Read Time */}
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

                {/* Image URL */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image URL *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      required
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"
                      placeholder="https://example.com/image.jpg"
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                      title="Upload Image"
                    >
                      <ImagePlus size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-semibold"
                >
                  <Save size={20} />
                  {editingId !== null ? 'Update Post' : 'Create Post'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Posts List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#004d40] mb-4">All Posts ({posts.length})</h3>
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#004d40] transition-colors"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Content */}
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
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm('Are you sure you want to delete this post?')) {
                              onDeletePost(post.id);
                            }
                          }}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
