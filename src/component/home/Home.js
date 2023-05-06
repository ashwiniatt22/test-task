import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Container, Button, TextField } from "@material-ui/core";
import { IoIosArrowForward, IoMdArrowDroprightCircle } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#000',
    "@media (max-width: 1280px)": {
      "& .MuiContainer-maxWidthLg": {

      },
    },
  },
  outerGridText: {
    padding: "110px 36px 110px 0px !important",
    "@media (max-width: 920px)": {
      padding: "110px 36px 110px 40px !important",
      textAlign: "center",
    },

  },
  dielplan: {
    background: "#2DB2DC",
    borderRadius: "20px",
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15.2381px",
    lineHeight: "18px",
    color: "#120F10",
    cursor: "pointer",
    padding: "12px 24px",
    textTransform: "none",
    minWidth: "200px",
    "&:hover": {
      color: '#fff',
      background: "#2DB2DC",
      border: '2px solid #FDFAFE',
    },
  },
  Explore: {
    fontFamily: "Saira Semi Condensed",
    borderRadius: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15.2381px",
    lineHeight: "18px",
    color: "#FDFAFE",
    cursor: "pointer",
    // background: "linear-gradient(320deg, #1F7C99 0%, #15D7D7 100%)",
    // "-webkit-background-clip": "text",
    // "-webkit-text-fill-color": "transparent",
    // backgroundClip: "text",
    // textFillColor: "transparent",
    // textTransform: "none",
    padding: "12px 24px",
    border: '2px solid #FDFAFE',
    minWidth: "200px",
    "&:hover": {
      color: '#fff',
      background: "#2DB2DC",

    },
    textTransform: 'capitalize'
  },
  twobtnBox: {
    display: 'flex',
    gap: '30px',
    paddingTop: '50px',
    justifyContent: 'center'
  },
  largeText: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "48px",
    lineHeight: "71px",
    color: "#FDFAFE",
  },
  smallText: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "28px",
    lineHeight: "40px",
    color: "#FDFAFE",
  },
  imgGrid: {
    display: 'flex',
    justifyContent: 'center',
  }
}));


export default function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={2} >
          <Grid item xs={12} className={classes.outerGridText}
            style={{
              paddingBottom: '0px',
              textAlign: 'center'
            }}>
            <Box>
              <Typography className={classes.largeText}>
                Welcome to our website!
              </Typography>
              <Typography className={classes.smallText}>
                We're here to provide you with a user-friendly
                experience and valuable resources. Please take a look around and feel free to contact us
                if you have any questions or feedback. Thanks for visiting!
              </Typography>

              <Box className={classes.twobtnBox}>
                <Button className={classes.dielplan}>
                  Join Us &nbsp;&nbsp;&nbsp; <IoIosArrowForward />
                </Button>
                <Button className={classes.Explore}>
                  Register &nbsp;&nbsp;&nbsp; <IoMdArrowDroprightCircle />
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}
