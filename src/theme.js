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
    }
  }
});
export default theme;
