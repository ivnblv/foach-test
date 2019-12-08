import React, { useState, useEffect } from "react";
import { Typography, Grid, Box, Button, Link } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Input from "../formElements/Input";
import FormCheckbox from "../formElements/FormCheckbox";
import FormSelect from "../formElements/FormSelect";
import styles from "./styles";

const registerTheme = theme =>
  createMuiTheme({
    ...theme,
    typography: {
      ...theme.typography,
      fontSize: 14,
      fontFamily: "Lato",
      text: {
        ...theme.text,
        primary: "#161616"
      },
      body1: {
        fontSize: 14
      },
      body2: {
        lineHeight: "20px"
      }
    }
  });

const Register = () => {
  const [values, setValues] = useState({
    firstName: "123",
    lastName: "",
    phone: "",
    amount: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    terms: false,
    news: false
  });
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    Object.values(values).includes("")
      ? setSubmitDisabled(true)
      : setSubmitDisabled(false);
  }, [values]);

  const handleInput = ({ target: { name, value } }, type) => {
    // setValues(Object.assign({}, { ...values }, { [name]: value }));
    switch (type) {
      case "text":
        setValues(Object.assign({}, { ...values }, { [name]: value }));
        break;
      case "bool":
        setValues(Object.assign({}, { ...values }, { [name]: !values[name] }));
        break;
      default:
        return;
    }
  };

  const classes = styles();
  return (
    <ThemeProvider theme={registerTheme}>
      <Box className={classes.container} p="2rem 2rem 4rem 2rem">
        <Typography className={classes.title}>Sign up</Typography>
        <form className={classes.form}>
          <Grid container spacing={2} justify="center">
            <Grid item sm={6} xs={12}>
              <Input
                label="First Name"
                className={classes.input}
                name="firstName"
                value={values.firstName}
                handleInput={handleInput}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input
                label="Last Name"
                className={classes.input}
                name="lastName"
                value={values.lastName}
                handleInput={handleInput}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input
                label="Phone Number"
                className={classes.input}
                name="phone"
                value={values.phone}
                handleInput={handleInput}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormSelect
                className={classes.input}
                label="Amount to invest"
                options={["100", "200", "300"]}
                name="amount"
                value={values.amount}
                handleInput={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Email Address"
                className={classes.input}
                name="email"
                value={values.email}
                handleInput={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Confirm Email Address"
                className={classes.input}
                name="confirmEmail"
                value={values.confirmEmail}
                handleInput={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Password"
                className={classes.input}
                name="password"
                value={values.password}
                handleInput={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Confirm Password"
                className={classes.input}
                name="confirmPassword"
                value={values.confirmPassword}
                handleInput={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <FormCheckbox
                value={values.terms}
                name="terms"
                className={classes.label}
                handleCheckbox={handleInput}
                label={
                  <Typography>
                    I certify that I am 18 years of age or older, and I agree to
                    the{" "}
                    <span>
                      <Link href="#"> Terms of Service</Link>
                    </span>{" "}
                    and
                    <span>
                      <Link href="#"> Privacy Policy</Link>
                    </span>
                    .
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormCheckbox
                value={values.news}
                name="news"
                className={classes.label}
                handleCheckbox={handleInput}
                label={
                  <Typography>
                    I would like to receive important information and periodic
                    news updates.
                  </Typography>
                }
              />
            </Grid>
            <Grid item mt={4}>
              <Box mt={2}>
                <Button
                  fullWidth
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disabled={submitDisabled}
                >
                  create account
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </ThemeProvider>
  );
};
export default Register;
