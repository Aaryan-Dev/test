import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
const RequireAuthRoute = ({children}) => {
    const {isAuth}=useSelector((state)=>state.Authreducer)
    if(isAuth){
        return (children)
    }
    else{
        return <Navigate to ="/login"></Navigate>
    }
  
}

export default RequireAuthRoute