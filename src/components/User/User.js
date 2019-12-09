import React from "react";
import {
  Switch,
  Grid,
  FormControlLabel,
  Avatar,
  Box,
  Typography
} from "@material-ui/core";
import styles from "./styles";
import photo from "../../img/account_circle-24px.svg";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const userTheme = theme =>
  createMuiTheme({
    typography: {
      ...theme.typography,
      h2: {
        fontSize: 30,
        lineHeight: "36px",
        letterSpacing: "0.75px",
        fontWeight: "normal",
        fontStyle: "normal"
      }
    },
    palette: {
      ...theme.palette
    },
    overrides: {
      MuiSwitch: {
        switchBase: {
          color: "#979797",
          "&$checked": {
            "& + $track": {
              backgroundColor: "#ECF6FE !important"
            }
          }
        },
        thumb: {
          width: "18px",
          height: "18px"
        },
        checked: {},
        track: {
          backgroundColor: "rgba(151, 151, 151, 0.3)"
        }
      }
    }
  });

const User = ({ id, name, position, onVacation, changeUserVacation }) => {
  const classes = styles();
  return (
    <ThemeProvider theme={userTheme}>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12} sm={3}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ height: "100%" }}
          >
            <Avatar className={classes.avatar} src={photo}>
              {name[0]}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex-column" pt="1.5rem" pb="2rem">
            <Box mb="1.5rem">
              <Typography variant="h2" className={classes.textPrimary}>
                {name}
              </Typography>
            </Box>
            <Box mb="1.5rem">
              <Typography
                variant="h2"
                className={
                  onVacation ? classes.textSecondary : classes.textPrimary
                }
              >
                {position}
              </Typography>
            </Box>
            <Typography>
              <FormControlLabel
                label="On vacation"
                labelPlacement="end"
                className={classes.switch}
                control={
                  <Switch
                    checked={onVacation}
                    onChange={() => changeUserVacation(id)}
                    color="primary"
                  />
                }
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default User;
