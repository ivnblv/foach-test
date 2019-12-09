import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-lato";
import "typeface-playfair-display";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato"
  },
  palette: {
    primary: { main: "#1EAAFC" }
  },
  overrides: {
    MuiFormHelperText: {
      root: {
        "&$error": {
          maxWidth: "65%",
          position: "absolute",
          bottom: "-0.9rem",
          backgroundColor: "#fff",
          paddingLeft: ".3rem"
        }
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: "14px",
        color: "#C2C2C2",
        lineHeight: "17px"
      }
    },
    MuiCheckbox: {
      root: {
        color: " #C2C2C2"
      }
    },
    MuiSwitch: {
      switchBase: {
        color: "#979797",
        "&$checked ": {
          color: "#1EAAFC",
          "& + $track": {
            backgroundColor: "#ECF6FE",
            opacity: 1
          }
        }
      },
      thumb: {
        width: "18px",
        height: "18px"
      },
      checked: {},
      track: {
        width: "32px",
        backgroundColor: "rgba(151, 151, 151, 0.3)",
        opacity: 1,
        borderRadius: "5px"
      }
    }
  }
});
export default theme;
