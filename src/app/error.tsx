'use client';

import { useEffect } from 'react';
import { GiCandles } from 'react-icons/gi';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <GiCandles className="text-yellow-300 h-16 w-16 candle-flame" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-6">Something went wrong</h1>
        <p className="text-gray-400 mb-8">
          We apologize for the inconvenience. Please try again or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
