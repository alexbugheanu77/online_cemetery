'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import VirtualCandle from '@/components/memorials/VirtualCandle';
import TributeList from '@/components/memorials/TributeList';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { GiFlowerPot } from 'react-icons/gi';
import { formatDate, calculateYears } from '@/lib/utils';
import { getMemorial } from '@/lib/db/firestore';
import Loading from '@/components/ui/Loading';
import { useAuth } from '@/lib/context/AuthContext';
import { Memorial } from '@/lib/db/schema';

export default function MemorialPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const [memorial, setMemorial] = useState<Memorial | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMemorial = async () => {
      try {
        const memorialData = await getMemorial(params.id);
        
        if (!memorialData) {
          router.push('/memorials');
          return;
        }

        setMemorial(memorialData);
      } catch (error) {
        console.error('Error fetching memorial:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemorial();
  }, [params.id, router]);

  if (isLoading) {
    return (
      <MainLayout>
        <Loading fullScreen message="Loading memorial..." />
      </MainLayout>
    );
  }

  if (!memorial) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Memorial Not Found</h1>
          <p className="text-gray-300 mb-8">The memorial you are looking for does not exist or has been removed.</p>
          <button
            onClick={() => router.push('/memorials')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            View All Memorials
          </button>
        </div>
      </MainLayout>
    );
  }
  
  const age = memorial.birthDate && memorial.deathDate 
    ? calculateYears(new Date(memorial.birthDate), new Date(memorial.deathDate)) 
    : 0;
  
  return (
    <MainLayout>
      <div className="relative h-80 w-full">
        <Image
          src={memorial.coverImageUrl || '/images/placeholder-cover.jpg'}
          alt={`Memorial for ${memorial.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col md:flex-row">
            <div className="md:w-1/3 flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-slate-700 mb-4">
                <Image
                  src={memorial.imageUrl || '/images/placeholder.jpg'}
                  alt={memorial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-3xl font-playfair font-bold text-white mb-2">{memorial.name}</h1>
              <p className="text-gray-400 mb-4">
                {memorial.birthDate ? formatDate(new Date(memorial.birthDate)) : 'Unknown'} - {memorial.deathDate ? formatDate(new Date(memorial.deathDate)) : 'Unknown'}
              </p>
              {age > 0 && <p className="text-gray-400 mb-6">Age: {age} years</p>}
              
              <div className="flex space-x-6 mb-6">
                <VirtualCandle size="lg" />
                <div className="flex flex-col items-center">
                  <button className="focus:outline-none transform transition-transform hover:scale-110">
                    <GiFlowerPot className="h-12 w-12 text-purple-400" />
                  </button>
                  <span className="mt-2 text-sm text-gray-400">Leave flowers</span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 text-gray-400">
                <button className="hover:text-white transition">
                  <FaHeart className="h-5 w-5" />
                </button>
                <button className="hover:text-white transition">
                  <FaComment className="h-5 w-5" />
                </button>
                <button className="hover:text-white transition">
                  <FaShare className="h-5 w-5" />
                </button>
              </div>

              {user && memorial.createdById === user.uid && (
                <div className="mt-6">
                  <button
                    onClick={() => router.push(`/memorials/${memorial.id}/edit`)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  >
                    Edit Memorial
                  </button>
                </div>
              )}
            </div>
            
            <div className="md:w-2/3 md:pl-8 md:border-l border-slate-700">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Biography</h2>
                <p className="text-gray-300 leading-relaxed">{memorial.biography}</p>
              </div>
              
              {memorial.epitaph && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-white mb-4">Epitaph</h2>
                  <blockquote className="italic text-gray-300 border-l-4 border-indigo-500 pl-4 py-2">
                    "{memorial.epitaph}"
                  </blockquote>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {memorial.location && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Location</h3>
                    <p className="text-white">{memorial.location}</p>
                  </div>
                )}
                {memorial.causeOfDeath && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Cause of Death</h3>
                    <p className="text-white">{memorial.causeOfDeath}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <TributeList memorialId={params.id} />
        </div>
      </div>
    </MainLayout>
  );
}
