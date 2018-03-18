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
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
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

    this.state = {
      open: [0],
    };

    this.handleClick = value => () => {
      const { open } = this.state;
      const currentIndex = open.indexOf(value);
      const newOpen = [...open];
      this.setState({ open: !this.state.open });

      if (currentIndex === -1) {
        newOpen.push(value);
      } else {
        newOpen.splice(currentIndex, 1);
      }
  
      this.setState({
        open: newOpen,
      });

    };
  

    }
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Devices</ListSubheader>}
        >
      
          <ListItem button onClick={this.handleClick(0)}>
            <ListItemIcon>
             <GardenIcon  /> 
            </ListItemIcon>
            <ListItemText inset primary="Garden" secondary="21 °C"/>
            {this.state.open.indexOf(0) !== -1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open.indexOf(0) !== -1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={this.handleClick(1)}>
            <ListItemIcon>
            <BathRoomIcon />
            </ListItemIcon>
            <ListItemText inset primary="BathRoom" secondary="20 °C" />
            {this.state.open.indexOf(1) !== -1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open.indexOf(1) !== -1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={this.handleClick(2)}>
            <ListItemIcon>
              <KitchenIcon />
            </ListItemIcon>
            <ListItemText inset primary="Kitchen" secondary="22 °C" />
            {this.state.open.indexOf(2) !== -1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open.indexOf(2) !== -1} timeout="auto" unmountOnExit>
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
