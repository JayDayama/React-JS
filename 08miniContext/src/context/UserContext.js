import React from 'react'

// context mujhe variable(global) provide hi toh kar rha hai
// context gives a major thing called provider

const UserContext = React.createContext()

export default UserContext;

// abb saare inner components ko iss global UserContext(variable) ka access mil jayega jisse woh saari states ka access kar skte hai
// we have control over who has the access and who doesnt
{/* <UserContext>
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext> */}