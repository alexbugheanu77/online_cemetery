import { GiCandles } from 'react-icons/gi';

interface LoadingProps {
  fullScreen?: boolean;
  message?: string;
}

export default function Loading({ fullScreen = false, message = 'Loading...' }: LoadingProps) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <GiCandles className="text-yellow-300 h-12 w-12 candle-flame animate-pulse" />
          </div>
          <p className="text-white">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <GiCandles className="text-yellow-300 h-10 w-10 candle-flame animate-pulse mb-4" />
      <p className="text-gray-400">{message}</p>
    </div>
  );
}
