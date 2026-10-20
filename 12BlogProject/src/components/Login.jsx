import React , {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'  // login -> authLogin (use)
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handleSubmit} = useForm()
    // handleSubmit is a method/event where we give it our own method on how to handle the submit . then : 
    // when we use this register in the input fields we will not have to manage the state of picked values it will pick the values on its own and during handleSubmit it will take the value(the input field will take this automatically) automatically
    // like we will not have to write a onchange handler using usestate for every input field
    const [error , setError] = useState("")
    
    const login = async (data) => {
        setError("")  // submission tak toh errors clean ho hi jane chahiye the clean kardo manually unhe
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))//if logged in then redirect user
                navigate("/") // (navigate to root)
            }
        } catch (error) {
            setError(error.message)  // -> error saved in the state
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">
                Sign In to your account
            </h2>
            {/* one does not have an account so redirect him to sign up */}
            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input 
                    label = "Email: "
                    placeholder = "Enter Your email"
                    type = "email"
                    // ...register is necessary else in every input field the register will over write values of each field
                    {...register("email" , {
                        // email is the key over here
                        // options :
                        required : true,
                        validate : {
                            // if the value recieved match then do as per:
                            matchPatern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                    <Input 
                    label = "Password: "
                    placeholder = "Enter your Password"
                    type = "password"
                    {...register("password" , {
                        required : true,
                    })}
                    />
                    <Button
                    type = "submit"
                    className = "w-full"
                    >Sign In</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login