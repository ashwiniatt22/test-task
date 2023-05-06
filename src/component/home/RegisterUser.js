import { Box, Button, Card, CardContent, Container, FormControl, FormHelperText, Grid, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import * as yep from "yup";
import Axios from "axios";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#000',
        "@media (max-width: 1280px)": {
            "& .MuiContainer-maxWidthLg": {

            },
        },
    },
    outerGridText: {
        padding: "60px 36px 60px 0px !important",
        "@media (max-width: 920px)": {
            padding: "60px 36px 60px 40px !important",
            textAlign: "center",
        },

    },
    TextBox: {
        borderRadius: "5px",
        background: "#171717",
        height: "46px",
        fontSize: "13px",
        caretColor: '#fff',
        "&::placeholder": {
            color: "#fff !important",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "24px",
        },
        "& .MuiInputBase-input": {
            color: "#D9D9D9 !important",
            height: "30px",
            fontFamily: "Roboto !important",
            paddingLeft: "14px",
            paddingTop: "6px",
            paddingRight: '20px'
        },
        "& .MuiInput-underline:after": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: 'none !important'
        },
        "& .MuiIconButton-edgeEnd": {
            marginRight: "10px"
        },
        '& .MuiInputBase-root': {
            border: "1px solid #585757",
        }
    },
    label: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "24px",
        marginTop: "15px !important",
        marginBottom: "5px !important",
        color: "#D9D9D9",
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
        },
    },
    label1: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "24px",
        marginTop: '-16px !important',
        marginBottom: "5px !important",
        color: "#D9D9D9",
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
        },
    },

    cardcss: {
        color: '#1A1919',
        margin: ' 0 auto',
        maxWidth: '900px',
        minHeight: '263px',
        overflowY: 'auto',
        paddingTop: '17px',
        paddingLeft: '50px',
        borderRadius: '33px',
        paddingRight: '50px',
        paddingBottom: '36px',
        backgroundColor: '#1A1919',
        textAlign: 'start'
    },
    spotSmartT: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "25px",
        color: "#FFFFFF",
        textTransform: "none",
        cursor: "pointer",
        background: "transparent",
        border: "none",
        "& .MuiSelect-icon": {
            color: "#fff",
        },
        "& .MuiInputBase-input": {
            padding: '0 35px'
        }
    },
    formTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "24px",
        color: '#fff',
        marginTop: '20px'
    },
    largeText: {
        fontFamily: "Saira Semi Condensed",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "32px",
        lineHeight: "71px",
        color: "#FDFAFE",
        paddingBottom: '10px'
    },
    inputdate: {
        width: '100%',
        borderRadius: "5px",
        background: "#171717",
        height: "46px",
        color: '#fff',
        padding: '0 10px'
    },
    selector: {
        fontFamily: "Saira Semi Condensed",
        // width: "100%",
        border: "1px solid #585757",
        borderRadius: "10px",
        height: "50px",
        "@media(max-width:959px)": {
            width: "100%",
        },
        color: "#D9D9D9"
    },
    BoxGap: {
        marginTop: '20px'
    },
    ButtonBox: {
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
}));


