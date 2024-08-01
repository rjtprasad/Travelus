import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const ContextProvider = (props) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [profileUrl, setProfileUrl] = useState(null)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) { 
      setIsSignIn(true)
      setProfileUrl(user.picture)
    }
  },[isSignIn])

  return (
    <UserContext.Provider value={{ isSignIn, setIsSignIn, profileUrl, setProfileUrl}}>
      {props.children}
    </UserContext.Provider>
  );
};
