export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  location?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
  subscription?: 'free' | 'premium';
  subscriptionExpiresAt?: Date;
}

export interface Memorial {
  id: string;
  name: string;
  birthDate: Date;
  deathDate: Date;
  biography: string;
  epitaph?: string;
  imageUrl?: string;
  coverImageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
  isPublic: boolean;
  category?: string[];
  location?: string;
  causeOfDeath?: string;
}

export interface Tribute {
  id: string;
  memorialId: string;
  userId: string;
  userName: string;
  userPhotoURL?: string;
  type: 'candle' | 'flower' | 'message' | 'photo' | 'video' | 'heart';
  content?: string;
  mediaUrl?: string;
  createdAt: Date;
}

export interface FamilyConnection {
  id: string;
  memorialId: string;
  relatedMemorialId: string;
  relationship: 'parent' | 'child' | 'spouse' | 'sibling';
  createdAt: Date;
}

export interface AIMemory {
  id: string;
  memorialId: string;
  content: string;
  type: 'message' | 'story' | 'fact';
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'free' | 'premium';
  status: 'active' | 'canceled' | 'expired';
  startDate: Date;
  endDate: Date;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
}

export interface VirtualItem {
  id: string;
  type: 'flower' | 'candle' | 'badge';
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  isAvailable: boolean;
}
