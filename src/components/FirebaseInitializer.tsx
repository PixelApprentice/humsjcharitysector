import { useState, useEffect } from 'react';
import { initializeLeadership, initializeSiteSettings, initializeDefaultAdmin } from '../lib/firestore';

export function FirebaseInitializer() {
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeData = async () => {
      try {
        // Check if we need to initialize (only run once)
        const hasInitialized = localStorage.getItem('firebase_initialized');
        
        if (!hasInitialized) {
          console.log('Initializing Firebase data...');
          
          await Promise.all([
            initializeLeadership(),
            initializeSiteSettings(),
            initializeDefaultAdmin()
          ]);
          
          localStorage.setItem('firebase_initialized', 'true');
          console.log('Firebase data initialized successfully!');
        }
        
        setInitialized(true);
      } catch (err) {
        console.error('Error initializing Firebase:', err);
        setError('Failed to initialize database. Please check your Firebase configuration.');
      }
    };

    initializeData();
  }, []);

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
        <p className="font-semibold">{error}</p>
      </div>
    );
  }

  if (!initialized) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#004d40] to-[#00695c] flex items-center justify-center z-50">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Initializing Humsj External Affairs...</p>
          <p className="text-sm text-white/70 mt-2">Setting up database connection</p>
        </div>
      </div>
    );
  }

  return null;
}
