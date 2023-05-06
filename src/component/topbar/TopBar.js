import React, { useEffect, useState } from 'react'
import { Drawer, Grid, List, ListItem, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
    "@media(max-width:1278px)": {
      display: "none",
    },
  },
  root1: {
    display: "none",
    "@media(max-width:1278px)": {
      display: "block",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  linkButtonsDiv: {
    display: "flex",
    gap: "14px",
  },
  logo: {
    width: '60px',
    height: '60px'
  },

  register: {
    background: "linear-gradient(89.1deg, #00F0FF 1.02%, #1E92AA 72.36%)",
    borderRadius: "20px",
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15.2381px",
    lineHeight: "18px",
    color: "#FFFFFF",
    cursor: "pointer",
    padding: "12px 24px",
    textTransform: "none",
    minWidth: "200px"
  },
  Login: {
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
    minWidth: "200px"
  },
  linkButton: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "27px",
    color: "#FDFAFE",
    cursor: "pointer",
  },
  linkButton1: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "27px",
    color: "#FFFFFF",
    cursor: "pointer",
  },

  registerBox: {
    display: "flex",
    gap: "20px",
  },
  drawerRight: {
    "& .MuiDrawer-paperAnchorRight": {
      background: "#161616",
      padding: "30px 20px",
    },
  },
  toolbarlogo: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const [openDrawerContent, setOpenDrawerContent] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawerContent(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawerContent(false);
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#191919", height: "75px" }}
        >
          <Toolbar className={classes.toolbar}>
            <Box>
              <img className={classes.logo} src="/images/logo.png" />
            </Box>
            <Box className={classes.linkButtonsDiv}>
              <Button className={classes.linkButton}>Home</Button>
              <Button className={classes.linkButton}>About Us</Button>

            </Box>


            <Box className={classes.registerBox}>
              <Button
                className={classes.register}

              >
                Register
              </Button>

            </Box>

          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.root1}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#0E2326", height: "67px" }}
        >
          <Toolbar className={classes.toolbarlogo}>
            <Box>
              <img className={classes.logo} src="/images/logo.png" />
            </Box>
            <Box>
              <MenuIcon onClick={handleDrawerOpen} />
            </Box>
          </Toolbar>
          <Drawer
            anchor="right"
            open={openDrawerContent}
            onClose={handleDrawerClose}
            className={classes.drawerRight}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                className={classes.gridfour}
                style={{ width: "10rem" }}
              >
                <List>
                  <img className={classes.logo} src="/images/logo.png" />
                  <ListItem className={classes.linkButton1}>Home</ListItem>
                  <ListItem className={classes.linkButton1}>
                    About Us
                  </ListItem>
                  <ListItem
                    style={{ maxWidth: '100px', minWidth: '100px' }}
                    className={classes.register}

                  >
                    Register
                  </ListItem>

                </List>
              </Grid>
            </Grid>
          </Drawer>
        </AppBar>
      </div>
    </>
  )
}