export default function RegisterUser() {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedOptionM, setSelectedOptionM] = useState("");
    const [selectedOptionstatus, setSelectedOptionstatus] = useState("");
    const [isloading, setLoader] = useState(false);
    const [toData, setToData] = useState(null);
    const [countries, setCountries] = useState([]);
    const [city, setCity] = useState([]);
    const [state, setState] = useState([]);
    const history = useHistory();

    const handleChangeSelect = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleChange1 = (event) => {
        setSelectedOptionM(event.target.value);
    };
    const handleChangestatus = (event) => {
        setSelectedOptionstatus(event.target.value);
    };

    const handleFormSubmit = async (values) => {
        sessionStorage.setItem("email", values.email);

        setLoader(true);
        try {
            const res = await Axios({
                method: "POST",
                url: "url",
                data: {

                },
            });

            if (res.data.statusCode === 200) {
                toast.success("You are successfully logged in.");
                history.push("/dashboard");
            } else if (res.data.statusCode === 500) {
                setLoader(false);
                toast.error(
                    "Cannot reach internet. Please check your device internet connections."
                );
            } else {
                toast.warn(res.data.message);
            }
        } catch (error) {
            console.log("ERROR", error);
            setLoader(false);
            if (error.res) {
                toast.error("something went wrong");
            } else {
                toast.error(error.response.data.responseMessage);
            }
        }
    };
    useEffect(() => {
        axios.get("/static/json/countries.json").then(function (response) {
            setCountries(response.data.countries);
        });
    }, [])
    useEffect(() => {
        axios.get("/static/json/cities.json").then(function (response) {
            setCity(response.data.cities);

        });
    }, [])
    useEffect(() => {
        axios.get("/static/json/states.json").then(function (response) {
            setState(response.data.states);

        });
    }, [])
    const changeCountryList = (name) => {
        const selectted = countries?.filter((cont) => {
            return cont.name === name;
        });
    };

    const changeCountry = (e) => {
        const name = e.target.value;
        changeCountryList(name);
    };

    const changeStateList = (name) => {
        const selectted = countries?.filter((cont) => {
            return cont.name === name;
        });
    };

    const changeState = (e) => {
        const name = e.target.value;
        changeStateList(name);
    };

    const changeCityList = (name) => {
        const selectted = countries?.filter((cont) => {
            return cont.name === name;
        });
    };

    const changeCity = (e) => {
        const name = e.target.value;
        changeCityList(name);
    };

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
                                User Registration
                            </Typography>

                        </Box>
                        <Box>
                            <Formik
                                onSubmit={(values) => handleFormSubmit(values)}
                                initialValues={{
                                    name: "",
                                    number: "",
                                    aadharcard: "",
                                    pancard: "",
                                    guardianDetails: "",
                                    email: "",
                                    emergency: "",
                                    address: "",
                                    country: "",
                                    piccode: "",
                                    occupation: "",
                                    nationality: "",
                                    religion: "",
                                    DOB: "",
                                    gender: ""
                                }}
                                initialStatus={{
                                    success: false,
                                    successMsg: "",
                                }}
                                validationSchema={yep.object().shape({

                                    name: yep
                                        .string()
                                        .required("name is required"),
                                    number: yep
                                        .string(),

                                    aadharcard: yep
                                        .string()
                                        .required("number is required"),
                                    DOB: yep.date()
                                        .required("Please enter your date of birth")
                                        .max(new Date(), "Date of birth cannot be in the future"),
                                    gender: yep.string().required("Please select your gender"),
                                })}
                            >
                                {({
                                    errors,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                    touched,
                                    values,
                                    setFieldValue,
                                }) => (
                                    <Form>
                                        <Card className={classes.cardcss}>
                                            <CardContent>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Typography className={classes.formTitle}>Personal Details</Typography>
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Full Name <span style={{ color: "red" }}>*</span>
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your name"
                                                                        type="text"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="name"
                                                                        id="name"
                                                                        value={values.name}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.otp && errors.otp)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    /> <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",
                                                                        }}
                                                                    >
                                                                        {touched.name && errors.name}
                                                                    </FormHelperText>
                                                                </Box>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Mobile Number
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your Mobile Number"
                                                                        type="Number"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="number"
                                                                        id="number"
                                                                        value={values.number}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.otp && errors.otp)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    />
                                                                    <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",
                                                                        }}
                                                                    >
                                                                        {touched.number && errors.number}
                                                                    </FormHelperText>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Date of birth <span style={{ color: "red" }}>*</span>
                                                                    </label>
                                                                    <div className={classes.forminputDate}>
                                                                        <input type="date" id="DOB" name="DOB" className={classes.inputdate} />
                                                                        {/* <KeyboardDatePicker
                                                                            className={`${classes.date} textFeilds`}
                                                                            InputProps={{
                                                                                className: classes.TextBox,
                                                                            }}
                                                                            placeholder="DD/MM/YYYY"
                                                                            format="DD/MM/YYYY"
                                                                            inputVariant="outlined"
                                                                            disableFuture
                                                                            margin="dense"
                                                                            value={toData}
                                                                            onChange={(date) => setToData(date)}
                                                                        />{" "} */}
                                                                    </div>
                                                                    {errors.DOB && touched.DOB && (
                                                                        <FormHelperText
                                                                            error
                                                                            style={{
                                                                                fontSize: "12px",
                                                                                fontFamily: "Roboto",

                                                                            }}>{errors.DOB}</FormHelperText>
                                                                    )}

                                                                </Box>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Govt issued ID
                                                                    </label>

                                                                    <Select
                                                                        value={selectedOption}
                                                                        onChange={handleChangeSelect}
                                                                        displayEmpty
                                                                        className={classes.spotSmartT}
                                                                        MenuProps={{ classes: { paper: classes.menu1 } }}
                                                                    >
                                                                        <MenuItem value="" disabled className={classes.menuItem}>
                                                                            ID type
                                                                        </MenuItem>
                                                                        <MenuItem value="pan" className={classes.menuItem}>
                                                                            Pan Card
                                                                        </MenuItem>
                                                                        <MenuItem value="aadhar" className={classes.menuItem}>
                                                                            Aadhar Card
                                                                        </MenuItem>
                                                                    </Select>

                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your govt id"
                                                                        type={
                                                                            selectedOption == "aadhar" ?
                                                                                "Number" : "text"
                                                                        }
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name={selectedOption == "aadhar" ? "aadharcard" : "pancard"}
                                                                        id="number"
                                                                        value={values.number}
                                                                        inputProps={{ maxLength: 12 }}
                                                                        error={Boolean(touched.otp && errors.otp)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    />

                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap} style={{ display: 'grid', marginTop: '0' }}>


                                                                    <label className={classes.label}>
                                                                        Gender <span style={{ color: "red" }}>*</span>
                                                                    </label>
                                                                    <Field
                                                                        as="select"
                                                                        name="gender"
                                                                        value={selectedOptionM}
                                                                        onChange={handleChange1}
                                                                        className={`${classes.spotSmartT} ${errors.gender && touched.gender ? classes.error : ""
                                                                            }`}
                                                                    >
                                                                        <option value="" disabled>
                                                                            Select your gender
                                                                        </option>
                                                                        <option value="male">Male</option>
                                                                        <option value="female">Female</option>
                                                                    </Field>
                                                                    <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",

                                                                        }}>{errors.gender}</FormHelperText>
                                                                </Box>

                                                            </Grid>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <Typography className={classes.formTitle}>Contact Details</Typography>
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Guardian Details
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your Guardian Details"
                                                                        type="text"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="guardianDetails"
                                                                        id="guardianDetails"
                                                                        value={values.guardianDetails}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.guardianDetails && errors.guardianDetails)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    /> <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",
                                                                        }}
                                                                    >
                                                                        {touched.guardianDetails && errors.guardianDetails}
                                                                    </FormHelperText>
                                                                </Box>

                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Email
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your email id"
                                                                        type="text"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="email"
                                                                        id="email"
                                                                        value={values.email}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.email && errors.email)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    />
                                                                    <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",
                                                                        }}
                                                                    >
                                                                        {touched.email && errors.email}
                                                                    </FormHelperText>
                                                                </Box>

                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Emergency Contact Number
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your  Emergency Contact Number"
                                                                        type="number"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="emergency"
                                                                        id="emergency"
                                                                        value={values.emergency}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.emergency && errors.emergency)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    />
                                                                </Box>

                                                            </Grid>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <Typography className={classes.formTitle}>Address Details</Typography>
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Address
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your address"
                                                                        type="text"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="address"
                                                                        id="name"
                                                                        value={values.address}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.otp && errors.otp)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    /> <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",
                                                                        }}
                                                                    >
                                                                        {touched.address && errors.address}
                                                                    </FormHelperText>
                                                                </Box>
                                                                {/* <Box className={classes.BoxGap} style={{ display: 'grid' }}>
                                                                    <label className={classes.label1} >
                                                                        Select State
                                                                    </label>
                                                                    <FormControl
                                                                        style={{ marginTop: "8px" }}
                                                                        className={classes.select}
                                                                    >
                                                                        <Select
                                                                            // placeholder="Select your country"
                                                                            margin="dense"
                                                                            fullWidth
                                                                            id="inputID"
                                                                            className={classes.selector}
                                                                            name="state"
                                                                            defaultValue={20}
                                                                            value={values.state}
                                                                            error={Boolean(touched.state && errors.state)}
                                                                            onBlur={handleBlur}
                                                                            onChange={(e) => {
                                                                                handleChange(e);
                                                                                changeState(e);
                                                                                setFieldValue("country", e.target.value);
                                                                                console.log("e.target.value", e.target.value)
                                                                            }}

                                                                            displayEmpty
                                                                            inputProps={{
                                                                                className: classes.textfiled,
                                                                                "aria-label": "Select Country"
                                                                            }}
                                                                            disablePortal

                                                                        >
                                                                            <MenuItem value={20} disabled>
                                                                                Select state
                                                                            </MenuItem>
                                                                            {state?.map((states) => {
                                                                                return (
                                                                                    <MenuItem
                                                                                        key={states.name + states.id}
                                                                                        value={states.name}

                                                                                    >
                                                                                        {states.name}
                                                                                    </MenuItem>
                                                                                );
                                                                            })}

                                                                        </Select>
                                                                    </FormControl>

                                                                </Box> */}

                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap} style={{ display: 'grid' }}>
                                                                    <label className={classes.label1} >
                                                                        Select Country
                                                                    </label>
                                                                    <FormControl
                                                                        style={{ marginTop: "8px" }}
                                                                        className={classes.select}
                                                                    >
                                                                        <Select
                                                                            // placeholder="Select your country"
                                                                            margin="dense"
                                                                            fullWidth
                                                                            id="inputID"
                                                                            className={classes.selector}
                                                                            name="country"
                                                                            defaultValue={10}
                                                                            value={values.country}
                                                                            error={Boolean(touched.country && errors.country)}
                                                                            onBlur={handleBlur}
                                                                            onChange={(e) => {
                                                                                handleChange(e);
                                                                                changeCountry(e);
                                                                                setFieldValue("country", e.target.value);
                                                                                console.log("e.target.value", e.target.value)
                                                                            }}

                                                                            displayEmpty
                                                                            inputProps={{
                                                                                className: classes.textfiled,
                                                                                "aria-label": "Select Country"
                                                                            }}
                                                                            disablePortal

                                                                        >
                                                                            <MenuItem value={10} disabled>
                                                                                Select country
                                                                            </MenuItem>
                                                                            {countries?.map((countries) => {
                                                                                return (
                                                                                    <MenuItem
                                                                                        key={countries.name + countries.id}
                                                                                        value={countries.name}

                                                                                    >
                                                                                        {countries.name}
                                                                                    </MenuItem>
                                                                                );
                                                                            })}

                                                                        </Select>
                                                                    </FormControl>

                                                                </Box>

                                                            </Grid>
                                                            <Grid item xs={12} md={4}>

                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Pin Code
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your piccode"
                                                                        type="number"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="piccode"
                                                                        id="piccode"
                                                                        value={values.piccode}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.piccode && errors.piccode)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    /> <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",
                                                                        }}
                                                                    >
                                                                        {touched.piccode && errors.piccode}
                                                                    </FormHelperText>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <Typography className={classes.formTitle}>Other Details</Typography>
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Occupation
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your Occupation"
                                                                        type="text"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="occupation"
                                                                        id="occupation"
                                                                        value={values.occupation}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.occupation && errors.occupation)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    /> <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",
                                                                        }}
                                                                    >
                                                                        {touched.occupation && errors.occupation}
                                                                    </FormHelperText>
                                                                </Box>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Nationality
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your Nationality"
                                                                        type="text"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="nationality"
                                                                        id="nationality"
                                                                        value={values.nationality}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.nationality && errors.nationality)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    /> <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",
                                                                        }}
                                                                    >
                                                                        {touched.nationality && errors.nationality}
                                                                    </FormHelperText>
                                                                </Box>

                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Religion
                                                                    </label>
                                                                    <TextField
                                                                        // label="Enter Your OTP"
                                                                        placeholder="Enter your Religion"
                                                                        type="text"
                                                                        onWheel={() => document.activeElement.blur()}
                                                                        variant="outlined"
                                                                        size="small"
                                                                        fullWidth
                                                                        name="religion"
                                                                        id="religion"
                                                                        value={values.religion}
                                                                        inputProps={{ maxLength: 6 }}
                                                                        error={Boolean(touched.religion && errors.religion)}
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        InputProps={{
                                                                            className: classes.TextBox,
                                                                        }}
                                                                        className={classes.TextBox}

                                                                    /> <FormHelperText
                                                                        error
                                                                        style={{
                                                                            fontSize: "12px",
                                                                            fontFamily: "Roboto",
                                                                        }}
                                                                    >
                                                                        {touched.religion && errors.religion}
                                                                    </FormHelperText>

                                                                </Box>

                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <Box className={classes.BoxGap}>
                                                                    <label className={classes.label}>
                                                                        Marital Status
                                                                    </label>
                                                                    <Select
                                                                        value={selectedOptionstatus}
                                                                        onChange={handleChangestatus}
                                                                        displayEmpty
                                                                        className={classes.spotSmartT}
                                                                        MenuProps={{ classes: { paper: classes.menu1 } }}
                                                                    >
                                                                        <MenuItem value="" disabled className={classes.menuItem}>
                                                                            select  Marital Status
                                                                        </MenuItem>
                                                                        <MenuItem value="single" className={classes.menuItem}>
                                                                            single
                                                                        </MenuItem>
                                                                        <MenuItem value="married" className={classes.menuItem}>
                                                                            married
                                                                        </MenuItem>
                                                                        <MenuItem value="divorced" className={classes.menuItem}>
                                                                            divorced
                                                                        </MenuItem>
                                                                        <MenuItem value="separated" className={classes.menuItem}>
                                                                            separated
                                                                        </MenuItem>
                                                                    </Select>
                                                                </Box>

                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box style={{
                                                            display: 'flex',
                                                            justifyContent: 'center', gap: '30px', padding: '20px 0'
                                                        }}>
                                                            <Button type='submit' className={classes.ButtonBox}>Submit</Button>
                                                            <Button className={classes.ButtonBox}> Cancel</Button>
                                                        </Box>
                                                    </Grid>
                                                </Grid>

                                            </CardContent>
                                        </Card>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}
