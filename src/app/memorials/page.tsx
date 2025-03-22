import { Suspense } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import MemorialGrid from '@/components/memorials/MemorialGrid';
import { FaSearch } from 'react-icons/fa';

// This would be replaced with actual data fetching in a real app
const getMemorials = async () => {
  // Simulate API call
  return [
    {
      id: '1',
      name: 'John Smith',
      birthDate: '1945-03-15',
      deathDate: '2023-01-10',
      imageUrl: '/images/placeholder.jpg',
      tributeCount: 24,
      commentCount: 12,
    },
    {
      id: '2',
      name: 'Mary Johnson',
      birthDate: '1932-07-22',
      deathDate: '2022-11-05',
      imageUrl: '/images/placeholder.jpg',
      tributeCount: 36,
      commentCount: 18,
    },
    {
      id: '3',
      name: 'Robert Williams',
      birthDate: '1950-12-03',
      deathDate: '2023-03-20',
      imageUrl: '/images/placeholder.jpg',
      tributeCount: 15,
      commentCount: 7,
    },
    {
      id: '4',
      name: 'Elizabeth Brown',
      birthDate: '1928-05-17',
      deathDate: '2022-08-12',
      imageUrl: '/images/placeholder.jpg',
      tributeCount: 42,
      commentCount: 23,
    },
    {
      id: '5',
      name: 'Michael Davis',
      birthDate: '1955-09-30',
      deathDate: '2023-02-15',
      imageUrl: '/images/placeholder.jpg',
      tributeCount: 19,
      commentCount: 9,
    },
    {
      id: '6',
      name: 'Sarah Miller',
      birthDate: '1940-11-12',
      deathDate: '2022-12-25',
      imageUrl: '/images/placeholder.jpg',
      tributeCount: 28,
      commentCount: 14,
    },
  ];
};

export default async function MemorialsPage() {
  const memorials = await getMemorials();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Memorials</h1>
            <p className="text-gray-400">Browse and discover digital memorials</p>
          </div>
          
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search memorials..."
                className="w-full md:w-80 bg-slate-800 border border-slate-700 text-white rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-full text-sm">
              All
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-gray-300 px-4 py-1 rounded-full text-sm">
              Recent
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-gray-300 px-4 py-1 rounded-full text-sm">
              Most Visited
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-gray-300 px-4 py-1 rounded-full text-sm">
              War Veterans
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-gray-300 px-4 py-1 rounded-full text-sm">
              Historical Figures
            </button>
          </div>
        </div>
        
        <Suspense fallback={<div className="text-center py-12 text-gray-400">Loading memorials...</div>}>
          <MemorialGrid memorials={memorials} />
        </Suspense>
        
        <div className="mt-12 text-center">
          <button className="btn-outline py-2 px-6">
            Load More
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
