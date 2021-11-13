import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();
    const [admin, setAdmin] = useState(false);

    // Create User
    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                // Save User
                saveUser(email, name);

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

    // Admin
    useEffect(() => {
        fetch(`https://whispering-everglades-34016.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    // Save User Into Database
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch("https://whispering-everglades-34016.herokuapp.com/users", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



    return {
        user,
        admin,
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