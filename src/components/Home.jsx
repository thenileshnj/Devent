import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
// import { FavoriteIcon, ShareIcon } from "@material-ui/icons"
import React, { useEffect, useState } from "react";
import { db } from "../firebase_config";

const useStyles = makeStyles({
  maintopmargin: {
    boxSizing: "border-box",
    marginTop: "10rem ",
  },
  eventGridMain: {
    marginTop: "6rem",
  },
  topTagLine: {
    display: "grid",
    placeItems: "center"
  },
  eHeader: {
    fontSize: "2rem",
    fontWeight: "bolder"
  },
  edesc: {
    fontSize: "1.7rem",
    fontWeight: "bolder"
  },
  eWhoApply: {
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  button: {
    margin: "1rem 2rem",
  },
});

const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    displayFilteredEvents();
  }, []);

  const [filteredEvents, setfilteredEvents] = useState([]);

  const displayFilteredEvents = () => {
    db.collection("deventLists").onSnapshot((getSnap) => {
      setfilteredEvents(
        getSnap.docs.map((doc) => ({
          id: doc.id,
          eventName: doc.data().eventName,
          eventDescription: doc.data().eventDescription,
          eventWhoApply: doc.data().eventWhoApply,
          eventConMob: doc.data().eventConMob,
          eventConMail: doc.data().eventConMail,
          eventLink: doc.data().eventLink,
          eventDate: doc.data().eventDate,
        }))
      );
    });
    
  };


  return (
    <>
      <Container className={classes.maintopmargin}>
        <Box>
          <Typography className={classes.topTagLine} variant="h3">
            Devent - Events for Developers
          </Typography>
        </Box>
        <Grid className={classes.eventGridMain} container spacing={7}>
          {filteredEvents.map((e) => {
            return (
              <>
                <Grid
                  key={e.id}
                  container
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  xl={4}
                  spacing={3}
                >
                  <Card className={classes.root}>
                    <CardHeader
                      className={classes.eHeader}
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          <GitHubIcon />
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={e.eventName}
                      subheader={e.eventDate}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.edesc}
                      >
                        {e.eventDescription}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        component="h3"
                      >
                        Who can Apply:
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.eWhoApply}
                      >
                        {e.eventWhoApply}
                      </Typography>
                      <Typography variant="body1">
                        <ButtonGroup>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<MailIcon />}
                          >
                            {e.eventConMail}
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<PhoneIcon />}
                          >
                            {e.eventConMob}
                          </Button>
                        </ButtonGroup>
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton>
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton>
                        <ShareIcon />
                      </IconButton>
                      <IconButton>
                        <Button
                          variant="contained"
                          color="secondary"
                          disableElevation
                          className={classes.button}
                          startIcon={<TouchAppIcon disableElevation />}
                        >
                          <a
                            href={e.eventLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Apply Now
                          </a>
                        </Button>
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;