'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import MainLayout from '@/components/layout/MainLayout';
import { useAuth } from '@/lib/context/AuthContext';
import { getMemorialsByUser } from '@/lib/db/firestore';
import { Memorial } from '@/lib/db/schema';
import Loading from '@/components/ui/Loading';

export default function ProfilePage() {
  const { user, userProfile, loading } = useAuth();
  const router = useRouter();
  const [memorials, setMemorials] = useState<Memorial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login?redirect=profile');
      return;
    }

    const fetchMemorials = async () => {
      if (user) {
        try {
          const userMemorials = await getMemorialsByUser(user.uid);
          setMemorials(userMemorials);
        } catch (error) {
          console.error('Error fetching memorials:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchMemorials();
  }, [user, loading, router]);

  if (loading || isLoading) {
    return <Loading fullScreen message="Loading profile..." />;
  }

  if (!user || !userProfile) {
    return null; // This should never render as the router.push above will redirect
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden mb-8">
            <div className="relative h-48 w-full bg-gradient-to-r from-indigo-600 to-purple-600">
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-800 to-transparent"></div>
            </div>
            
            <div className="px-6 md:px-8 -mt-16 relative">
              <div className="flex flex-col md:flex-row md:items-end">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-slate-800 mb-4 md:mb-0">
                  <Image
                    src={userProfile.photoURL || '/images/placeholder.jpg'}
                    alt={userProfile.displayName || 'User'}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="md:ml-6 md:mb-6">
                  <h1 className="text-2xl font-bold text-white">{userProfile.displayName}</h1>
                  <p className="text-gray-400">{userProfile.email}</p>
                </div>
                
                <div className="md:ml-auto mt-4 md:mt-0 md:mb-6">
                  <Link 
                    href="/profile/edit" 
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <FaEdit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Link>
                </div>
              </div>
              
              <div className="border-t border-slate-700 mt-6 pt-6 pb-4">
                <div className="flex space-x-8">
                  <div>
                    <span className="text-2xl font-bold text-white">{memorials.length}</span>
                    <p className="text-gray-400">Memorials</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white">0</span>
                    <p className="text-gray-400">Family Members</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white">0</span>
                    <p className="text-gray-400">Tributes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Your Memorials</h2>
              <Link 
                href="/memorials/create" 
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaPlus className="mr-2 h-4 w-4" />
                Create Memorial
              </Link>
            </div>
            
            {memorials.length === 0 ? (
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <p className="text-gray-400 mb-4">You haven't created any memorials yet.</p>
                <Link 
                  href="/memorials/create" 
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <FaPlus className="mr-2 h-4 w-4" />
                  Create Your First Memorial
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {memorials.map((memorial) => (
                  <div key={memorial.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-48 w-full">
                      <Image
                        src={memorial.imageUrl || '/images/placeholder.jpg'}
                        alt={memorial.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2">{memorial.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {new Date(memorial.birthDate).getFullYear()} - {new Date(memorial.deathDate).getFullYear()}
                      </p>
                      
                      <div className="flex justify-between">
                        <Link 
                          href={`/memorials/${memorial.id}`}
                          className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                        >
                          View Memorial
                        </Link>
                        
                        <div className="flex space-x-2">
                          <Link 
                            href={`/memorials/${memorial.id}/edit`}
                            className="text-gray-400 hover:text-white"
                          >
                            <FaEdit className="h-4 w-4" />
                          </Link>
                          <button 
                            className="text-gray-400 hover:text-red-500"
                            aria-label="Delete memorial"
                          >
                            <FaTrash className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Subscription Plan</h3>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium">Free Plan</p>
                        <p className="text-gray-400 text-sm">Basic features for individuals</p>
                      </div>
                      <Link 
                        href="/pricing" 
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Upgrade
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Privacy Settings</h3>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-white font-medium">Profile Visibility</p>
                        <p className="text-gray-400 text-sm">Control who can see your profile</p>
                      </div>
                      <select className="bg-slate-800 border border-slate-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        <option>Public</option>
                        <option>Friends Only</option>
                        <option>Private</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">Email Notifications</p>
                        <p className="text-gray-400 text-sm">Receive email updates about activity</p>
                      </div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Danger Zone</h3>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">Delete Account</p>
                        <p className="text-gray-400 text-sm">Permanently delete your account and all data</p>
                      </div>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
