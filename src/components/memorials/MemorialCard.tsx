import Image from 'next/image';
import Link from 'next/link';
import { GiCandles } from 'react-icons/gi';
import { FaHeart, FaComment } from 'react-icons/fa';

interface MemorialCardProps {
  id: string;
  name: string;
  birthDate: string;
  deathDate: string;
  imageUrl: string;
  tributeCount: number;
  commentCount: number;
}

export default function MemorialCard({
  id,
  name,
  birthDate,
  deathDate,
  imageUrl,
  tributeCount,
  commentCount,
}: MemorialCardProps) {
  return (
    <Link href={`/memorials/${id}`}>
      <div className="memorial-card group transition-all duration-300 hover:translate-y-[-5px]">
        <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Memorial for ${name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-playfair font-bold text-white mb-1">{name}</h3>
          <p className="text-gray-400 text-sm mb-4">{birthDate} - {deathDate}</p>
          
          <div className="flex justify-center items-center space-x-4 text-gray-400 text-sm">
            <div className="flex items-center">
              <GiCandles className="text-yellow-300 mr-1 h-4 w-4" />
              <span>{tributeCount}</span>
            </div>
            <div className="flex items-center">
              <FaComment className="text-gray-400 mr-1 h-3 w-3" />
              <span>{commentCount}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
