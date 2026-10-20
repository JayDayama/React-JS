import React , {useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

// It is just a container
// we will conditionally check if we need to render its children or not
export default function Protected({children,authentication = true}) {

    const navigate = useNavigate()
    const [loader , setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // authStatus -> u are authenticated or not
        // TODO : Make it understandable
        // given authentication = true

        // we see that mainly our login status heavily depends on authentication
        if(authentication && authStatus !== authentication){
            // this means u are not authenticated(authStatus = false)
            // hence navigate to login
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/") // -> '/' navigates us back to root
        }
        setLoader(false)
    } , [authStatus,navigate,authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
