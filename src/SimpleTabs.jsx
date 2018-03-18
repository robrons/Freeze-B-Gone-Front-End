import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GardenIcon from 'material-ui-icons/LocalFlorist';
import KitchenIcon from 'material-ui-icons/Kitchen';
import BathRoomIcon from 'material-ui-icons/HotTub';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <GardenIcon/> />
          </ListItemIcon>
          <ListItemText primary="Garden" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary="Kitchen" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BathRoomIcon />
          </ListItemIcon>
          <ListItemText primary="BathRoom" />
        </ListItem>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);

