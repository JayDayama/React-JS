import React from 'react'

function Container({children}) {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
    // <Container> iss component ke andar sab log container ke rules(design rules) follow karnege
  
}

export default Container