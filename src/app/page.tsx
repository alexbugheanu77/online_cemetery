import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaUsers, FaTree } from "react-icons/fa";
import { GiCandles } from "react-icons/gi";

export default function Home() {
  return (
    <div className="flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed-header">
        <div className="container">
          <Link href="/" className="logo">
            <GiCandles className="candle-icon candle-flame" />
            <span className="logo-text font-playfair">Eternal Memory</span>
          </Link>
          <nav className="main-nav">
            <Link href="/memorials" className="nav-link">Memorials</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>
          <div className="auth-buttons">
            <Link href="/login" className="btn-outline">Log In</Link>
            <Link href="/signup" className="btn-primary">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title font-playfair">
            Honor Their Memory Forever
          </h1>
          <p className="hero-subtitle">
            Create beautiful digital memorials for your loved ones. Share memories, light candles, and keep their legacy alive in the digital world.
          </p>
          <div className="hero-buttons">
            <Link href="/signup" className="btn-primary">
              Create a Memorial
            </Link>
            <Link href="/memorials" className="btn-outline">
              Browse Memorials
            </Link>
          </div>
          <div className="hero-image-container">
            <Image 
              src="/hero-memorial.jpg" 
              alt="Digital Memorial Example" 
              fill
              className="hero-image"
              priority
            />
            <div className="hero-overlay"></div>
            <div className="hero-caption">
              <div className="memorial-label">
                In loving memory
              </div>
              <h3 className="memorial-name font-playfair">Elizabeth Anne Johnson</h3>
              <p className="memorial-dates">1945 - 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title font-playfair">
            Honor Their Memory, Preserve Their Legacy
          </h2>
          <div className="features-grid">
            <div className="memorial-card text-center">
              <div className="feature-icon-container">
                <GiCandles className="feature-icon" />
              </div>
              <h3 className="feature-title font-playfair">Digital Memorials</h3>
              <p className="feature-description">Create beautiful, personalized memorials with photos, videos, and stories that can be shared with family and friends.</p>
            </div>
            <div className="memorial-card text-center">
              <div className="feature-icon-container">
                <FaUsers className="feature-icon" />
              </div>
              <h3 className="feature-title font-playfair">Community Tributes</h3>
              <p className="feature-description">Allow friends and family to share memories, light virtual candles, and leave messages of condolence.</p>
            </div>
            <div className="memorial-card text-center">
              <div className="feature-icon-container">
                <FaTree className="feature-icon" />
              </div>
              <h3 className="feature-title font-playfair">Family Trees</h3>
              <p className="feature-description">Connect memorials to create digital family trees, preserving your family history for generations to come.</p>
            </div>
            <div className="memorial-card text-center">
              <div className="feature-icon-container">
                <FaSearch className="feature-icon" />
              </div>
              <h3 className="feature-title font-playfair">Memorial Search</h3>
              <p className="feature-description">Easily find and visit memorials through our comprehensive search and category system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title font-playfair">What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Creating a memorial for my grandmother helped our family come together and share memories we had forgotten. It's become a place we visit often to remember her."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image-container">
                  <Image 
                    src="/testimonial-1.jpg" 
                    alt="Sarah M." 
                    width={50} 
                    height={50} 
                    className="author-image"
                  />
                </div>
                <div>
                  <h4 className="author-name">Sarah M.</h4>
                  <p className="author-relation">Memorial Creator</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I was able to contribute to my uncle's memorial even though I live overseas. Being able to light a candle and leave a message meant so much to me."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image-container">
                  <Image 
                    src="/testimonial-2.jpg" 
                    alt="Michael T." 
                    width={50} 
                    height={50} 
                    className="author-image"
                  />
                </div>
                <div>
                  <h4 className="author-name">Michael T.</h4>
                  <p className="author-relation">Family Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title font-playfair">Create a Lasting Digital Memorial Today</h2>
          <p className="cta-description">
            Honor your loved ones with a beautiful online memorial that preserves their memory for generations to come.
          </p>
          <Link href="/signup" className="btn-primary cta-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <GiCandles className="candle-icon candle-flame" />
                <span className="logo-text font-playfair">Eternal Memory</span>
              </Link>
              <p className="footer-tagline">Preserving memories in the digital age</p>
            </div>
            <div className="footer-links">
              <div className="footer-links-column">
                <h3 className="footer-links-title">Platform</h3>
                <ul>
                  <li><Link href="/memorials">Browse Memorials</Link></li>
                  <li><Link href="/create">Create Memorial</Link></li>
                  <li><Link href="/features">Features</Link></li>
                  <li><Link href="/pricing">Pricing</Link></li>
                </ul>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-links-title">Company</h3>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/press">Press</Link></li>
                </ul>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-links-title">Resources</h3>
                <ul>
                  <li><Link href="/help">Help Center</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/guides">Guides</Link></li>
                  <li><Link href="/support">Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright"> {new Date().getFullYear()} Eternal Memory. All rights reserved.</p>
            <div className="footer-legal">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
