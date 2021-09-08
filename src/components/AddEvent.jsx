import React, { useState } from "react";
import { Button, Container,  FormControl,  FormGroup,  TextField,  Typography,  makeStyles,  Divider, } from "@material-ui/core";
import { db } from "../firebase_config";

const useStyles = makeStyles((theme) => ({
  maintopmargin:{
    marginTop: "10rem"
},
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    marginBottom: "2rem",
    fontWeight: "bolder",
    fontSize: "10rem !important"
  },
}));


const addEventValues = {
  eventName : "",
  eventDescription: "",
  eventWhoApply: "",
  eventConMob:"",
  eventConMail:"",
  eventLink:"",
  eventDate:"",
}


const AddEvent = () => {

  const [getValues, setgetValues] = useState(addEventValues);

  const classes= useStyles();

  const onValueChange = (e) => {
    setgetValues({...getValues, [e.target.name]: e.target.value});
    // console.log(getValues);
  }


  const pushEventValues = () =>{
    db.collection("deventLists").add({ 
      eventName: getValues.eventName,
  eventDescription: getValues.eventDescription,
  eventWhoApply: getValues.eventWhoApply,
  eventConMob: getValues.eventConMob,
  eventConMail: getValues.eventConMail,
  eventLink: getValues.eventLink,
  eventDate: getValues.eventDate,
     });
     
  }

  return (
    <>
      <Container className={classes.maintopmargin}>
        <Typography variant="h3">
          Want to feature tech event on Devent
        </Typography>
        <Divider/>
      </Container>
      <Container>
        <FormGroup autoComplete="off">
          <FormControl>
            <TextField
              className={classes.textField}
              autoComplete="off"
              label="Event Name"
              variant="outlined"
              color="secondary"
              name="eventName"
              onChange={(e) => (onValueChange(e))}
            />
          </FormControl>
          <FormControl>
            <TextField
              className={classes.textField}
              autoComplete="off"
              label="Event Description"
              variant="outlined"
              color="secondary"
              name="eventDescription"
              onChange={(e) => (onValueChange(e))}
            />
          </FormControl>
          <FormControl>
            <TextField
              className={classes.textField}
              autoComplete="off"
              label="Who can Apply"
              variant="outlined"
              color="primary"
              name="eventWhoApply"
              onChange={(e) => (onValueChange(e))}
            />
          </FormControl>
          <FormControl>
            <TextField
              className={classes.textField}
              autoComplete="off"
              label="Contact Mobile"
              variant="outlined"
              color="primary"
              type="number"
              name="eventConMob"
              onChange={(e) => (onValueChange(e))}
            />
          </FormControl>
          <FormControl>
            <TextField
              className={classes.textField}
              autoComplete="off"
              label="Contact mail"
              variant="outlined"
              color="primary"
              type="mail"
              name="eventConMail"
              onChange={(e) => (onValueChange(e))}
            />
          </FormControl>
          <FormControl>
            <TextField
              className={classes.textField}
              autoComplete="off"
              label="Regestration Link"
              variant="outlined"
              color="primary"
              type="link"
              name="eventLink"
              onChange={(e) => (onValueChange(e))}
            />
          </FormControl>
            <TextField
              className={classes.textField}
              autoComplete="off"
              id="date"
              label="Event Date"
              type="date"
              name="eventDate"
              onChange={(e) => (onValueChange(e))}
              // defaultValue={Today}
              className={classes.textField}
              autoComplete="off"
              InputLabelProps={{
                shrink: true,
              }}
            />
          <Button 
          onClick={pushEventValues} 
          variant="contained" color="secondary">
            Submit request
          </Button>
        </FormGroup>
      </Container>
    </>
  );
};

export default AddEvent;