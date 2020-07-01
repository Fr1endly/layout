import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { closeDrawer, selectListItem } from "../../actions/layout";
import { connect } from "react-redux";

const drawerWidth = 240;

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
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const mapStateToProps = (state) => ({
  open: state.layout.open,
  selectedIndex: state.layout.selectedListItem,
});

export default connect(mapStateToProps, { closeDrawer, selectListItem })(
  ({ open, closeDrawer, selectListItem, selectedIndex }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [listOpen, setListOpen] = React.useState(false);

    const handleClick = () => {
      setListOpen(!listOpen);
    };

    const handleListItemClick = (event, index) => {
      selectListItem(index);
    };

    const handleDrawerClose = () => {
      closeDrawer();
    };

    const sideList = (
      <div
        className={classes.list}
        role="presentation"
        //onClick={toggleDrawer(side, false)}
        onKeyDown={handleDrawerClose}
      >
        <List>
          <ListItem
            button
            selected={selectedIndex === "news"}
            onClick={(event) => handleListItemClick(event, "news")}
          >
            <ListItemText primary="News" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === "documentation"}
            onClick={(event) => handleListItemClick(event, "documentation")}
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
              <ListItem
                button
                className={classes.nested}
                selected={selectedIndex === "chapter1"}
                onClick={(e) => handleListItemClick(e, "chapter1")}
              >
                <ListItemText primary="CHAPTER 1" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                selected={selectedIndex === "chapter2"}
                onClick={(e) => handleListItemClick(e, "chapter2")}
              >
                <ListItemText primary="CHAPTER 2" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                selected={selectedIndex === "chapter3"}
                onClick={(e) => handleListItemClick(e, "chapter3")}
              >
                <ListItemText primary="CHAPTER 3" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            selected={selectedIndex === "planner"}
            onClick={(event) => handleListItemClick(event, "planner")}
          >
            <ListItemText primary="Planner" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === "forum"}
            onClick={(event) => handleListItemClick(event, "forum")}
          >
            <ListItemText primary="Forum" />
          </ListItem>
        </List>
      </div>
    );

    // const container =
    //   window !== undefined ? () => window().document.body : undefined;

    return (
      <nav className={classes.drawer}>
        <Hidden smDown implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={open}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {sideList}
          </Drawer>
        </Hidden>

        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {sideList}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
);

{
  /* <Drawer open={open} onClose={handleDrawerClose}>
          {sideList}
        </Drawer> */
}
