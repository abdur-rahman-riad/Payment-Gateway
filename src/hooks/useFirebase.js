import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();

    // Create User
    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                const newUser = { email, displayName: name };
                setUser(newUser);


                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                console.log(user);
                setError('Successfully Account Created');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Email/Password Login
    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("Successfully Login");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // Google Sign In
    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }


    // User State Change Observe
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubcribed;
    }, []);

    // Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }



    return {
        user,
        setUser,
        googleSignIn,
        logOut,
        isLoading,
        setIsLoading,
        registerUser,
        loginUser,
        error,
        setError
    }
}

export default useFirebase;