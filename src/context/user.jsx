// context is a kind of storage place accessible from all the components

import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});


export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // this listener allow to centralize for user control
  // and remove useContext in components like signin, signup, navigation
  // listeners have a next callbac, an error callbac, a complete callbac

  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return unsubscribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
} 