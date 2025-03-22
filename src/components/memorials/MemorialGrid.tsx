import MemorialCard from './MemorialCard';

interface Memorial {
  id: string;
  name: string;
  birthDate: string;
  deathDate: string;
  imageUrl: string;
  tributeCount: number;
  commentCount: number;
}

interface MemorialGridProps {
  memorials: Memorial[];
}

export default function MemorialGrid({ memorials }: MemorialGridProps) {
  if (memorials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No memorials found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {memorials.map((memorial) => (
        <MemorialCard
          key={memorial.id}
          id={memorial.id}
          name={memorial.name}
          birthDate={memorial.birthDate}
          deathDate={memorial.deathDate}
          imageUrl={memorial.imageUrl}
          tributeCount={memorial.tributeCount}
          commentCount={memorial.commentCount}
        />
      ))}
    </div>
  );
}
