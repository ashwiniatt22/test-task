import React from 'react'
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Container,
} from "@material-ui/core";
// import moment from "moment";


const userData = [
  {
    name: 'Nilesh Fatfatwale',
    date: '07/01/200',
    sex: 'Male',
    mobile: '99999999999',
    govtId: '7896541235',
    gardian: 'Vijay',
    address: 'Pune',
    nationality: 'Indian',
  }
]

const useStyles = makeStyles((theme) => ({
  headCell: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFFFFF",
  },
  tables: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#FFFFFF",
  },
  largeText: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "71px",
    color: "#FDFAFE",
    paddingTop: '30px',
    paddingBottom: '10px'
  },
}))

export default function UserInfo() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={2} >
          <Grid item xs={12} className={classes.outerGridText}
            style={{
              paddingBottom: '0px'
            }}>
            <Box>
              <Typography className={classes.largeText}>
                All User Information
              </Typography>

            </Box>
            <Box>
              {!userData.length == 0 ?
                <TableContainer className="TableContainerBox">
                  <Table
                    aria-label="simple table"
                    style={{ minWidth: "700px", overflow: 'auto' }}
                  >
                    <TableHead
                      style={{
                        minWidth: "700px",
                        background:
                          "linear-gradient(180.99deg, #2FF3FF -25%, #1E92AA 141.48%)",
                        overflow: 'auto'
                      }}
                    >
                      <TableRow>
                        <TableCell align="center" className={classes.headCell}>
                          Sr no.
                        </TableCell>
                        <TableCell align="center" className={classes.headCell}>
                          Name
                        </TableCell>

                        <TableCell align="center" className={classes.headCell}>
                          Date Of Birth
                        </TableCell>

                        <TableCell align="center" className={classes.headCell}>
                          sex
                        </TableCell>
                        <TableCell align="center" className={classes.headCell}>
                          Mobile Number
                        </TableCell>
                        <TableCell align="center" className={classes.headCell}>
                          Govt ID
                        </TableCell>
                        <TableCell align="center" className={classes.headCell}>
                          Guardian Details
                        </TableCell>
                        <TableCell align="center" className={classes.headCell}>
                          Address
                        </TableCell>
                        <TableCell align="center" className={classes.headCell}>
                          Nationality
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {
                        userData &&
                        userData.map((values, index) => {
                          return (
                            <TableRow>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {index + 1}
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values?.name}
                              </TableCell>

                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.date}
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.sex}
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.mobile}
                                {/* {moment(values.date).format('Do MMM YYYY, h:mm a')} */}
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.govtId}
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.gardian}
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.address}
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.nationality}
                              </TableCell>
                            </TableRow>
                          );
                        })
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
                :
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography className={classes.headCell}>No Data Found</Typography>
                </div>
              }
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}
