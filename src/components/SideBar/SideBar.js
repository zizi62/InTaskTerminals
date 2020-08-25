import React from 'react'
import { makeStyles } from '@material-ui/core'
import { TERMINALS_PATH, BUYERS_PATH } from '../Routes'
import { NavLink } from 'react-router-dom'
import AvatarContainer from '../Avatar/AvatarContainer'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        minHeight: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    link: {
        padding: theme.spacing(2),
        marginBottom: '2px',
        backgroundColor: '#0d47a1',
        color: '#ffffff',
        textTransform: 'uppercase',
        textAlign: 'center',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#e3f2fd',
            color: '#0d47a1',
            fontWeight: '800'
        }

    },
    activeLink: {
        backgroundColor: '#ffffff',
        color: '#0d47a1',
        fontWeight: '800',
        borderRight: '3px solid #880e4f'
    },
    avatar: {
        position: 'absolute',
        top: 16,
        left: '50%',
        transform: `translate(-50%, -0%)`
    }
}))

const SideBar = (props) => {
    const classes = useStyles()

    console.log('SideBar')
    return (
        <div className={classes.root}>
            <div className={classes.avatar} ><AvatarContainer /></div>
            <NavLink to={TERMINALS_PATH} className={classes.link} activeClassName={classes.activeLink}>
                Terminals
        </NavLink>
            <NavLink className={classes.link} to={BUYERS_PATH} activeClassName={classes.activeLink} >Byers</NavLink>
        </div>
    )
}


export default SideBar