import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles({
    maintopmargin:{
        marginTop: "10rem",
        height: "71vh",
        width: "100%",
        display: "grid",
        placeItems: "center",
        fontSize: "3rem",
        textAlign: "center"
    }
})


const ErorPg = () => {

    const classes = useStyles();

    return (
        <div className={classes.maintopmargin}>
            OOPs this is 404 page <br />
            where you want to go? Please check links in Navbar.
        </div>
    )
}

export default ErorPg;