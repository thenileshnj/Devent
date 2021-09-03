import { Container, Link, makeStyles } from "@material-ui/core";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Room,
  Star,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  mainRoot: {
    marginTop: "7rem",
    minHeight: "90vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ff2844",
    // background: "linearGradiant(20deg, #ff2844, #6741ff)",
  },
  profileContainer: {
    position: "relative",
    backgroundColor: "#fff",
    width: "40rem",
    padding: "10rem 5rem 4rem",
    borderRadius: "1.5rem",
    boxShadow: "0 0 6rem .5rem rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: "13rem",
    height: "13rem",
    overflow: "hidden",
    border: ".5rem solid #b92a76",
    borderRadius: "50%",
    boxShadow: "0 .8rem 5.5rem #b92a76a4",
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  profileImg: {
    width: "100%",
    maxWidth: "100",
    transform: "scale(1.1)",
  },
  info: {
    marginBottom: "1.2rem",
    fontSize: "2.3rem",
  },
  myName: {
    fontSize: "2.9rem",
    fontWeight: "bolder",
    letterSpacing: ".1rem",
    color: "#b92a76",
  },
  role: {},
  myInfo: {
    marginBottom: "2rem",
    fontSize: "1.85rem",
  },
  socialContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  socialBtns: {
    width: "20rem",
    height: "3.8rem",
    backgroundColor: "#8f00ff",
    border: ".1rem solid #fe6701",
    // padding: ".4rem 1rem",
    margin: ".6rem .4rem",
    display: "grid",
    placeItems: "center",
    borderRadius: "1.7rem",
    color: "#fff",
    fontSize: "20rem !important",
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.mainRoot}>
        <div className={classes.profileContainer}>
          <div className={classes.imgContainer}>
            <img
              className={classes.profileImg}
              src="Nilesh Nj.jpg"
              alt="Nilesh nj"
            />
          </div>
          <p className={`${classes.info} ${classes.myName}`}>Nilesh Nj</p>
          <p className={`${classes.info} ${classes.role}`}>
            <Star />
            Web Developer
          </p>
          <p className={`${classes.info} ${classes.place}`}>
            <Room />
            Maharashtra, India
          </p>
          <div className={classes.myInfo}>
            <p>
              I am a Full Stack Web developer and working as a freelancer for
              lots of people and companies
            </p>
          </div>

          <div className={classes.socialContainer}>
            <Link
              className={classes.socialBtns}
              target="_blank"
              href="https://in.linkedin.com/in/thenileshnj"
            >
              <LinkedIn />
            </Link>
            <Link
              className={classes.socialBtns}
              target="_blank"
              href="https://www.instagram.com/thenileshnj/"
            >
              <Instagram />
            </Link>
            <Link
              className={classes.socialBtns}
              target="_blank"
              href="https://www.facebook.com/thenileshnj"
            >
              <Facebook />
            </Link>
            <Link
              className={classes.socialBtns}
              target="_blank"
              href="https://github.com/thenileshnj"
            >
              <GitHub />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
