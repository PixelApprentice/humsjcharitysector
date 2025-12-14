import { db } from './config';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  Timestamp
} from 'firebase/firestore';

export interface BlogPost {
  id: string;
  title: string;
  titleAm: string;
  excerpt: string;
  excerptAm: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

const POSTS_COLLECTION = 'blog_posts';

// Add new blog post
export const addBlogPost = async (post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, POSTS_COLLECTION), {
      ...post,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding blog post:', error);
    throw error;
  }
};

// Update blog post
export const updateBlogPost = async (id: string, post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const postRef = doc(db, POSTS_COLLECTION, id);
    await updateDoc(postRef, {
      ...post,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

// Delete blog post
export const deleteBlogPost = async (id: string) => {
  try {
    await deleteDoc(doc(db, POSTS_COLLECTION, id));
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

// Get all blog posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(collection(db, POSTS_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BlogPost));
  } catch (error) {
    console.error('Error getting blog posts:', error);
    throw error;
  }
};

// Real-time listener for blog posts
export const subscribeToBlogPosts = (callback: (posts: BlogPost[]) => void) => {
  try {
    const q = query(collection(db, POSTS_COLLECTION), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (querySnapshot) => {
      const posts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as BlogPost));
      callback(posts);
    });
  } catch (error) {
    console.error('Error subscribing to blog posts:', error);
    throw error;
  }
};
