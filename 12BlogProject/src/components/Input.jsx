import React , {useId} from 'react'

const Input = React.forwardRef( function Input({
    // kya kya lene wale ho input field mei
    label,
    type = "text",
    className = "",
    ...props
    // ref is for anyone using the field will require the refrence
} , ref ){
    const id = useId() // -> unique id generated
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>
                {label}
            </label>
            }
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full 
            ${className}`}
            ref={ref}
            // input field ko user se mila hua refrence de rhe hai toh humari correct wali input field select ho jayegi
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input