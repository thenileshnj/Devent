import { makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    mainFooter: {
        marginBottom: "none",
        position: "stickey",
        bottom: "0",
        marginTop: "5rem",
        width: "100vw",
        color: "#fff",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

const FooterBar = () => {

    const classes = useStyles();

    return (
        <>
          <div className={classes.mainFooter}  position="fixed">
              <Toolbar>
                  <Typography variant="h3">Made by Nilesh Nj</Typography>
              </Toolbar>
              </div>  
        </>
    )
}

export default FooterBar;