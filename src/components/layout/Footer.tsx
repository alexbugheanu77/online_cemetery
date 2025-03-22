import Link from 'next/link';
import { GiCandles } from 'react-icons/gi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GiCandles className="text-yellow-300 h-5 w-5 candle-flame" />
              <span className="text-lg font-serif font-bold text-white">Eternal Memory</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Preserving memories and honoring loved ones in the digital age.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/memorials" className="text-gray-400 hover:text-white transition">Browse Memorials</Link></li>
              <li><Link href="/create" className="text-gray-400 hover:text-white transition">Create a Memorial</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing Plans</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="text-gray-400 hover:text-white transition">Help Center</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest features and news.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="input text-sm flex-1" />
              <button type="submit" className="btn-primary text-sm ml-2">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Eternal Memory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
