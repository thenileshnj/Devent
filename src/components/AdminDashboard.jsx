import {
  Button,
  Container,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { db } from "../firebase_config";

const useStyles = makeStyles({
  maintopmargin: {
    marginTop: "10rem",
    fontSize: "14rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  eventTable: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
});

const AdminDashboard = () => {
  const classes = useStyles();

  const [events, setevents] = useState([]);

  useEffect(() => {
    displayEvents();
  }, []);

  const displayEvents = () => {
    db.collection("deventLists").onSnapshot((getSnap) => {
      setevents(
        getSnap.docs.map((doc) => ({
          id: doc.id,
          eventName: doc.data().eventName,
          // eventDescription: doc.data().eventDescription,
          eventWhoApply: doc.data().eventWhoApply,
          eventConMob: doc.data().eventConMob,
          eventConMail: doc.data().eventConMail,
          eventLink: doc.data().eventLink,
          eventDate: doc.data().eventDate,
        }))
      );
    });
  };

  const deleteEvent = (id) => {
    db.collection("deventLists").doc(id).delete();
    displayEvents();
  };



  return (
    <>
      <Container className={classes.maintopmargin}>
        <Typography variant="h2">
          Only have permission to admin of the system
        </Typography>
      </Container>
      <Container className={classes.eventTable} variant="body2">
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell> Event Name</TableCell>
              <TableCell> Event Date</TableCell>
              <TableCell> Contact Number</TableCell>
              <TableCell> Contact Mail</TableCell>
              <TableCell> Event Link</TableCell>
              <TableCell> Deleat </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => {
              return (
                <TableRow key={event.id}>
                  <TableCell> {event.eventName}</TableCell>
                  <TableCell>{event.eventDate}</TableCell>
                  <TableCell> {event.eventConMob}</TableCell>
                  <TableCell> {event.eventConMail}</TableCell>
                  <TableCell>
                    <a target="_blank" href={event.eventLink} rel="noreferrer">
                      Event Link
                    </a>
                  </TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={(id) => deleteEvent(event.id)}
                      color="secondary"
                      variant="contained"
                    >
                      Deleat
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      </Container>
    </>
  );
};

export default AdminDashboard;
