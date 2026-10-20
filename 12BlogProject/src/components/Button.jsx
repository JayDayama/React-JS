import React from 'react'

// harr baar naya button kyu banana aur nayi class kyu banana uske liye
function Button({
    // kya kya parameter accept kar rhe hai aur unke usage ka tarika
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg 
    ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button