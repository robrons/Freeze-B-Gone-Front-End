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

class ButtonAppBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      logout: props.logout
    }

    this.toggleDrawer = () => {

      this.setState({ open: !this.state.open });

    };


    this.handleClose = () => {

      firebase.auth().signOut();

    };

  }

  render() {
    const { classes } = this.props;
    if (this.state.logout) {
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Freeze-B-Gone
          </Typography>
              <Button onClick={this.handleClose} color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.open} onClose={this.toggleDrawer}>
            <div
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}
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
              <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
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
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
