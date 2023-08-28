import { useState, useEffect } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)
    })
    
    return {loggedIn, checkingStatus}
}