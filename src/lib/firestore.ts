import { db } from './firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  Timestamp 
} from 'firebase/firestore';

// Leadership Data Structure
export interface Leader {
  id: string;
  name: string;
  role: string;
  roleId: 'generalAmir' | 'externalAffairsAmir' | 'qirat' | 'charity' | 'dawa';
  phone: string;
  telegram: string;
  order: number;
}

// Blog Post Structure
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  author: string;
  date: string;
  createdAt: Timestamp;
}

// Charity Project Structure
export interface CharityProject {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  category: string;
  status: 'active' | 'completed' | 'pending';
  imageUrl: string;
  createdAt: Timestamp;
}

// Hifz Student Structure
export interface HifzStudent {
  id: string;
  name: string;
  age: number;
  juzProgress: number;
  lastAssessment: string;
  teacher: string;
  phone: string;
  createdAt: Timestamp;
}

// Admin User Structure
export interface AdminUser {
  id: string;
  username: string;
  password: string; // In production, this should be hashed
  role: 'superadmin' | 'admin' | 'editor';
  createdAt: Timestamp;
}

// Site Settings Structure
export interface SiteSettings {
  id: string;
  organizationName: string;
  tagline: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSubtitle: string;
  aboutContent: string;
  missionStatement: string;
  visionStatement: string;
  cbeAccount: string;
  ebirrPhone: string;
  telegramChannel: string;
  generalPhone: string;
  address: string;
  donationGoal: number;
  donationRaised: number;
  statsProjects: string;
  statsLives: string;
  statsStudents: string;
  statsVolunteers: string;
}

// Initialize default leadership data
export const initializeLeadership = async () => {
  const leaders: Leader[] = [
    {
      id: 'generalAmir',
      name: 'Musab Abdurahman',
      role: 'General Amir',
      roleId: 'generalAmir',
      phone: '+251925237453',
      telegram: '@musab_humsj',
      order: 1
    },
    {
      id: 'externalAffairsAmir',
      name: 'Mehadi Jemal',
      role: 'External Affairs Amir',
      roleId: 'externalAffairsAmir',
      phone: '+251938979492',
      telegram: '@mehadi_humsj',
      order: 2
    },
    {
      id: 'qirat',
      name: 'Mohammed Ahmadu',
      role: 'Qirat Sector Amir',
      roleId: 'qirat',
      phone: '+251929230120',
      telegram: '@mohammed_qirat',
      order: 3
    },
    {
      id: 'charity',
      name: 'Muhajir Mohammed',
      role: 'Charity Sector Amir',
      roleId: 'charity',
      phone: '+251964544620',
      telegram: '@muhajir_charity',
      order: 4
    },
    {
      id: 'dawa',
      name: 'Ramadan Aliyii',
      role: 'Dawa Sector Amir',
      roleId: 'dawa',
      phone: '+251975309779',
      telegram: '@ramadan_dawa',
      order: 5
    }
  ];

  for (const leader of leaders) {
    await setDoc(doc(db, 'leaders', leader.id), leader);
  }
};

// Initialize default site settings
export const initializeSiteSettings = async () => {
  const settings: SiteSettings = {
    id: 'main',
    organizationName: 'Humsj External Affairs',
    tagline: 'Serving the Ethiopian Ummah Since 2020',
    heroTitle1: 'Empowering',
    heroTitle2: 'Ethiopian Muslims',
    heroTitle3: 'Through Faith & Innovation',
    heroSubtitle: 'Humsj External Affairs bridges Islamic tradition with modern solutions, serving our community through education, charity, and spiritual growth.',
    aboutContent: 'Humsj External Affairs was established as a pioneering initiative under the Haramaya Muslim Student Jema\'a, representing a new era of tech-enabled Islamic community service in Ethiopia.',
    missionStatement: 'To empower the Ethiopian Muslim community through integrated Islamic education, charitable initiatives, and community outreach programs, leveraging technology and modern management practices while staying rooted in Islamic values and traditions.',
    visionStatement: 'To become the leading model of tech-enabled Islamic community service in Ethiopia, known for transparency, effectiveness, and transformative impact across education, charity, and spiritual development.',
    cbeAccount: '1000614307599',
    ebirrPhone: '0985736451',
    telegramChannel: '@humsj_charity',
    generalPhone: '+251925237453',
    address: 'Addis Ababa, Ethiopia',
    donationGoal: 100000,
    donationRaised: 75320,
    statsProjects: '15+',
    statsLives: '5000+',
    statsStudents: '150+',
    statsVolunteers: '300+'
  };

  await setDoc(doc(db, 'settings', 'main'), settings);
};

