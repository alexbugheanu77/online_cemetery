'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaUpload, FaArrowLeft } from 'react-icons/fa';
import MainLayout from '@/components/layout/MainLayout';
import { useAuth } from '@/lib/context/AuthContext';
import { createMemorial } from '@/lib/db/firestore';
import Loading from '@/components/ui/Loading';

export default function CreateMemorialPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    deathDate: '',
    biography: '',
    epitaph: '',
    location: '',
    causeOfDeath: '',
  });
  const [memorialImage, setMemorialImage] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [memorialPreview, setMemorialPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  if (loading) {
    return <Loading fullScreen message="Loading..." />;
  }

  if (!user) {
    router.push('/login?redirect=memorials/create');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMemorialImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMemorialImage(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setMemorialPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    try {
      // In a real app, you would upload the images to storage and get the URLs
      // For now, we'll just create the memorial with placeholder image URLs
      const newMemorial = {
        ...formData,
        createdBy: user.uid,
        imageUrl: '/images/placeholder.jpg', // This would be the uploaded image URL
        coverImageUrl: '/images/placeholder.jpg', // This would be the uploaded cover image URL
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      const memorialId = await createMemorial(newMemorial);
      router.push(`/memorials/${memorialId}`);
    } catch (error) {
      console.error('Error creating memorial:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <button 
              onClick={() => router.back()}
              className="mr-4 text-gray-400 hover:text-white"
            >
              <FaArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-3xl font-bold text-white">Create Memorial</h1>
          </div>
          
          <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden mb-8">
            <div className="p-6 border-b border-slate-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${currentStep >= 1 ? 'bg-indigo-600' : 'bg-slate-700'} mr-2`}>
                    <span className="text-white font-medium">1</span>
                  </div>
                  <span className="text-white font-medium">Basic Information</span>
                </div>
                <div className="h-1 w-12 bg-slate-700"></div>
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-slate-700'} mr-2`}>
                    <span className="text-white font-medium">2</span>
                  </div>
                  <span className="text-white font-medium">Biography & Details</span>
                </div>
                <div className="h-1 w-12 bg-slate-700"></div>
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${currentStep >= 3 ? 'bg-indigo-600' : 'bg-slate-700'} mr-2`}>
                    <span className="text-white font-medium">3</span>
                  </div>
                  <span className="text-white font-medium">Photos</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="birthDate" className="block text-sm font-medium text-gray-300 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="deathDate" className="block text-sm font-medium text-gray-300 mb-2">
                      Date of Death *
                    </label>
                    <input
                      type="date"
                      id="deathDate"
                      name="deathDate"
                      value={formData.deathDate}
                      onChange={handleChange}
                      className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State, Country"
                      className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="causeOfDeath" className="block text-sm font-medium text-gray-300 mb-2">
                      Cause of Death
                    </label>
                    <input
                      type="text"
                      id="causeOfDeath"
                      name="causeOfDeath"
                      value={formData.causeOfDeath}
                      onChange={handleChange}
                      className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="biography" className="block text-sm font-medium text-gray-300 mb-2">
                      Biography *
                    </label>
                    <textarea
                      id="biography"
                      name="biography"
                      value={formData.biography}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    ></textarea>
                    <p className="mt-1 text-sm text-gray-400">
                      Share the story of their life, accomplishments, and what made them special.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="epitaph" className="block text-sm font-medium text-gray-300 mb-2">
                      Epitaph
                    </label>
                    <textarea
                      id="epitaph"
                      name="epitaph"
                      value={formData.epitaph}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                    <p className="mt-1 text-sm text-gray-400">
                      A short, meaningful phrase or quote to remember them by.
                    </p>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-transparent hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">
                      Memorial Photo
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="relative h-40 w-40 rounded-lg overflow-hidden bg-slate-700 border border-dashed border-slate-600">
                        {memorialPreview ? (
                          <Image
                            src={memorialPreview}
                            alt="Memorial preview"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full p-4">
                            <FaUpload className="h-8 w-8 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-400 text-center">Upload a photo</p>
                          </div>
                        )}
                        <input
                          type="file"
                          id="memorial-image"
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleMemorialImageChange}
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Main Memorial Photo</p>
                        <p className="text-sm text-gray-400">
                          This will be the main photo displayed on the memorial page. Ideally a portrait or close-up of the person.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">
                      Cover Photo
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="relative h-40 w-40 rounded-lg overflow-hidden bg-slate-700 border border-dashed border-slate-600">
                        {coverPreview ? (
                          <Image
                            src={coverPreview}
                            alt="Cover preview"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full p-4">
                            <FaUpload className="h-8 w-8 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-400 text-center">Upload a photo</p>
                          </div>
                        )}
                        <input
                          type="file"
                          id="cover-image"
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleCoverImageChange}
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Cover Photo</p>
                        <p className="text-sm text-gray-400">
                          This will appear as a banner at the top of the memorial page. Choose a meaningful landscape or group photo.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-transparent hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Creating...' : 'Create Memorial'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
