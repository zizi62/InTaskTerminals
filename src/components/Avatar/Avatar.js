import React  from 'react'
import { makeStyles, Paper, Avatar as MuiAvatar} from '@material-ui/core'



const useStyles = makeStyles(theme =>({
    root: {
       
    }
}))

const Avatar = (props) => {

    const {avatarLink} = props
  
   
    return (
        <MuiAvatar alt="avatar" src={avatarLink}  />

    )
}

export default Avatar