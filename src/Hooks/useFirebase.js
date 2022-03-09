import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebaseInit';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Create Account with email & password
  const createWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update Name
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };
  // Sign in with Email and Password
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google Account
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Sign in with Facebook Account

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }

      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    fetch(`https://fathomless-springs-87004.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [user.email]);
  return {
    user,
    admin,
    setUser,
    isLoading,
    setIsLoading,
    createWithEmailAndPassword,
    updateName,
    signInWithEmail,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
