import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import firebase from 'firebase';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

var state = {
  open: false,
}

function toggleDrawer() {

  state.open = !state.open;
  console.log(state.open);

};

function handleClose() {
  firebase.auth().signOut();
};

function ButtonAppBar(props) {
  const { classes } = props;
  if (props.logout) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Freeze-B-Gone
          </Typography>
            <Button onClick={handleClose} color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={state.open} onClose={toggleDrawer()}>
          <div
            role="button"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
          >
          About
          </div>
        </Drawer>
  
      
      </div>
    );
  } else {
    return (

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Freeze-B-Gone
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );

  }
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
