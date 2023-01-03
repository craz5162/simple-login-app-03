import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Fairbase/Fairbase.int';


 export const AuthContext = createContext()

 const auth = getAuth(app);

const UserContext = ({children}) => {

      // const [user, setUser] = useState({displayName : "ariful islam arfat"});
      const [user, setUser] = useState({});
      const [loding, setLoding] = useState(true)

      const userRegister = (email, password) =>{
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const userLogin = (email, password) =>{
            return signInWithEmailAndPassword(auth, email, password);
      }

      const logout = () =>{
            return signOut(auth)
      }

      useEffect ( ()=>{
            const unSubscrib = onAuthStateChanged(auth, CurrentUser=>{
                  setUser(CurrentUser);
                  setLoding(false)
            })

            return ()=>{
                  unSubscrib()
            }

      },[])

      const authInfo = {user, loding,  userRegister, userLogin, logout}

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default UserContext;