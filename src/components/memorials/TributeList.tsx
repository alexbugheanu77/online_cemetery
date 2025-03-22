'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { GiCandles, GiFlowerPot } from 'react-icons/gi';
import { formatDate } from '@/lib/utils';
import { getTributesByMemorial } from '@/lib/db/firestore';
import Loading from '@/components/ui/Loading';
import AddTribute from './AddTribute';

interface TributeListProps {
  memorialId: string;
}

interface Tribute {
  id: string;
  memorialId: string;
  userId: string;
  userName: string;
  userPhotoURL: string;
  type: 'message' | 'candle' | 'flower' | 'heart';
  content?: string;
  createdAt: string;
}

export default function TributeList({ memorialId }: TributeListProps) {
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'messages' | 'candles' | 'flowers' | 'hearts'>('all');

  const fetchTributes = async () => {
    try {
      const tributesData = await getTributesByMemorial(memorialId);
      setTributes(tributesData);
    } catch (error) {
      console.error('Error fetching tributes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTributes();
  }, [memorialId]);

  const handleTributeAdded = () => {
    fetchTributes();
  };

  const filteredTributes = tributes.filter((tribute) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'messages') return tribute.type === 'message';
    if (activeTab === 'candles') return tribute.type === 'candle';
    if (activeTab === 'flowers') return tribute.type === 'flower';
    if (activeTab === 'hearts') return tribute.type === 'heart';
    return true;
  });

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Tributes & Memories</h2>
      
      <AddTribute memorialId={memorialId} onTributeAdded={handleTributeAdded} />
      
      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <div className="border-b border-slate-700">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'all'
                  ? 'text-white border-b-2 border-indigo-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Tributes
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'messages'
                  ? 'text-white border-b-2 border-indigo-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Messages
            </button>
            <button
              onClick={() => setActiveTab('candles')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'candles'
                  ? 'text-white border-b-2 border-indigo-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Candles
            </button>
            <button
              onClick={() => setActiveTab('flowers')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'flowers'
                  ? 'text-white border-b-2 border-indigo-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Flowers
            </button>
            <button
              onClick={() => setActiveTab('hearts')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'hearts'
                  ? 'text-white border-b-2 border-indigo-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Hearts
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {isLoading ? (
            <Loading message="Loading tributes..." />
          ) : filteredTributes.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">No tributes yet. Be the first to leave a tribute.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredTributes.map((tribute) => (
                <div key={tribute.id} className="flex items-start space-x-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={tribute.userPhotoURL}
                      alt={tribute.userName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="font-medium text-white">{tribute.userName}</span>
                      <span className="text-gray-500 text-sm ml-2">
                        {formatDate(new Date(tribute.createdAt))}
                      </span>
                    </div>
                    
                    {tribute.type === 'message' && (
                      <p className="text-gray-300">{tribute.content}</p>
                    )}
                    
                    {tribute.type === 'candle' && (
                      <div className="flex items-center">
                        <GiCandles className="h-6 w-6 text-yellow-300 candle-glow mr-2" />
                        <p className="text-gray-300">Lit a candle in remembrance</p>
                      </div>
                    )}
                    
                    {tribute.type === 'flower' && (
                      <div className="flex items-center">
                        <GiFlowerPot className="h-6 w-6 text-purple-400 mr-2" />
                        <p className="text-gray-300">Left flowers as a tribute</p>
                      </div>
                    )}
                    
                    {tribute.type === 'heart' && (
                      <div className="flex items-center">
                        <FaHeart className="h-5 w-5 text-red-400 mr-2" />
                        <p className="text-gray-300">Sent love and support</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
