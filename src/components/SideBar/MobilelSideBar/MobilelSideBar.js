import React from 'react';
import { Menu, MenuItem, makeStyles, IconButton } from '@material-ui/core'
import { TERMINALS_PATH, BUYERS_PATH } from '../../Routes'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles(theme => ({
  root: {
    // backgroundColor:'#fff',

  }, menu: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  }

}))

const MobilelSideBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyle()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton}
        color="inherit" aria-label="menu"
        className={classes.menu} onClick={handleClick}
        aria-controls="simple-menu" aria-haspopup="true"><MenuIcon /></IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to={TERMINALS_PATH} className={classes.link} activeClassName={classes.activeLink}>
            Terminals
        </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to={BUYERS_PATH} >Byers</NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MobilelSideBar