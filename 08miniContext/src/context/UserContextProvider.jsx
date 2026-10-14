import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    // children ko as it is use kar lo (outlet jaisa)
    return(
        // access kya dena hai therfore : value = {}
        <UserContext.Provider value = {{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider