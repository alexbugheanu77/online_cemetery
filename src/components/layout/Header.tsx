import Link from 'next/link';
import { GiCandles } from 'react-icons/gi';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <GiCandles className="text-yellow-300 h-6 w-6 candle-flame" />
          <span className="text-xl font-serif font-bold text-white">Eternal Memory</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/memorials" className="text-gray-300 hover:text-white transition">
            Memorials
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white transition">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>
        </nav>
        
        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="btn-outline py-1.5 px-3 text-sm">
            Log In
          </Link>
          <Link href="/signup" className="btn-primary py-1.5 px-3 text-sm">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <nav className="flex flex-col px-4 py-2">
            <Link 
              href="/memorials" 
              className="py-2 text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Memorials
            </Link>
            <Link 
              href="/about" 
              className="py-2 text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/pricing" 
              className="py-2 text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="py-2 text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-4 py-4">
              <Link 
                href="/login" 
                className="btn-outline py-1.5 px-3 text-sm flex-1 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link 
                href="/signup" 
                className="btn-primary py-1.5 px-3 text-sm flex-1 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
