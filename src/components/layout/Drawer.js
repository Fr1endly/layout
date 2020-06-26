import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { closeDrawer } from "../../actions/layout";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const mapStateToProps = (state) => ({
  open: state.layout.open,
});

export default connect(mapStateToProps, { closeDrawer })(
  ({ open, closeDrawer }) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [listOpen, setListOpen] = React.useState(false);

    const handleClick = () => {
      setListOpen(!listOpen);
    };

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    const handleDrawerClose = () => {
      closeDrawer();
    };

    const sideList = (side) => (
      <div
        className={classes.list}
        role="presentation"
        //onClick={toggleDrawer(side, false)}
        onKeyDown={handleDrawerClose}
      >
        <List>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="News" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="Documentation" />
            {listOpen ? (
              <ExpandLess onClick={(e) => handleClick()} />
            ) : (
              <ExpandMore onClick={(e) => handleClick()} />
            )}
          </ListItem>
          <Collapse in={listOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="CHAPTER 1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="CHAPTER 2" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="CHAPTER 3" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Planner" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="Forum" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={open} onClose={handleDrawerClose}>
          {sideList("left")}
        </Drawer>
      </div>
    );
  }
);