// Initialize default admin
export const initializeDefaultAdmin = async () => {
  const admin: AdminUser = {
    id: 'admin1',
    username: 'admin',
    password: 'humsj2025', // In production, hash this!
    role: 'superadmin',
    createdAt: Timestamp.now()
  };

  await setDoc(doc(db, 'admins', admin.id), admin);
};

// Get all leaders
export const getLeaders = async (): Promise<Leader[]> => {
  const leadersRef = collection(db, 'leaders');
  const q = query(leadersRef, orderBy('order'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Leader));
};

// Update leader
export const updateLeader = async (id: string, data: Partial<Leader>) => {
  const leaderRef = doc(db, 'leaders', id);
  await updateDoc(leaderRef, data);
};

// Get all blog posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const blogsRef = collection(db, 'blogs');
  const q = query(blogsRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as BlogPost));
};

// Create blog post
export const createBlogPost = async (data: Omit<BlogPost, 'id' | 'createdAt'>) => {
  const blogsRef = collection(db, 'blogs');
  const newDoc = doc(blogsRef);
  await setDoc(newDoc, {
    ...data,
    createdAt: Timestamp.now()
  });
  return newDoc.id;
};

// Update blog post
export const updateBlogPost = async (id: string, data: Partial<BlogPost>) => {
  const blogRef = doc(db, 'blogs', id);
  await updateDoc(blogRef, data);
};

// Delete blog post
export const deleteBlogPost = async (id: string) => {
  await deleteDoc(doc(db, 'blogs', id));
};

// Get all charity projects
export const getCharityProjects = async (): Promise<CharityProject[]> => {
  const projectsRef = collection(db, 'projects');
  const q = query(projectsRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as CharityProject));
};

// Create charity project
export const createCharityProject = async (data: Omit<CharityProject, 'id' | 'createdAt'>) => {
  const projectsRef = collection(db, 'projects');
  const newDoc = doc(projectsRef);
  await setDoc(newDoc, {
    ...data,
    createdAt: Timestamp.now()
  });
  return newDoc.id;
};

// Update charity project
export const updateCharityProject = async (id: string, data: Partial<CharityProject>) => {
  const projectRef = doc(db, 'projects', id);
  await updateDoc(projectRef, data);
};

// Delete charity project
export const deleteCharityProject = async (id: string) => {
  await deleteDoc(doc(db, 'projects', id));
};

// Get all Hifz students
export const getHifzStudents = async (): Promise<HifzStudent[]> => {
  const studentsRef = collection(db, 'students');
  const q = query(studentsRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as HifzStudent));
};

// Create Hifz student
export const createHifzStudent = async (data: Omit<HifzStudent, 'id' | 'createdAt'>) => {
  const studentsRef = collection(db, 'students');
  const newDoc = doc(studentsRef);
  await setDoc(newDoc, {
    ...data,
    createdAt: Timestamp.now()
  });
  return newDoc.id;
};

// Update Hifz student
export const updateHifzStudent = async (id: string, data: Partial<HifzStudent>) => {
  const studentRef = doc(db, 'students', id);
  await updateDoc(studentRef, data);
};

// Delete Hifz student
export const deleteHifzStudent = async (id: string) => {
  await deleteDoc(doc(db, 'students', id));
};

// Get site settings
export const getSiteSettings = async (): Promise<SiteSettings | null> => {
  const settingsRef = doc(db, 'settings', 'main');
  const snapshot = await getDoc(settingsRef);
  if (snapshot.exists()) {
    return { ...snapshot.data(), id: snapshot.id } as SiteSettings;
  }
  return null;
};

// Update site settings
export const updateSiteSettings = async (data: Partial<SiteSettings>) => {
  const settingsRef = doc(db, 'settings', 'main');
  await updateDoc(settingsRef, data);
};

// Get all admins
export const getAdmins = async (): Promise<AdminUser[]> => {
  const adminsRef = collection(db, 'admins');
  const snapshot = await getDocs(adminsRef);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as AdminUser));
};

// Create admin
export const createAdmin = async (data: Omit<AdminUser, 'id' | 'createdAt'>) => {
  const adminsRef = collection(db, 'admins');
  const newDoc = doc(adminsRef);
  await setDoc(newDoc, {
    ...data,
    createdAt: Timestamp.now()
  });
  return newDoc.id;
};

// Delete admin
export const deleteAdmin = async (id: string) => {
  await deleteDoc(doc(db, 'admins', id));
};

// Verify admin credentials
export const verifyAdmin = async (username: string, password: string): Promise<AdminUser | null> => {
  const admins = await getAdmins();
  const admin = admins.find(a => a.username === username && a.password === password);
  return admin || null;
};
