'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaComment, FaHeart } from 'react-icons/fa';
import { GiCandles, GiFlowerPot } from 'react-icons/gi';
import { useAuth } from '@/lib/context/AuthContext';
import { addTribute } from '@/lib/db/firestore';
import { Tribute } from '@/lib/db/schema';

interface AddTributeProps {
  memorialId: string;
  onTributeAdded: () => void;
}

type TributeType = 'message' | 'candle' | 'flower' | 'heart';

export default function AddTribute({ memorialId, onTributeAdded }: AddTributeProps) {
  const { user, userProfile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [tributeType, setTributeType] = useState<TributeType>('message');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    try {
      const newTribute: Partial<Tribute> = {
        memorialId,
        userId: user.uid,
        userName: userProfile?.displayName || 'Anonymous',
        userPhotoURL: userProfile?.photoURL || '/images/placeholder.jpg',
        type: tributeType,
        content: tributeType === 'message' ? message : '',
      };

      await addTribute(newTribute);
      setMessage('');
      setIsOpen(false);
      onTributeAdded();
    } catch (error) {
      console.error('Error adding tribute:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="bg-slate-800 rounded-lg p-6 text-center">
        <p className="text-gray-300 mb-4">Sign in to leave a tribute</p>
        <a
          href="/login"
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Sign In
        </a>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden">
      {!isOpen ? (
        <div className="p-6 text-center">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Leave a Tribute
          </button>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
              <Image
                src={userProfile?.photoURL || '/images/placeholder.jpg'}
                alt={userProfile?.displayName || 'User'}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-white font-medium">{userProfile?.displayName || 'Anonymous'}</p>
              <p className="text-gray-400 text-sm">Leaving a tribute</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-center space-x-6 mb-4">
              <button
                type="button"
                onClick={() => setTributeType('message')}
                className={`flex flex-col items-center p-3 rounded-lg ${
                  tributeType === 'message' ? 'bg-slate-700' : 'hover:bg-slate-700/50'
                }`}
              >
                <FaComment className="h-6 w-6 text-indigo-400 mb-2" />
                <span className="text-sm text-gray-300">Message</span>
              </button>
              <button
                type="button"
                onClick={() => setTributeType('candle')}
                className={`flex flex-col items-center p-3 rounded-lg ${
                  tributeType === 'candle' ? 'bg-slate-700' : 'hover:bg-slate-700/50'
                }`}
              >
                <GiCandles className="h-6 w-6 text-yellow-300 mb-2" />
                <span className="text-sm text-gray-300">Light a Candle</span>
              </button>
              <button
                type="button"
                onClick={() => setTributeType('flower')}
                className={`flex flex-col items-center p-3 rounded-lg ${
                  tributeType === 'flower' ? 'bg-slate-700' : 'hover:bg-slate-700/50'
                }`}
              >
                <GiFlowerPot className="h-6 w-6 text-purple-400 mb-2" />
                <span className="text-sm text-gray-300">Leave Flowers</span>
              </button>
              <button
                type="button"
                onClick={() => setTributeType('heart')}
                className={`flex flex-col items-center p-3 rounded-lg ${
                  tributeType === 'heart' ? 'bg-slate-700' : 'hover:bg-slate-700/50'
                }`}
              >
                <FaHeart className="h-6 w-6 text-red-400 mb-2" />
                <span className="text-sm text-gray-300">Send Love</span>
              </button>
            </div>

            {tributeType === 'message' && (
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your memories, condolences, or thoughts..."
                className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
                required
              ></textarea>
            )}

            {tributeType === 'candle' && (
              <div className="text-center py-6">
                <GiCandles className="h-20 w-20 text-yellow-300 mx-auto candle-glow mb-4" />
                <p className="text-gray-300">Light a virtual candle in remembrance</p>
              </div>
            )}

            {tributeType === 'flower' && (
              <div className="text-center py-6">
                <GiFlowerPot className="h-20 w-20 text-purple-400 mx-auto mb-4" />
                <p className="text-gray-300">Leave virtual flowers as a tribute</p>
              </div>
            )}

            {tributeType === 'heart' && (
              <div className="text-center py-6">
                <FaHeart className="h-20 w-20 text-red-400 mx-auto animate-pulse mb-4" />
                <p className="text-gray-300">Send your love and support</p>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-transparent hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || (tributeType === 'message' && !message.trim())}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Tribute'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
