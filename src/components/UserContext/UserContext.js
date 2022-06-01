import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "Jannatul ferdous papry", email: "papry@gmail.com" , position: "Full stack web Developer", salary: 48000 },
    { id: 2, name: "Sourav Shuvo", email: "shuvo@gmail.com" , position: "Full stack web developer", salary: 49000 },
    { id: 3, name: "Tanjila", email: "tanjila@gmail.com" , position: "Front end web Dev", salary: 27000 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};