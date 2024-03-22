import React, { useContext, useEffect } from 'react'
import Landing from './Landing'
import { AppContext } from '../../context'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { data } from 'autoprefixer'
const LoggedIn = () => {

    const loggedInUser = localStorage.getItem("monkeyfi-loggedIn")

    const { login, currentUser, account, getUserAccount } = useContext(AppContext)
    const getOauthDetails = () => {
        const url = window.location.href;
        // Create a URLSearchParams object with the query parameters
        const params = new URLSearchParams(new URL(url).search);
        // Get the values of oauth_token and oauth_verifier
        const oauthToken = params.get("oauth_token");
        const oauthVerifier = params.get("oauth_verifier");
        return { oauth_token: oauthToken, oauth_verifier: oauthVerifier }
    }


    useEffect(() => {
        const data = getOauthDetails()
        if (data) {
            login(data)
        }

      


    }, [])

    useEffect(() => {
    
    }, [currentUser])

    useEffect(() => {
        const data = {x_id: JSON.parse(loggedInUser)?.x_id}
        getUserAccount(data)
     
    }, [])
    
    

    return (
        <Landing />
    )
}

export default LoggedIn