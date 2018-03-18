import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GardenIcon from 'material-ui-icons/LocalFlorist';
import KitchenIcon from 'material-ui-icons/Kitchen';
import BathRoomIcon from 'material-ui-icons/HotTub';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';
import StarBorder from 'material-ui-icons/StarBorder';
import ListSubheader from 'material-ui/List/ListSubheader';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {

  constructor() {
    super()

    this.state = { open: true };

    this.handleClick = () => {
      this.setState({ open: !this.state.open });
    };
    }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Devices</ListSubheader>}
        >
          <ListItem button>
            <ListItemIcon>
             <GardenIcon  /> 
            </ListItemIcon>
            <ListItemText inset primary="Garden" secondary="21 °C"/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <KitchenIcon />
            </ListItemIcon>
            <ListItemText inset primary="Kitchen" secondary="22 °C" />
          </ListItem>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
            <BathRoomIcon />
            </ListItemIcon>
            <ListItemText inset primary="BathRoom" secondary="20 °C" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>

        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
