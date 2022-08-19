import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


function ProtactRoute({ component }) {


    let { isUser } = useSelector(state => state.user)
    console.log(isUser);
    if (!isUser) {
        return <Navigate to="/" />
    }
    else {
        return component
    }
}

export default ProtactRoute