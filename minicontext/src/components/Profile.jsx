import React ,{useContext}from 'react'
import UserContext from '../assets/Context/UserContext'
function Profile() {

    const {user} = useContext(UserContext)
  
    if (!user) return<div>Please login</div>

    return<div>Welocmoe : {user.username}</div>
}

export default Profile
