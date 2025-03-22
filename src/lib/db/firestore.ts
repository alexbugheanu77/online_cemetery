import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  Timestamp,
  DocumentData,
  addDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { Memorial, Tribute, User, FamilyConnection } from './schema';

// Convert Firestore timestamp to Date
export const fromFirestore = (data: DocumentData) => {
  const result: any = { ...data };
  
  // Convert all timestamp fields to Date objects
  Object.keys(result).forEach((key) => {
    if (result[key] instanceof Timestamp) {
      result[key] = result[key].toDate();
    }
  });
  
  return result;
};

// User functions
export async function createUser(userId: string, userData: Partial<User>): Promise<void> {
  const userRef = doc(db, 'users', userId);
  
  await setDoc(userRef, {
    ...userData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    subscription: 'free',
  });
}

export async function getUser(userId: string): Promise<User | null> {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) {
    return null;
  }
  
  return {
    id: userSnap.id,
    ...fromFirestore(userSnap.data()),
  } as User;
}

export async function updateUser(userId: string, userData: Partial<User>): Promise<void> {
  const userRef = doc(db, 'users', userId);
  
  await updateDoc(userRef, {
    ...userData,
    updatedAt: serverTimestamp(),
  });
}

// Memorial functions
export async function createMemorial(memorialData: Partial<Memorial>): Promise<string> {
  const memorialsRef = collection(db, 'memorials');
  const newMemorialRef = doc(memorialsRef);
  
  await setDoc(newMemorialRef, {
    ...memorialData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  
  return newMemorialRef.id;
}

export async function getMemorial(memorialId: string): Promise<Memorial | null> {
  const memorialRef = doc(db, 'memorials', memorialId);
  const memorialSnap = await getDoc(memorialRef);
  
  if (!memorialSnap.exists()) {
    return null;
  }
  
  return {
    id: memorialSnap.id,
    ...fromFirestore(memorialSnap.data()),
  } as Memorial;
}

export async function updateMemorial(memorialId: string, memorialData: Partial<Memorial>): Promise<void> {
  const memorialRef = doc(db, 'memorials', memorialId);
  
  await updateDoc(memorialRef, {
    ...memorialData,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteMemorial(memorialId: string): Promise<void> {
  const memorialRef = doc(db, 'memorials', memorialId);
  await deleteDoc(memorialRef);
}

export async function getMemorialsByUser(userId: string): Promise<Memorial[]> {
  const memorialsRef = collection(db, 'memorials');
  const q = query(
    memorialsRef,
    where('createdById', '==', userId),
    orderBy('createdAt', 'desc')
  );
  
  const querySnapshot = await getDocs(q);
  const memorials: Memorial[] = [];
  
  querySnapshot.forEach((doc) => {
    memorials.push({
      id: doc.id,
      ...fromFirestore(doc.data()),
    } as Memorial);
  });
  
  return memorials;
}

export async function getUserMemorials(userId: string): Promise<Memorial[]> {
  return getMemorialsByUser(userId);
}

export async function getPublicMemorials(limitCount: number = 20): Promise<Memorial[]> {
  const memorialsRef = collection(db, 'memorials');
  const q = query(
    memorialsRef,
    where('isPublic', '==', true),
    orderBy('createdAt', 'desc'),
    limit(limitCount)
  );
  
  const querySnapshot = await getDocs(q);
  const memorials: Memorial[] = [];
  
  querySnapshot.forEach((doc) => {
    memorials.push({
      id: doc.id,
      ...fromFirestore(doc.data()),
    } as Memorial);
  });
  
  return memorials;
}

// Tribute functions
export async function addTribute(tributeData: Partial<Tribute>): Promise<string> {
  const tributesRef = collection(db, 'tributes');
  const newTributeRef = await addDoc(tributesRef, {
    ...tributeData,
    createdAt: serverTimestamp(),
  });
  
  return newTributeRef.id;
}

export async function createTribute(tributeData: Partial<Tribute>): Promise<string> {
  return addTribute(tributeData);
}

export async function getTributesByMemorial(memorialId: string): Promise<Tribute[]> {
  const tributesRef = collection(db, 'tributes');
  const q = query(
    tributesRef,
    where('memorialId', '==', memorialId),
    orderBy('createdAt', 'desc')
  );
  
  const querySnapshot = await getDocs(q);
  const tributes: Tribute[] = [];
  
  querySnapshot.forEach((doc) => {
    tributes.push({
      id: doc.id,
      ...fromFirestore(doc.data()),
    } as Tribute);
  });
  
  return tributes;
}

export async function getMemorialTributes(memorialId: string): Promise<Tribute[]> {
  return getTributesByMemorial(memorialId);
}

// Family connection functions
export async function createFamilyConnection(connectionData: Partial<FamilyConnection>): Promise<string> {
  const connectionsRef = collection(db, 'familyConnections');
  const newConnectionRef = doc(connectionsRef);
  
  await setDoc(newConnectionRef, {
    ...connectionData,
    createdAt: serverTimestamp(),
  });
  
  return newConnectionRef.id;
}

export async function getMemorialFamilyConnections(memorialId: string): Promise<FamilyConnection[]> {
  const connectionsRef = collection(db, 'familyConnections');
  const q = query(
    connectionsRef,
    where('memorialId', '==', memorialId)
  );
  
  const querySnapshot = await getDocs(q);
  const connections: FamilyConnection[] = [];
  
  querySnapshot.forEach((doc) => {
    connections.push({
      id: doc.id,
      ...fromFirestore(doc.data()),
    } as FamilyConnection);
  });
  
  return connections;
}
