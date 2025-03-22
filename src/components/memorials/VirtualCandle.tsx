import { useState } from 'react';
import { GiCandles } from 'react-icons/gi';
import { motion } from 'framer-motion';

interface VirtualCandleProps {
  onLight?: () => void;
  size?: 'sm' | 'md' | 'lg';
  isLit?: boolean;
}

export default function VirtualCandle({
  onLight,
  size = 'md',
  isLit = false,
}: VirtualCandleProps) {
  const [lit, setLit] = useState(isLit);
  
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };
  
  const handleLight = () => {
    setLit(true);
    if (onLight) {
      onLight();
    }
    
    // Auto reset after 10 seconds if not already lit
    if (!isLit) {
      setTimeout(() => {
        setLit(false);
      }, 10000);
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleLight}
        className="focus:outline-none transform transition-transform hover:scale-110"
        aria-label="Light a candle"
      >
        {lit ? (
          <div className="relative">
            <GiCandles className={`text-yellow-300 ${sizeClasses[size]} candle-flame`} />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 rounded-full candle-glow"
            />
          </div>
        ) : (
          <GiCandles className={`text-gray-500 ${sizeClasses[size]}`} />
        )}
      </button>
      <span className="mt-2 text-sm text-gray-400">
        {lit ? 'Candle lit' : 'Light a candle'}
      </span>
    </div>
  );
}
