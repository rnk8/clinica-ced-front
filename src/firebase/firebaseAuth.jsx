import { Auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const register = (user, setUser) =>  {
    createUserWithEmailAndPassword(Auth, user.email, user.password)
    .then( res => {
        localStorage.setItem("user", JSON.stringify(res) || "");
        console.log(res);
        setUser(res);
    })
    .catch( err => {
        console.log(err);
        console.log("Error at create user");
    });
}

const login = (user, setUser) => {
    signInWithEmailAndPassword(Auth, user.email, user.password)
    .then( res => {
        localStorage.setItem("user", JSON.stringify(res) || "");
        setUser(res);
        console.log(res);
    }).catch( err => {
        console.log(err);
    });
}

const logOut = (setUser) => {
    signOut(Auth).then( res => {
        setUser(null);
        localStorage.setItem("user", "")
        console.log("user logout");
    }).catch( err => {
        localStorage.setItem("user", "")
        console.log("Error logout");
    });
}

const authState = (setUser, setLogged) => {
    onAuthStateChanged(Auth, (user) => {
        if(user){
            setUser(user);
            setLogged(true);
        } else
        {
            setUser(null);
            setLogged(false);
        }

    });
}

export const authProvider = {
    logOut,
    login,
    authState,
    register
}