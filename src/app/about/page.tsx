import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import { FaHeart, FaUsers, FaTree } from 'react-icons/fa';
import { GiCandles } from 'react-icons/gi';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Eternal Memory</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Preserving memories and honoring loved ones in the digital age.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <div className="bg-slate-800 rounded-lg p-8 shadow-lg">
              <p className="text-gray-300 leading-relaxed mb-4">
                At Eternal Memory, we believe that everyone deserves to be remembered. Our mission is to create a digital space where memories can live on forever, allowing families and friends to honor and celebrate the lives of their loved ones who have passed away.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We understand that grief is a deeply personal journey, and our platform aims to provide comfort, connection, and a sense of continuity for those who are mourning. By creating digital memorials, we help preserve the stories, achievements, and legacies of those who are no longer with us.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our goal is to transform the way we remember our loved ones, making it possible to share memories across generations and geographical boundaries, ensuring that their stories continue to inspire and touch lives for years to come.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-600/20 rounded-full p-4">
                    <FaHeart className="h-8 w-8 text-indigo-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Compassion</h3>
                <p className="text-gray-300">
                  We approach our work with empathy and understanding, recognizing the sensitive nature of loss and grief.
                </p>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-600/20 rounded-full p-4">
                    <GiCandles className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Respect</h3>
                <p className="text-gray-300">
                  We honor the dignity of every life and create a respectful space for remembrance and reflection.
                </p>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-600/20 rounded-full p-4">
                    <FaUsers className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-gray-300">
                  We foster connections between people, creating a supportive community for sharing memories and support.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <div className="bg-slate-800 rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative h-60 w-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/placeholder.jpg"
                      alt="Founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Eternal Memory was founded in 2023 by a team of individuals who had personally experienced the loss of loved ones and recognized the need for a modern, digital approach to memorialization.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    After losing his grandfather and struggling to find a meaningful way to preserve his stories and legacy, our founder realized that traditional memorials were limited in their reach and accessibility. This sparked the idea for a digital platform that could bring together memories, photos, and tributes in one place, accessible to family and friends around the world.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Today, Eternal Memory has grown into a platform that serves thousands of families, helping them create lasting digital memorials that honor their loved ones and provide comfort during difficult times.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Join Us</h2>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Create a Memorial Today</h3>
              <p className="text-white mb-6">
                Honor your loved one with a beautiful digital memorial that preserves their memory for generations to come.
              </p>
              <a href="/signup" className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
