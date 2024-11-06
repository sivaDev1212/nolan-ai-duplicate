// authFunctions.ts
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const signUp = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential.user);
  } catch (error: any) {
    console.error('Error signing up:', error.message);
  }
};

export const login = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
  } catch (error: any) {
    console.error('Error logging in:', error.message);
  }
};
