import React from "react";
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
  const classes = styles();
  return (
    <ThemeProvider theme={registerTheme}>
      <Box className={classes.container} p="2rem 2rem 4rem 2rem">
        <Typography className={classes.title}>Sign up</Typography>
        <form className={classes.form}>
          <Grid container spacing={2} justify="center">
            <Grid item sm={6} xs={12}>
              <Input label="First Name" className={classes.input} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input label="Last Name" className={classes.input} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input label="Phone Number" className={classes.input} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormSelect
                className={classes.input}
                label="Amount to invest"
                options={["100", "200", "300"]}
              />
            </Grid>
            <Grid item xs={12}>
              <Input label="Email Address" className={classes.input} />
            </Grid>
            <Grid item xs={12}>
              <Input label="Confirm Email Address" className={classes.input} />
            </Grid>
            <Grid item xs={12}>
              <Input label="Password" className={classes.input} />
            </Grid>
            <Grid item xs={12}>
              <Input label="Confirm Password" className={classes.input} />
            </Grid>
            <Grid item xs={12}>
              <FormCheckbox
                value={"123"}
                className={classes.label}
                label={
                  <Typography>
                    I certify that I am 18 years of age or older, and I agree to
                    the <Link href="#"> Terms of Service</Link> and
                    <Link href="#"> Privacy Policy</Link>.
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormCheckbox
                value={"123"}
                className={classes.label}
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
