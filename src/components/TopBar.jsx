import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  mainLogo: {
    fontSize: "4rem",
  },
  navLinks: {
    // color:"#fff",
  },
  navMenu: {
    width: "100vw",
    marginRight: "2rem !important",
    padding: "none",
  },
  navMenuList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    fontSize: "2rem",
  },
  navMenuListItem: {
    marginRight: "2rem",
  },
});

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <Typography color="inherit" variant="h3" className={classes.mainLogo}>
          <Link className={classes.navLinks} to="/">
          DEVENT 
          </Link>
        </Typography>
        <Typography color="inherit" className={classes.navMenu}>
          <ul className={classes.navMenuList}>
            <li className={classes.navMenuListItem}>
              <Link className={classes.navLinks} to="addevent" > Add EVENT </Link>
            </li>
            <li className={classes.navMenuListItem}>
              <Link className={classes.navLinks} to="admin" > Admin </Link>
            </li>
            <li className={classes.navMenuListItem}>
              <Link className={classes.navLinks} to="/about" > About </Link>
            </li>
          </ul>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
