import React, { createContext, useContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext(null);

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
 

