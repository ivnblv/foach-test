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
    }
  }
});
export default theme;
