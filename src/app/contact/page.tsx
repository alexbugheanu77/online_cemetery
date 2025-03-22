import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import MainLayout from '@/components/layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you create a meaningful memorial for your loved one. Reach out to us with any questions or concerns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-600/20 rounded-full p-4">
                  <FaEnvelope className="h-6 w-6 text-indigo-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-4">
                For general inquiries and support
              </p>
              <a href="mailto:support@eternalmemory.com" className="text-indigo-400 hover:text-indigo-300 transition">
                support@eternalmemory.com
              </a>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-600/20 rounded-full p-4">
                  <FaPhone className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">
                Monday-Friday, 9am-5pm EST
              </p>
              <a href="tel:+18005551234" className="text-indigo-400 hover:text-indigo-300 transition">
                +1 (800) 555-1234
              </a>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600/20 rounded-full p-4">
                  <FaMapMarkerAlt className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Office</h3>
              <p className="text-gray-300 mb-4">
                Our headquarters
              </p>
              <address className="text-indigo-400 not-italic">
                123 Memory Lane<br />
                Boston, MA 02110<br />
                United States
              </address>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">How quickly will I receive a response?</h3>
                <p className="text-gray-300">
                  We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.
                </p>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer in-person consultations?</h3>
                <p className="text-gray-300">
                  Yes, we offer in-person consultations at our Boston office by appointment. Please contact us to schedule a meeting.
                </p>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Can I get help with creating a memorial?</h3>
                <p className="text-gray-300">
                  Absolutely. Our team can provide guidance and assistance with creating a memorial. We also offer a concierge service for Premium and Lifetime plan members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
