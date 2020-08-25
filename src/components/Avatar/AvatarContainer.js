import React from 'react'
import { makeStyles} from '@material-ui/core'
import {  useSelector } from 'react-redux'
import Avatar from './Avatar'


const useStyles = makeStyles(theme =>({
    root: {
       
    }
}))

const AvatarContainer = () => {

    const avatarLink = useSelector((state)=> state.loginPage.profile.avatar_url)
    const classes = useStyles()


    return (
 <Avatar avatarLink = {avatarLink}/>

    )
}

export default AvatarContainer